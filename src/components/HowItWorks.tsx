'use client';

import { FC, JSX } from "react";
import { motion } from "framer-motion";
import {
    ChatBubbleLeftRightIcon,
    MapIcon,
    CreditCardIcon,
    PaperAirplaneIcon
  } from '@heroicons/react/24/outline';


  interface Step {
    title: string;
    description: string;
    icon: JSX.Element;
  }

  const steps: Step[] = [
    {
      title: 'Start Chatting',
      description: 'Launch the AI chat and tell us your destination, dates, and interests.',
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-sky-600" />
    },
    {
      title: 'Plan Your Trip',
      description: 'Our AI builds a personalized itinerary with flights, hotels, and things to do.',
      icon: <MapIcon className="h-6 w-6 text-emerald-600" />
    },
    {
      title: 'Confirm Booking',
      description: 'Review and book your full trip with one click, secure and seamless.',
      icon: <CreditCardIcon className="h-6 w-6 text-orange-500" />
    },
    {
      title: 'Travel Smart',
      description: 'Enjoy live updates, itinerary reminders, and AI help on the go.',
      icon: <PaperAirplaneIcon className="h-6 w-6 text-indigo-500" />
    },
  ];

const HowItWorks: FC = () => {
    return (
        <section
        id="how-it-works" 
        className="relative bg-emerald-400 dark:bg-gray-900 py-24 text-slate-900 px-6">
            <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white dark:text-white mb-12">How It Works</h2>
                <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {steps.map((step, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 
                        }}
                        transition={{ duration: 0.6, 
                        delay: index * 0.4 
                    }}
                    viewport={{ once: true,
                        amount: 0.2 
                    }}
                    
                    className="p-6 bg-white border border-white/20 dark:bg-gray-800 rounded-xl shadow-xl backdrop-blur-md w-full  hover:shadow-md transition"
                        >
                            <div
                            className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-sky-100 dark:bg-gray-700 mx-auto"
                            >
                                {step.icon}
                            
                            </div>    
                            <h3
                            className="text-lg font-semibold text-gray-900 dark:text-white">
                                {step.title}</h3>   
                                <p
                                className="text-sm text-gray-600 dark:text-gray-300 mt-2">{step.description}</p>                 
                        </motion.div>
                    ))}
                    
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;

