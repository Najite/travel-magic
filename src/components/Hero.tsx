'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';




const images = [
  '/carousel/travel.jpg',
  '/carousel/gadget.jpg',
  '/carousel/map.jpg',
];



export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
        clearInterval(interval);
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-200 via-sky-100 to-emerald-200 dark:from-gray-900 dark:to-gray-950 py-24 px-6 overflow-hidden transition-colors">

        {/* Animated blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-pink-300 dark:bg-pink-900 rounded-full filter blur-3xl opacity-30"
        animate={{ 
            x: [0, 50, -50, 0], 
            y: [0, 30, -30, 0],
            backgroundColor: ["#f0abfc", "#a5f3fc", "#f0abfc"]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-emerald-300 dark:bg-emerald-900 rounded-full filter blur-3xl opacity-30"
        animate={{ x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
         {/* Soft Glow Background Blob */}

            <div className='absolute w-72 h-72 bg-emerald-600 opacity-20 blur-3xl rounded-full top-20 left-1/4 -z-10 animate-pulse' />
          <h1 className="text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Smarter Travel Planning with <br /><span className='bg-gradient-to-r from-sky-500 via emerald-400 to-emerald-600 text-transparent bg-clip-text animate-text-glow'>AI Travel Magic</span>
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-lg">
            Plan your perfect trip with a personal AI assistant. Dream, book flights, hotels and explore inspiration all in one place.
          </p>
          <motion.a
            href="#features"
            className="inline-block px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Planning
          </motion.a>
        </motion.div>
        

        {/* Image Carousel */}
        <motion.div
          className="w-full max-w-xl mx-auto aspect-square relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
            
          <div className="relative aspect-[4/3] rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl overflow-hidden animate-[pulseBorder_6s_ease-in-out_infinite]">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Carousel ${index + 1}`}
                width={800}
                height={600}
                loading='lazy'
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
                
              />
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full transition ${
                  index === current ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Accent Blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-200 dark:bg-sky-900 opacity-20 rounded-full -z-10 blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200 dark:bg-emerald-800 opacity-10 rounded-full -z-10 blur-3xl -translate-x-1/3 translate-y-1/3" />
      
            {/* Scroll Indicator */}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-slate-700 dark:text-slate-300 animate-bounce text-sm">
  ↓ Scroll
</div>
    </section>
  );
}
