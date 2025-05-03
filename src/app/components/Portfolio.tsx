'use client';

import React from 'react';
import Image from 'next/image';
import { ImageIcon } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Learning Platform',
    category: 'Artificial Intelligence',
    description: 'An adaptive learning system that personalizes education for students based on their progress and learning style.',
    image: '/images/project-ai.jpg',
  },
  {
    title: 'Smart City Data Dashboard',
    category: 'Data Platforms',
    description: 'A comprehensive data visualization tool for urban planning and infrastructure management.',
    image: '/images/project-data.jpg',
  },
  {
    title: 'Predictive Maintenance System',
    category: 'Machine Learning',
    description: 'Using ML models to forecast and prevent machinery failures in industrial systems.',
    image: '/images/project-ml.jpg',
  },
  {
    title: 'Interactive Tourism Website',
    category: 'Web Development',
    description: 'A dynamic web app providing real-time info and booking for travel experiences.',
    image: '/images/project-web.jpg',
  },
];

export default function Portfolio() {
  return (
    <section className="bg-[#f7f9fc] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="flex justify-center items-center gap-2 text-[#011133] font-bold text-2xl">
          <ImageIcon className="w-6 h-6 text-[#F7931B]" />
          Our Portfolio
        </div>
        <div className="w-16 h-1 bg-[#F7931B] mx-auto mt-2 mb-6 rounded"></div>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Explore our most impactful projects that showcase our technical expertise and our
          commitment to creating solutions that matter.
        </p>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map((p, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-left"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#F7931B] text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {p.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#011133]">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <button className="text-[#011133] font-semibold text-sm flex items-center gap-1 hover:text-[#F7931B] transition-colors duration-300">
            View All Projects
            <svg data-lov-id="src/components/PortfolioSection.tsx:76:12"
              data-lov-name="svg"
              data-component-path="src/components/PortfolioSection.tsx"
              data-component-line="76"
              data-component-file="PortfolioSection.tsx"
              data-component-name="svg"
              data-component-content="%7B%22className%22%3A%22h-5%20w-5%20ml-1%22%7D"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path data-lov-id="src/components/PortfolioSection.tsx:77:14"
                data-lov-name="path"
                data-component-path="src/components/PortfolioSection.tsx"
                data-component-line="77"
                data-component-file="PortfolioSection.tsx"
                data-component-name="path"
                data-component-content="%7B%7D"
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd">
              </path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
