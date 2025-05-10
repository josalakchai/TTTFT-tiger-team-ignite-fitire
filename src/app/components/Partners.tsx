'use client';

import React, { useEffect, useState } from 'react';
import { Link2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Partner {
  id: string;
  name: string;
  bg: string;
  logo?: string;
}

export default function Partners() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('customPartners');
    if (saved) {
      const parsed = JSON.parse(saved);
      setPartners(parsed);
    }
  }, []);

  const handleCreatePartner = () => {
    const saved = localStorage.getItem('customPartners');
    const data: Partner[] = saved ? JSON.parse(saved) : [];

    const newId = Date.now().toString();
    const newPartner: Partner = {
      id: newId,
      name: 'New Partner',
      bg: 'bg-pink-100',
    };

    const newData = [...data, newPartner];
    localStorage.setItem('customPartners', JSON.stringify(newData));

    router.push(`/documents/company/edit/${newId}`);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-3xl font-bold text-[#011133]">
            <Link2 className="w-6 h-6 text-[#F7931B]" />
            Our Partners
          </div>
          <div className="w-12 h-1 bg-[#F7931B] mt-2 rounded" />
        </div>

        <p className="max-w-2xl mx-auto text-gray-600 mt-6 mb-12">
          We collaborate with industry leaders and innovators to deliver cutting-edge solutions and drive positive change.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {partners.map((p) => (
            <Link
              key={p.id}
              href={`/documents/company/edit/${p.id}`}
              className={`rounded-xl ${p.bg} px-6 py-6 w-full max-w-[200px] flex flex-col items-center shadow hover:shadow-md transition`}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white font-bold text-[#011133] mb-2">
                {p.logo ? (
                  <Image
                    src={p.logo}
                    alt="Logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  <span>{p.name[0]}</span>
                )}
              </div>
              <p className="text-sm font-medium text-[#011133] text-center hover:underline">
                {p.name}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-sm text-gray-500 mb-3">Interested in partnering with us?</p>
          <button
            onClick={handleCreatePartner}
            className="px-6 py-3 border border-[#011133] text-[#011133] font-semibold rounded-md hover:bg-[#011133] hover:text-white transition duration-300"
          >
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}
