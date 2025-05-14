'use client';

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { PhotoProvider, PhotoView } from "react-photo-view";

type Category = 'All' | 'Beach' | 'City' | 'Nature';

interface GalleryItem {
    src: string;
    alt: string;
    category: Category;
    aiCaption: string;
}

const galleryItems: GalleryItem[] = [
    {
        src: '/gallery/alpine-christmas.jpeg',
        alt: 'Tropical beach',
        category: 'Beach',
        aiCaption: 'A serene tropical beach ideal for relaxation.',
      },
      {
        src: '/gallery/alpine-collec.jpeg',
        alt: 'Urban skyline',
        category: 'City',
        aiCaption: 'Bustling downtown with breathtaking views.',
      },
      {
        src: '/gallery/alpine.jpeg',
        alt: 'Mountain trail',
        category: 'Nature',
        aiCaption: 'Peaceful mountain trail for hiking lovers.',
      },
      {
        src: '/gallery/aurora.jpeg',
        alt: 'Sunset beach',
        category: 'Beach',
        aiCaption: 'Golden sunset over calm waves.',
      },
      {
        src: '/gallery/japan.jpeg',
        alt: 'Night city lights',
        category: 'City',
        aiCaption: 'City lights shining through the night.',
      },
      {
        src: '/gallery/malta.jpeg',
        alt: 'Forest stream',
        category: 'Nature',
        aiCaption: 'Gentle stream flowing through lush greenery.',
      },
];

export default function InspirationGallery() {
    const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  
    const filteredItems =
      selectedCategory === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === selectedCategory);
  
    return (
      <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Get Inspired        
          </h2>
  
          {/* Filters */}
          <div className="flex justify-center gap-4 mb-8">
            {(['All', 'Beach', 'City', 'Nature'] as Category[]).map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
  
          {/* Swiper Carousel + Lightbox */}
          <PhotoProvider>
            <Swiper
              spaceBetween={20}
              navigation
              modules={[Navigation]}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {filteredItems.map((item, index) => (
                <SwiperSlide key={index}>
                <div className="relative rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:scale-[1.015]">
                    <PhotoView src={item.src}>
                        <Image 
                        alt={item.alt}
                        src={item.src}
                        width={800}
                        height={60}
                        loading="lazy"
                        className="object-cover w-full h-64 sm:h-72 md:h-80 transition duration-300 ease-in-out"
                        />
                    </PhotoView>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.aiCaption}
                  </div>
                    </div>

                </SwiperSlide>
              ))}
                
            </Swiper>
          </PhotoProvider>
        </div>
      </section>
    );
  }