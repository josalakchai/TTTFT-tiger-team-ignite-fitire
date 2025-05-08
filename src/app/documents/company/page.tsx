'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

// Define a type for partner:
interface Partner {
  id: string;
  name: string;
  bg: string;
}

const colorOptions = [
  { name: 'ชมพูอ่อน', class: 'bg-pink-100' },
  { name: 'ชมพูเข้ม', class: 'bg-pink-500' },
  { name: 'ฟ้าอ่อน', class: 'bg-blue-100' },
  { name: 'ฟ้าเข้ม', class: 'bg-blue-500' },
  { name: 'เขียวอ่อน', class: 'bg-green-100' },
  { name: 'เขียวเข้ม', class: 'bg-green-500' },
  { name: 'เหลืองอ่อน', class: 'bg-yellow-100' },
  { name: 'เหลืองเข้ม', class: 'bg-yellow-500' },
  { name: 'ม่วงอ่อน', class: 'bg-purple-100' },
  { name: 'ม่วงเข้ม', class: 'bg-purple-500' },
];

export default function CompanyPage() {
  const router = useRouter();
  const { id } = useParams();
  const [companyName, setCompanyName] = useState('');
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState('bg-pink-100');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (!id) return;
    const saved = localStorage.getItem('customPartners');
    const data: Partner[] = saved ? JSON.parse(saved) : [];
    const target = data.find((p) => p.id === id);
    if (target) {
      setCompanyName(target.name);
      setBgColor(target.bg);
      setEditMode(true);
    }
  }, [id]);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const saved = localStorage.getItem('customPartners');
    const data: Partner[] = saved ? JSON.parse(saved) : [];

    if (editMode) {
      const updated = data.map((p) =>
        p.id === id ? { ...p, name: companyName, bg: bgColor } : p
      );
      localStorage.setItem('customPartners', JSON.stringify(updated));
    } else {
      const newPartner = {
        id: Date.now().toString(),
        name: companyName,
        bg: bgColor,
      };
      data.push(newPartner);
      localStorage.setItem('customPartners', JSON.stringify(data));
    }

    router.push('/');
  };

  const handleDelete = () => {
    const saved = localStorage.getItem('customPartners');
    const data: Partner[] = saved ? JSON.parse(saved) : [];
    const updated = data.filter((p) => p.id !== id);
    localStorage.setItem('customPartners', JSON.stringify(updated));
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      {/* Card Preview */}
      <div className={`${bgColor} w-64 h-36 rounded-xl shadow-md flex flex-col items-center justify-center mb-8`}>
        <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl text-blue-900 mb-2 overflow-hidden">
          {logoPreview ? (
            <Image
              src={logoPreview}
              alt="logo preview"
              width={48} // Set a fixed width
              height={48} // Set a fixed height
              className="rounded-full"
            />
          ) : (
            <span>{companyName?.[0] || 'D'}</span>
          )}
        </div>
        <div className="text-sm text-center text-gray-800 font-semibold">
          {companyName || 'Digital Solutions Inc.'}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        <div>
          <label className="block text-black text-lg font-medium mb-1">Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
            className="w-full border border-dotted border-gray-400 p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-black text-lg font-medium mb-1">ชื่อบริษัท</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="เช่น Digital Solutions Inc."
            className="w-full border border-dotted border-gray-400 p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-black text-lg font-medium mb-1">สีพื้นหลัง</label>
          <div className="flex flex-wrap gap-2">
            {colorOptions.map((color, i) => (
              <button
                type="button"
                key={i}
                className={`${color.class} w-8 h-8 rounded-full border-2 ${
                  bgColor === color.class ? 'border-black' : 'border-transparent'
                }`}
                onClick={() => setBgColor(color.class)}
                title={color.name}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-2 justify-end">
          {editMode && (
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
            >
              ลบ
            </button>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
          >
            {editMode ? 'แก้ไข' : 'เพิ่ม'}
          </button>
        </div>
      </form>
    </div>
  );
}
