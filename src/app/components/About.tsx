'use client';

import React from 'react';
import Image from 'next/image';
import { Info, ShieldCheck, Users, Heart } from 'lucide-react';

const highlights = [
  {
    title: 'Innovation',
    desc: "We push the boundaries of what's possible",
    image: '/images/about1.jpg',
  },
  {
    title: 'Collaboration',
    desc: 'Working together toward shared goals',
    image: '/images/about2.jpg',
  },
  {
    title: 'Creativity',
    desc: 'Finding unique solutions to complex problems',
    image: '/images/about3.jpg',
  },
  {
    title: 'Impact',
    desc: 'Creating lasting positive change',
    image: '/images/about4.jpg',
  },
];

const values = [
  {
    title: 'Innovation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-award" data-lov-id="src/components/ValuesSection.tsx:16:8" data-lov-name="Icon" data-component-path="src/components/ValuesSection.tsx" data-component-line="16" data-component-file="ValuesSection.tsx" data-component-name="Icon" data-component-content="%7B%7D"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
    ),
    color: 'bg-blue-500',
    description:
      "We continuously push the boundaries of what's possible, embracing new technologies and creative approaches to solve complex problems.",
  },
  {
    title: 'Integrity',
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    color: 'bg-green-500',
    description:
      'We are committed to ethical practices, transparency, and honesty in all our interactions with clients, partners, and communities.',
  },
  {
    title: 'Inclusivity',
    icon: <Users className="w-5 h-5 text-white" />,
    color: 'bg-purple-500',
    description:
      'We believe in creating technology that is accessible to all, regardless of background, ability, or economic status.',
  },
  {
    title: 'Giving Back',
    icon: <Heart className="w-5 h-5 text-white" />,
    color: 'bg-orange-500',
    description:
      'We dedicate resources, time, and expertise to support education and technology access in underserved communities.',
  },
];

export default function About() {
  return (
    <>
      {/* About Us Section */}
      <section className="bg-[#f7f9fc] py-18">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div className="mt-20">
            <div className="flex items-center gap-2 text-[#011133] font-bold text-3xl">
              <Info className="w-6 h-6 text-[#F7931B]" />
              About Us
            </div>
            <div className="w-16 h-1 bg-[#F7931B] my-3 rounded" />
            <p className="text-gray-700 mb-4">
              The Tiger Team Foundation Technology was founded in 2015 with a simple yet powerful vision: to harness the potential of technology to create positive societal impact.
            </p>
            <p className="text-gray-700 mb-4">
              What began as a small team of passionate technologists has grown into a foundation dedicated to technological innovation and social responsibility.
            </p>
            <p className="text-gray-700">
              Today, we work with organizations across sectors to build transformative digital solutions while investing in educational initiatives that prepare communities for the digital future.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-[#F7931B] text-2xl font-bold">8+</p>
                <p className="text-sm text-gray-600">Years of Impact</p>
              </div>
              <div>
                <p className="text-[#F7931B] text-2xl font-bold">50+</p>
                <p className="text-sm text-gray-600">Team Members</p>
              </div>
              <div>
                <p className="text-[#F7931B] text-2xl font-bold">100+</p>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-[#F7931B] text-2xl font-bold">20+</p>
                <p className="text-sm text-gray-600">Countries Reached</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow overflow-hidden hover:shadow-md transition">
                <div className="relative h-40 w-full">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#011133]">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-1">
        <div className="max-w-7xl mx-auto px-4 text-center mt-10">
          <h2 className="text-3xl font-bold text-[#011133]">Our Values</h2>
          <div className="w-16 h-1 bg-[#F7931B] mx-auto mt-2 mb-4 rounded" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            These core principles guide everything we do, from the solutions we build to the way we
            engage with our community.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {values.map((val, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${val.color} mb-4`}>
                  {val.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#011133] mb-2">{val.title}</h3>
                <p className="text-sm text-gray-600">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

