'use client';

import React from 'react';
import { Link2 } from 'lucide-react';

const partners = [
  { name: 'TechCorp Global', bg: 'bg-gray-100' },
  { name: 'Innovate AI', bg: 'bg-blue-50' },
  { name: 'DataStream Networks', bg: 'bg-green-50' },
  { name: 'Future Systems', bg: 'bg-purple-50' },
  { name: 'Cloud Ventures', bg: 'bg-yellow-50' },
  { name: 'Digital Solutions Inc.', bg: 'bg-red-50' },
];

export default function Partners() {
  return (
    <section className="bg-white -mt-5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-3xl font-bold text-[#011133]">
            <Link2 className="w-6 h-6 text-[#F7931B]" />
            Our Partners
          </div>
          <div className="w-12 h-1 bg-[#F7931B] mt-2 rounded" />
        </div>

        <p className="max-w-2xl mx-auto text-gray-600 mt-6 mb-12">
          We collaborate with industry leaders and innovators to deliver cutting-edge solutions
          and drive positive change.
        </p>

        {/* Partner Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {partners.map((p, i) => (
            <div
              key={i}
              className={`rounded-xl ${p.bg} px-6 py-6 w-full max-w-[200px] flex flex-col items-center shadow hover:shadow-md transition`}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white font-bold text-[#011133] mb-2">
                {p.name[0]}
              </div>
              <p className="text-sm font-medium text-[#011133] text-center">{p.name}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <p className="text-sm text-gray-500 mb-3">Interested in partnering with us?</p>
          <button className="px-6 py-3 border border-[#011133] text-[#011133] font-semibold rounded-md hover:bg-[#011133] hover:text-white transition">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}
