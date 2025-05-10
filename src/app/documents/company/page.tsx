'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // ✅ เพิ่ม

interface Partner {
  id: string;
  name: string;
  logo?: string;
  bg?: string;
}

export default function CompanyListPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const router = useRouter(); // ✅ เพิ่ม

  useEffect(() => {
    const saved = localStorage.getItem('customPartners');
    if (saved) {
      setPartners(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="relative p-6">
      {/* ❌ ปุ่มปิด */}
      <button
        onClick={() => router.push('/')}
        className="absolute top-4 right-4 text-red-500 hover:text-black text-4xl"
        title="กลับหน้าหลัก"
      >
        ×
      </button>

      <h1 className="text-2xl font-bold mb-4">รายชื่อบริษัท</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {partners.map((p) => (
          <Link key={p.id} href={`/documents/company/edit/${p.id}`}>
            <div className={`p-4 rounded-xl shadow ${p.bg ?? 'bg-pink-100'}`}>
              <div className="text-center font-bold">{p.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
