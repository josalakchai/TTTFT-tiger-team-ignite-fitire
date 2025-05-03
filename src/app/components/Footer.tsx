'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const scrollToTarget = (id: string, duration = 1200) => {
  const element = document.getElementById(id);
  if (!element) return;

  const offset = 80; // Adjust this value based on your navbar height
  const startY = window.pageYOffset;
  const endY = element.getBoundingClientRect().top + startY - offset;
  const distance = endY - startY;
  let startTime: number | null = null;

  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const time = timestamp - startTime;
    const progress = Math.min(time / duration, 1);
    const ease = easeInOutQuad(progress);
    window.scrollTo(0, startY + distance * ease);

    if (time < duration) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

export default function Footer() {
  return (
    <footer className="bg-[#011133] text-white px-4 sm:px-8 py-11">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {/* LOGO + DESCRIPTION */}
        <div>
          <div className="flex flex-col mt-1">
            <div className="h-12 relative -top-4 -ml-67 sm:-ml-12 md:-ml-24 lg:-ml-27 xl:-ml-48">
              <Image
                src="/416146f9-5af4-439b-af0e-e13a306c8b48.png"
                alt="Tiger Team Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Building innovative technology solutions that create positive impact and drive societal progress.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <Facebook className="hover:text-white cursor-pointer transition-colors" size={18} />
              <Twitter className="hover:text-white cursor-pointer transition-colors" size={18} />
              <Instagram className="hover:text-white cursor-pointer transition-colors" size={18} />
              <Linkedin className="hover:text-white cursor-pointer transition-colors" size={18} />
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="mt-6 sm:mt-0">
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <span
                onClick={() => scrollToTarget('home')}
                className="cursor-pointer hover:text-white transition-colors"
              >
                Home
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToTarget('services')}
                className="cursor-pointer hover:text-white transition-colors"
              >
                Services
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToTarget('portfolio')}
                className="cursor-pointer hover:text-white transition-colors"
              >
                Portfolio
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToTarget('about')}
                className="cursor-pointer hover:text-white transition-colors"
              >
                About Us
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToTarget('contact')}
                className="cursor-pointer hover:text-white transition-colors"
              >
                Contact
              </span>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="mt-6 md:mt-0">
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">Web Development</li>
            <li className="hover:text-white cursor-pointer transition-colors">AI Solutions</li>
            <li className="hover:text-white cursor-pointer transition-colors">Machine Learning</li>
            <li className="hover:text-white cursor-pointer transition-colors">Data Platforms</li>
            <li className="hover:text-white cursor-pointer transition-colors">Custom Software</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-6 md:mt-0">
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">
            Stay updated with our latest news and innovations.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-l sm:rounded-r-none bg-white text-black text-sm w-full"
            />
            <button
              type="submit"
              className="bg-[#F7931B] px-4 py-2 mt-2 sm:mt-0 rounded sm:rounded-l-none text-white font-semibold hover:bg-orange-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-[#ffffff22] pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left w-full md:w-auto">
          © 2025 The Tiger Team Foundation Technology. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
