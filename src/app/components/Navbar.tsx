'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ลิงก์แบบ anchor สำหรับเลื่อนในหน้าเดียว
  const NAV_LINKS = [
    { name: 'Home', path: '/#home' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/#portfolio' },
    { name: 'Partners', path: '/#partners' },
    { name: 'About', path: '/#about' },
    { name: 'Team', path: '/#team' },
    { name: 'Contact', path: '/#contact' },
  ];

  const scrollToTarget = (id: string, duration = 1200) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80; // ปรับตามความสูงของ navbar
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

  return (
    <header className="fixed -mt-5 left-0 right-0 z-50 bg-transparent py-5 transition-all duration-300">
      <nav className="w-full bg-[#f7f9fc] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo + Text */}
          <div className="flex items-center space-x-2">
            <div className="w-70 h-14 -left-10 relative">
              <Image
                src="/LOGO TTTFT.R.png"
                alt="Tiger Team Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((item) => (
              <span
                key={item.name}
                onClick={() => scrollToTarget(item.path.replace('/#', ''))}
                className="cursor-pointer text-[#011133] hover:underline"
              >
                {item.name}
              </span>
            ))}

            <Link href="#contact">
              <button className="bg-[#F7931B] text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-500 transition">
                Get in Touch
              </button>
            </Link>
          </div>

          {/* Hamburger (Mobile Only) */}
          <button
            className="md:hidden text-[#011133] z-[60]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="fixed top-0 right-0 h-full w-full z-50 ">
            <div
              className={`fixed top-17 right-0 h-full w-full z-50 bg-white shadow-lg rounded-l-xl transition-transform duration-[2000ms] ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
              {/* Menu Items */}
              <div className="flex flex-col space-y-4 bg-white p-6 shadow-lg overflow-y-auto rounded-l-xl transition-all duration-300 ease-in-out">
                {/* เมนูรายการ */}
                {NAV_LINKS.map((item) => (
                  <Link href={item.path} key={item.name} onClick={() => setIsOpen(false)}>
                    <span className="text-[#011133] text-lg">{item.name}</span>
                  </Link>
                ))}

                {/* ปุ่มสุดท้าย */}
                <Link href="#contact">
                  <button className="mt-6 bg-[#F7931B] text-white w-full py-3 rounded-md shadow-md hover:bg-orange-500 transition">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
