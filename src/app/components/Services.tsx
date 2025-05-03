'use client';

import React from 'react';
import { Cpu, BarChart, Database } from 'lucide-react';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),

    title: 'Web Development',
    desc: 'Custom responsive websites and web applications built with modern technologies for optimal performance and user experience.',
    bg: 'bg-blue-50',
  },
  {
    icon: <Cpu className="w-6 h-6 text-purple-600" />,
    title: 'AI Solutions',
    desc: 'Intelligent systems that learn, adapt, and solve complex problems through advanced artificial intelligence technologies.',
    bg: 'bg-purple-50',
  },
  {
    icon: <BarChart className="w-6 h-6 text-green-600 rounded-[10px]" />,
    title: 'Machine Learning',
    desc: 'Data-driven algorithms and models that improve over time, providing insights and automation for your business processes.',
    bg: 'bg-green-50',
  },
  {
    icon: <Database className="w-6 h-6 text-orange-400" />,
    title: 'Data Platforms',
    desc: 'Robust architectures for storing, processing, and analyzing large datasets to extract valuable business intelligence.',
    bg: 'bg-orange-50',
  },
];

export default function Services() {
  return (
    <>
      {/* Our Services Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#011133]">Our Services</h2>
          <div className="w-16 h-1 bg-[#F7931B] mx-auto my-4 rounded"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We combine technical expertise with a deep understanding of business needs to
            deliver solutions that drive real value.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-6 text-left hover:shadow-lg transition"
              >
                <div className={`w-14 h-14 flex items-center justify-center rounded-[7px] mb-6 ${s.bg}`}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#011133]">{s.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
