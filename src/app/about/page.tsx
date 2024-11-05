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
        
        {/* Navigation Buttons */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
          <button
            onClick={() => scrollImage('up')}
            className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronUp className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={() => scrollImage('down')}
            className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronDown className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Right Section - Scrollable Content */}
      <div className="relative w-full md:w-1/2 h-screen">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="p-8 md:p-16 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">Zhunj Divyang Sanstha Ashram Training Center</h1>
              <p className="text-lg text-gray-600">Founded in 2014, empowering differently-abled individuals through education, training, and comprehensive support services.</p>
            </div>

            {/* Mission */}
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
              <p className="text-gray-600">To create an inclusive society by providing educational, vocational, and social support to differently-abled individuals, helping them achieve independence and dignity in their lives.</p>
            </section>

            {/* Founder */}
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-800">Our Founder</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Mr. Raju Kadappa Hirwe, our founder and chairman, established this organization with a vision to transform the lives of differently-abled individuals. A mobile repair expert by profession and a social worker at heart, he personally leads our mobile repair training programs.</p>
              </div>
            </section>

            {/* Impact Sections */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Our Impact</h2>
              
              {/* Residential Facility */}
              <div className="bg-white shadow-sm rounded-lg p-4">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Residential Facility</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Currently hosting 20 differently-abled students</li>
                  <li>Providing comprehensive care and support</li>
                </ul>
              </div>

              {/* Marriage Bureau Success */}
              <div className="bg-white shadow-sm rounded-lg p-4">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Marriage Bureau Success</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>63 successful inter-caste marriages</li>
                  <li>Free household setup for newly married couples</li>
                  <li>Regular matrimonial meets across Maharashtra</li>
                </ul>
              </div>

              {/* Vocational Training */}
              <div className="bg-white shadow-sm rounded-lg p-4">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Vocational Training</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Trained over 2,000 students in various courses</li>
                  <li>Partnership with NHFDC</li>
                  <li>Rs. 5,000 monthly stipend for trainees</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="space-y-2 text-gray-600">
                <p><strong>Founder & Chairman:</strong> Raju Kadappa Hirwe</p>
                <p><strong>Mobile:</strong> 9011452216, 8788535200</p>
                <p><strong>Expertise:</strong> Mobile Repair Training</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;