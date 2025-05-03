'use client';

import React from 'react'
import Image from 'next/image'
import { Users } from 'lucide-react';

function Made() {
  return (<>
  {/* Made for Everyone Section */}
  <section className="bg-[#0b1437] text-white py-20">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    {/* LEFT */}
    <div>
      <div>
        <div className="flex items-center gap-2 text-white text-4xl font-bold">
          <Users className="w-6 h-6 text-[#F7931B]" />
          Made for Everyone
        </div>
        <div className="w-10 h-1 mt-1 rounded"></div>
      </div>

      <div className="w-16 h-1 bg-[#F7931B] my-3" />
      <p className="text-lg leading-relaxed text-gray-300">
        We believe that technology should be accessible to all...
      </p>
      <p className="text-lg leading-relaxed text-gray-300 mt-4">
        Through partnerships with educational institutions...
      </p>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#111d45] rounded-md px-6 py-4 text-center">
          <div className="text-2xl font-bold text-[#F7931B]">15+</div>
          <p className="text-sm text-gray-300">Educational Programs</p>
        </div>
        <div className="bg-[#111d45] rounded-md px-6 py-4 text-center">
          <div className="text-2xl font-bold text-[#F7931B]">2500+</div>
          <p className="text-sm text-gray-300">Students Supported</p>
        </div>
        <div className="bg-[#111d45] rounded-md px-6 py-4 text-center">
          <div className="text-2xl font-bold text-[#F7931B]">10+</div>
          <p className="text-sm text-gray-300">Community Partners</p>
        </div>
      </div>

      <button className="mt-8 bg-[#F7931B] text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-500 transition">
        Learn About Our Impact
      </button>
    </div>

    {/* RIGHT */}
    <div className="relative mt-10 md:mt-0">
      <div className="absolute top-4 left-4 w-full h-full bg-[#463b31] rounded-lg -z-10"></div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/your-image.jpg"
          alt="Technology Impact"
          width={700}
          height={400}
          className="object-cover"
        />
        <div className="p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
          <h3 className="text-lg font-bold">Empowering Through Technology</h3>
          <p className="text-sm">Creating opportunities and building a more inclusive future.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  </>
    
  )
}

export default Made