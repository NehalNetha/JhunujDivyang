"use client";
import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

type GalleryImage = {
  url: string;
  alt: string;
};

const Page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images: GalleryImage[] = [
    {
      url: "/awards/imageOne.jpeg",
      alt: "Donation activities at Zhunj Divyang Sanstha"
    },
    {
      url: "/awards/imageTwo.jpeg",
      alt: "Supporting hands at our NGO"
    },
    {
      url: "/awards/imageThree.jpeg",
      alt: "Distribution of mobility aids"
    },
    {
      url: "/awards/imageFour.jpeg",
      alt: "Distribution of mobility aids"
    },
    {
      url: "/awards/imageFive.jpeg",
      alt: "Distribution of mobility aids"
    },
    {
      url: "/awards/imageSix.jpeg",
      alt: "Distribution of mobility aids"
    },
    {
      url: "/awards/imageSeven.jpeg",
      alt: "Distribution of mobility aids"
    },
    {
      url: "/awards/imageNine.jpeg",
      alt: "Distribution of mobility aids"
    },
    {
      url: "/awards/imageTen.jpeg",
      alt: "Distribution of mobility aids"
    },
    {
      url: "/awards/imageEleven.jpeg",
      alt: "Distribution of mobility aids"
    },
  ];

  const scrollImage = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      setCurrentImageIndex(prev => 
        prev === 0 ? images.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex(prev => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Left Section - Fixed Image Gallery */}
      <div className="relative w-full md:w-1/2 h-screen">
        <div className="w-full h-full relative overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentImageIndex ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
                zIndex: index === currentImageIndex ? 1 : 0
              }}
            >
              <div className="relative w-full h-full">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-contain bg-gray-100"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Controls */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10">
          <button
            onClick={() => scrollImage('up')}
            className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => scrollImage('down')}
            className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors duration-200 shadow-lg"
            aria-label="Next image"
          >
            <ChevronDown className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Right Section - Scrollable Content */}
      <div className="relative w-full md:w-1/2 h-screen">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="p-8 md:p-16 space-y-8">
            {/* Content sections remain the same */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">Zhunj Divyang Sanstha Ashram Training Center</h1>
              <p className="text-lg text-gray-600">Founded in 2014, empowering differently-abled individuals through education, training, and comprehensive support services.</p>
            </div>

            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
              <p className="text-gray-600">To create an inclusive society by providing educational, vocational, and social support to differently-abled individuals, helping them achieve independence and dignity in their lives.</p>
            </section>

            {/* Rest of the content remains the same */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;