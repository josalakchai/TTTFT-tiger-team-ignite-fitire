'use client';

import React from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';

const team = [
  {
    name: 'Olivia Chen',
    role: 'Founder & CEO',
    image: '/images/team1.jpg',
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO',
    image: '/images/team2.jpg',
  },
  {
    name: 'Sophia Rodriguez',
    role: 'Lead AI Researcher',
    image: '/images/team3.jpg',
  },
  {
    name: 'David Kim',
    role: 'Head of Web Development',
    image: '/images/team4.jpg',
  },
  {
    name: 'Emma Watson',
    role: 'UX Designer',
    image: '/images/team5.jpg',
  },
  {
    name: 'Carlos Diaz',
    role: 'DevOps Engineer',
    image: '/images/team6.jpg',
  },
  {
    name: 'Luna Garcia',
    role: 'Data Scientist',
    image: '/images/team7.jpg',
  },
  {
    name: 'Ethan Brown',
    role: 'Full Stack Developer',
    image: '/images/team8.jpg',
  },
];

export default function Team() {
  return (
    <section className="bg-[#f7f9fc] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className="flex justify-center items-center gap-2 text-2xl font-bold text-[#011133]">
          <Users className="w-6 h-6 text-[#F7931B]" />
          Our Team
        </div>
        <div className="w-16 h-1 bg-[#F7931B] mx-auto mt-2 mb-4 rounded" />
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Meet the passionate experts behind our innovation and impact. Together, we&apos;re
          building technology that makes a difference.
        </p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition">
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-left">
                <p className="text-[#011133] font-semibold">{member.name}</p>
                <p className="text-sm text-[#F7931B] mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
