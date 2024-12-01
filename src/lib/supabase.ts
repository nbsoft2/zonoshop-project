import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  phone_number?: string;
  phone_verified: boolean;
  avatar_url?: string;
  provider?: string;
  social_links?: {
    instagram?: string;
    tiktok?: string;
  };
  created_at: string;
}

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent'
      }
    }
  });
  return { data, error };
}

export async function signInWithFacebook() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      scopes: 'email,public_profile'
    }
  });
  return { data, error };
}

export async function signInWithInstagram() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'instagram',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      scopes: 'basic,user_profile,user_media'
    }
  });
  return { data, error };
}

export async function signInWithTikTok() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'tiktok',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      scopes: 'user.info.basic,video.list'
    }
  });
  return { data, error };
}

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return { data, error };
}

export async function signUpWithEmail(email: string, password: string, fullName: string) {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName
      }
    }
  });

  if (authError) return { error: authError };

  if (authData.user) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([
        {
          id: authData.user.id,
          full_name: fullName,
          email,
          phone_verified: false,
          created_at: new Date().toISOString()
        }
      ]);

    if (profileError) return { error: profileError };
  }

  return { data: authData };
}

export async function linkSocialAccount(provider: string, accessToken: string) {
  const { data, error } = await supabase.auth.linkIdentity({
    provider,
    access_token: accessToken
  });
  return { data, error };
}

export async function updateSocialLinks(userId: string, links: { instagram?: string; tiktok?: string }) {
  const { error } = await supabase
    .from('profiles')
    .update({ 
      social_links: links
    })
    .eq('id', userId);

  return { error };
}

export async function verifyPhoneNumber(userId: string, phoneNumber: string, code: string) {
  // In a real app, you would integrate with a phone verification service
  // For demo purposes, we'll just update the database
  const { error } = await supabase
    .from('profiles')
    .update({ 
      phone_number: phoneNumber,
      phone_verified: true 
    })
    .eq('id', userId);

  return { error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error || !user) return { user: null, error };

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  return { user: { ...user, profile }, error: null };
}