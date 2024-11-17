import React from 'react';
import { UserPlus, Upload, MessageSquare, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Account',
    description: 'Sign up for free and join our community',
  },
  {
    icon: Upload,
    title: 'Post Your Ad',
    description: 'List your items quickly and easily',
  },
  {
    icon: MessageSquare,
    title: 'Connect',
    description: 'Chat with buyers and sellers',
  },
  {
    icon: CreditCard,
    title: 'Make Deals',
    description: 'Complete your transaction safely',
  },
];

function HowItWorks() {
  return (
    <div className="py-8 bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h2 className="text-xl font-bold">How ZonoShop Works</h2>
            <p className="text-sm text-gray-600">Follow these simple steps</p>
          </div>
          <div className="flex-1 ml-8">
            <div className="flex flex-wrap md:flex-nowrap justify-around gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">{step.title}</h3>
                      <p className="text-xs text-gray-500">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block mx-4">
                        <div className="w-4 h-0.5 bg-gray-200"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;