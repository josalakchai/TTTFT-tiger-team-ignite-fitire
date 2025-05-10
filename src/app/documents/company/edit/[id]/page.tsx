'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Partner {
  id: string;
  name: string;
  logo?: string;
  bg?: string;
}

const colorOptions = [
  // Red
  { name: 'แดงอ่อน', class: 'bg-red-100' },
  { name: 'แดง', class: 'bg-red-500' },
  { name: 'แดงเข้ม', class: 'bg-red-700' },

  // Pink
  { name: 'ชมพูอ่อน', class: 'bg-pink-100' },
  { name: 'ชมพู', class: 'bg-pink-500' },
  { name: 'ชมพูเข้ม', class: 'bg-pink-700' },

  // Purple
  { name: 'ม่วงอ่อน', class: 'bg-purple-100' },
  { name: 'ม่วง', class: 'bg-purple-500' },
  { name: 'ม่วงเข้ม', class: 'bg-purple-700' },

  // Blue
  { name: 'ฟ้าอ่อน', class: 'bg-blue-100' },
  { name: 'ฟ้า', class: 'bg-blue-500' },
  { name: 'น้ำเงินเข้ม', class: 'bg-blue-900' },

  // Cyan / Teal
  { name: 'ฟ้าเขียว', class: 'bg-cyan-400' },
  { name: 'มินต์', class: 'bg-teal-300' },

  // Green
  { name: 'เขียวอ่อน', class: 'bg-green-100' },
  { name: 'เขียว', class: 'bg-green-500' },
  { name: 'เขียวเข้ม', class: 'bg-green-700' },

  // Lime / Emerald
  { name: 'เขียวมะนาว', class: 'bg-lime-300' },
  { name: 'มรกต', class: 'bg-emerald-400' },

  // Yellow
  { name: 'เหลืองอ่อน', class: 'bg-yellow-100' },
  { name: 'เหลือง', class: 'bg-yellow-500' },
  { name: 'เหลืองทอง', class: 'bg-amber-400' },

  // Orange
  { name: 'ส้มอ่อน', class: 'bg-orange-100' },
  { name: 'ส้ม', class: 'bg-orange-500' },
  { name: 'ส้มเข้ม', class: 'bg-orange-700' },

  // Neutral / Gray / Black / White
  { name: 'เทาอ่อน', class: 'bg-gray-100' },
  { name: 'เทา', class: 'bg-gray-400' },
  { name: 'เทาเข้ม', class: 'bg-gray-700' },
  { name: 'ขาว', class: 'bg-white' },
  { name: 'ดำ', class: 'bg-black' },
];


const EditPartner = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [company, setCompany] = useState<Partner | null>(null);
  const [name, setName] = useState('');
  const [action, setAction] = useState<string[]>([]);
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('customPartners');
    const data: Partner[] = saved ? JSON.parse(saved) : [];
    const target = data.find((p) => p.id === id);
    if (target) {
      setCompany(target);
      setName(target.name);
    }
  }, [id]);

  const handleConfirm = () => {
    if (action.length === 0) {
      alert('กรุณาติ๊กเลือกว่าจะทำอะไร เช่น แก้ไข ลบ หรือ เพิ่ม');
      return;
    }

    const saved = localStorage.getItem('customPartners');
    const data: Partner[] = saved ? JSON.parse(saved) : [];

    if (action.includes('edit')) {
      const updatedData = data.map((p) =>
        p.id === id ? { ...p, name, logo: company?.logo, bg: company?.bg } : p
      );
      localStorage.setItem('customPartners', JSON.stringify(updatedData));
      alert('แก้ไขเรียบร้อยแล้ว');
    }

    if (action.includes('delete')) {
      const confirmDelete = confirm('คุณแน่ใจว่าต้องการลบบริษัทนี้?');
      if (confirmDelete) {
        const newData = data.filter((p) => p.id !== id);
        localStorage.setItem('customPartners', JSON.stringify(newData));
        alert('ลบเรียบร้อยแล้ว');
        router.push('/documents/company');
        return;
      }
    }

    if (action.includes('add')) {
      const newId = Date.now().toString();
      const newPartner: Partner = {
        id: newId,
        name: 'New Partner',
        bg: 'bg-pink-100',
      };
      const newData = [...data, newPartner];
      localStorage.setItem('customPartners', JSON.stringify(newData));
      alert('เพิ่มเรียบร้อยแล้ว');
      router.push(`/documents/company/edit/${newId}`);
      return;
    }

    router.push('/documents/company');
  };

  if (!company) {
    return (
      <div className="text-center text-red-500 mt-10">
        ไม่พบข้อมูลบริษัท หรืออาจถูกลบไปแล้ว
        <br />
        <button
          onClick={() => router.push('/documents/company')}
          className="mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm"
        >
          ← กลับไปหน้ารายชื่อบริษัท
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 text-center">
      <div className={`${company.bg ?? 'bg-pink-100'} p-4 rounded-xl w-[200px] text-center mx-auto mb-6`}>
        <div className="w-10 h-10 mx-auto rounded-full bg-white text-xl font-bold flex items-center justify-center overflow-hidden">
          {company.logo ? (
            <Image src={company.logo} alt="logo" width={40} height={40} className="rounded-full object-cover" />
          ) : (
            name[0]
          )}
        </div>
        <div className="mt-2 font-medium">{name}</div>
      </div>

      <div className="mb-6 text-left w-[250px] mx-auto space-y-2">
        <div className="flex justify-between font-medium items-center mb-4">
          <label className="text-left">Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              const reader = new FileReader();
              reader.onloadend = () => {
                const base64 = reader.result?.toString();
                if (company && base64) {
                  setCompany({ ...company, logo: base64 });
                }
              };
              reader.readAsDataURL(file);
            }}
            className="text-sm"
          />
        </div>
        <div className="flex justify-between items-center font-medium">
          <label>ชื่อบริษัท</label>
          <input
            className="border border-dotted p-1 w-[140px] rounded text-left"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      {/* ปุ่มเลือกสี + popup */}
      <div className="flex justify-center items-center gap-2 mb-4 relative">
        <div className="relative inline-block">
          <button
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="bg-red-200 text-black text-sm rounded-full px-3 py-1"
          >
            สี
          </button>

          {showColorPicker && (
            <div className="absolute z-20 bg-gray-200 border border-blue-400 p-4 rounded-xl mt-2 w-60 flex flex-wrap gap-2">
              <button
                className="absolute top-1 right-2 text-black"
                onClick={() => setShowColorPicker(false)}
              >
                ✕
              </button>

              {colorOptions.map((c) => (
                <button
                  key={c.class}
                  onClick={() => {
                    setCompany((prev) => (prev ? { ...prev, bg: c.class } : prev));
                    setShowColorPicker(false);
                  }}
                  className={`${c.class} w-6 h-6 rounded-full border hover:scale-110 transition ${
                    company?.bg === c.class ? 'ring-2 ring-black' : ''
                  }`}
                  title={c.name}
                />
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handleConfirm}
          className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600"
        >
          ตกลง
        </button>
      </div>

      {/* เช็คบ็อกซ์ */}
      <div className="flex justify-center gap-3 mt-2 text-sm">
        {['edit', 'delete', 'add'].map((type) => (
          <label key={type} className="flex items-center gap-2">
          <span
            className={`px-4 py-1 text-sm rounded text-black cursor-pointer ${
              type === 'edit'
                ? 'bg-green-400'
                : type === 'delete'
                ? 'bg-red-500'
                : 'bg-blue-400'
            }`}
          >
            {type === 'edit' ? 'แก้ไข' : type === 'delete' ? 'ลบ' : 'เพิ่ม'}
          </span>
          <input
            type="checkbox"
            checked={action.includes(type)}
            onChange={(e) => {
              if (e.target.checked) {
                setAction((prev) => [...prev, type]);
              } else {
                setAction((prev) => prev.filter((a) => a !== type));
              }
            }}
            className="w-4 h-4 cursor-pointer"
          />
        </label>
        
        ))}
      </div>

      <div className="mt-6">
        <button
          onClick={() => router.push('/documents/company')}
          className="bg-gray-200 text-black px-4 py-2 rounded-full text-sm hover:bg-gray-300"
        >
          ← ย้อนกลับ
        </button>
      </div>
    </div>
  );
};

export default EditPartner;
