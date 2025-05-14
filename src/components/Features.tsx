"use client";
import { FC, JSX } from 'react';
import { motion} from 'framer-motion';


import {
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  BanknotesIcon,
  MapIcon,
  SparklesIcon,
  GlobeAmericasIcon,
} from '@heroicons/react/24/outline';

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};


interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
  iconBg: string;
}

const features: Feature[] = [
  {
    title: 'AI-Powered Itineraries',
    description: 'Generate personalized travel plans powered by cutting-edge AI technology.',
    icon: <CpuChipIcon className="h-6 w-6 text-sky-500" />,
    iconBg: 'bg-sky-100',
  },
  {
    title: '24/7 Support',
    description: 'Get help anytime from our round-the-clock travel experts and AI chat support.',
    icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-orange-500" />,
    iconBg: 'bg-orange-100',
  },
  {
    title: 'Budget-Friendly Trips',
    description: 'Optimize your spending with smart budget recommendations and find great deals.',
    icon: <BanknotesIcon className="h-6 w-6 text-emerald-500" />,
    iconBg: 'bg-emerald-100',
  },
  {
    title: 'Multi-Destination Travel',
    description: 'Easily organize trips with multiple stops and streamline your multi-city adventures.',
    icon: <MapIcon className="h-6 w-6 text-sky-500" />,
    iconBg: 'bg-sky-100',
  },
  {
    title: 'Personalized Suggestions',
    description: 'Receive customized travel recommendations based on your interests and past trips.',
    icon: <SparklesIcon className="h-6 w-6 text-orange-500" />,
    iconBg: 'bg-orange-100',
  },
  {
    title: 'Real-Time Updates',
    description: 'Stay informed with live flight, weather, and itinerary updates during your journey.',
    icon: <GlobeAmericasIcon className="h-6 w-6 text-emerald-500" />,
    iconBg: 'bg-emerald-100',
  },
];

const Features: FC = () => {

    return (
      <section id='features' className='py-24 px-24 bg-sky-50 dark:bg-gray-900 transition-colors overflow-hidden' > 
      
        <div className='max-w-6xl mx-auto text-center mb-16'>
          <motion.h2
          className="text-3xl font-bold text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ✨ Powerful Features for Effortless Travel
        </motion.h2>
          <motion.p className='mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          >
            Explore our core features that make planning your trip easy, personal and efficient
          </motion.p>
        </div>

        {/* features grid */}
        <motion.div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}

        >
          {features.map((feature, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white backdrop-blur-xl border-white/20 dark:bg-gray-800 rounded-2xl shadow-xl hover:scale-[1.02] shadow-md p-10 transition transform hover:shadow-2xl"
              variants={cardVariants}
            >
              <div 
              className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${feature.iconBg}`}>
                {feature.icon}
              </div>
              <h3 
              className='text-lg font-semibold text-slate-900 dark:text-white'
              >{feature.title}</h3>
              <p
              className='mt-2 text-slate-600 dark:text-slate-300'
              >{feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>  
    )
}

export default Features;