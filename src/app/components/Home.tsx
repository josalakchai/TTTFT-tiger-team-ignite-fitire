'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);

        // ล้าง timer เก่าก่อนตั้งใหม่
        if (timer) clearTimeout(timer);

        // ตั้ง timer ให้ซ่อนหลังจาก 5 วินาที
        const timeout = setTimeout(() => {
          setIsVisible(false);
        }, 3000);

        setTimer(timeout);
      } else {
        setIsVisible(false);
        if (timer) clearTimeout(timer);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (timer) clearTimeout(timer);
    };
  }, [timer]);


  return (
    <section id="home" className="bg-[#f7f9fc] min-h-screen overflow-hidden flex items-center px-4">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gray-200 rounded-bl-full z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gray-200 rounded-tr-full z-10"></div>
      <div className="w-full max-w-screen-xl mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-11">
        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#011133] leading-tight">
            Innovating Technology
          </h1>
          <span className="text-[#F7931B] block font-bold text-3xl md:text-5xl lg:text-5xl">
            For A Better Tomorrow
          </span>

          <p className="mt-4 md:mt-6 text-[#333] text-sm md:text-base md:max-w-xl mx-auto md:mx-0">
            We build advanced technology solutions that drive positive change.
            Our mission is to innovate with purpose and give back to society.
          </p>

          {/* BUTTONS */}
          <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center justify-center md:justify-start">
            <Link href="#services">
              <button className="bg-[#F7931B] text-white w-full sm:w-auto px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base rounded-md font-medium shadow hover:bg-orange-400 transition">
                Explore Services →
              </button>
            </Link>
            <Link href="#portfolio">
              <button className="border border-[#011133] text-[#011133] w-full sm:w-auto px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base rounded-md font-bold hover:bg-gray-200 transition">
                Our Portfolio
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className="relative mt-10 md:mt-0 hidden md:flex justify-center">
          {/* ORANGE DECORATIONS */}
          <div className="absolute w-28 h-28 bg-[#F7931B] rotate-12 -left-8 -bottom-6 z-40 rounded-md shadow-md" />
          <div className="absolute w-22 h-22 bg-[rgba(247,147,27,0.85)] -rotate-12 -top-6 -right-6 z-40 rounded-md shadow-md" />

          {/* NAVY BOX */}
          <div className="bg-[#011133] text-white rounded-lg p-8 lg:p-30 shadow-2xl relative z-30 text-center w-full max-w-[800px] flex flex-col justify-center items-center">
            <div className="text-2xl md:text-3xl font-bold mb-4 text-center lg:whitespace-nowrap">
              Innovation with Purpose
            </div>
            <p className="text-center opacity-90 text-sm md:text-base leading-relaxed px-4 md:px-0 max-w-[90%] md:max-w-[90%] lg:max-w-[600px] xl:max-w-[700px] mx-auto xl:whitespace-nowrap xl:-ml-[70px]">
              Building solutions that matter. Creating technology that makes a difference.
            </p>
          </div>
        </div>
      </div>

      {/* BG SHAPES */}
      <div className="absolute top-45 left-50 w-15 h-15 bg-orange-200 rounded-full opacity-30" />
      <div className="absolute bottom-10 right-30 w-20 h-20 rounded-full bg-[#ccc] opacity-30" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#fff5e6] rounded-bl-full -z-10" />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 bg-[#F7931B] text-white w-13 h-13 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-500 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-label="Scroll to top"
      >
        <span className="text-2xl">↑</span>
      </button>
    </section>
  );
}
