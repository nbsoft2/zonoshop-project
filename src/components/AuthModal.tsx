import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, Mail, Lock, User, Phone, Instagram, BrandTiktok } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { 
  signInWithGoogle, 
  signInWithFacebook, 
  signInWithInstagram,
  signInWithTikTok,
  signInWithEmail, 
  signUpWithEmail 
} from '../lib/supabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AuthFormData {
  email: string;
  password: string;
  fullName?: string;
  phoneNumber?: string;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AuthFormData>();

  const onSubmit = async (data: AuthFormData) => {
    setIsLoading(true);
    try {
      if (isSignUp) {
        const { error } = await signUpWithEmail(data.email, data.password, data.fullName || '');
        if (error) throw error;
        toast.success('Account created successfully! Please verify your email.');
      } else {
        const { error } = await signInWithEmail(data.email, data.password);
        if (error) throw error;
        toast.success('Signed in successfully!');
      }
      reset();
      onClose();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: string) => {
    try {
      let error;
      switch (provider) {
        case 'google':
          ({ error } = await signInWithGoogle());
          break;
        case 'facebook':
          ({ error } = await signInWithFacebook());
          break;
        case 'instagram':
          ({ error } = await signInWithInstagram());
          break;
        case 'tiktok':
          ({ error } = await signInWithTikTok());
          break;
      }
      if (error) throw error;
      toast.success(`Signed in with ${provider} successfully!`);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg w-full max-w-md p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {isSignUp ? 'Create an Account' : 'Welcome Back'}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {isSignUp ? 'Sign up to start selling and buying' : 'Sign in to your account'}
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleSocialSignIn('google')}
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                Google
              </button>

              <button
                onClick={() => handleSocialSignIn('facebook')}
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
                Facebook
              </button>

              <button
                onClick={() => handleSocialSignIn('instagram')}
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
                Instagram
              </button>

              <button
                onClick={() => handleSocialSignIn('tiktok')}
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
                TikTok
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with email</span>
              </div>
            </div>

            {/* Rest of the form remains the same */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1 relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      {...register('fullName', { required: 'Full name is required' })}
                      type="text"
                      className="pl-10 block w-full rounded-md border border-gray-300 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="pl-10 block w-full rounded-md border border-gray-300 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    {...register('password', { 
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters'
                      }
                    })}
                    type="password"
                    className="pl-10 block w-full rounded-md border border-gray-300 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="mt-1 relative">
                    <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      {...register('phoneNumber')}
                      type="tel"
                      className="pl-10 block w-full rounded-md border border-gray-300 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="+256 700 000 000"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isLoading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </form>

            <div className="text-sm text-center">
              <button 
                onClick={() => setIsSignUp(!isSignUp)} 
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;