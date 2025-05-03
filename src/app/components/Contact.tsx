'use client';

import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#011133]">Contact Us</h2>
        <div className="w-16 h-1 bg-[#F7931ฺB] mx-auto mt-2 mb-4 rounded" />
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Have a question or want to collaborate? Reach out to us—we&apos;d love to hear from you.
        </p>

        {/* Main layout */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* LEFT FORM */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-[#011133] mb-6">Get in Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">First Name</label>
                  <input type="text" placeholder="Your first name" className="w-full px-4 py-2 border border-gray-300 rounded mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Last Name</label>
                  <input type="text" placeholder="Your last name" className="w-full px-4 py-2 border border-gray-300 rounded mt-1" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" placeholder="Your email address" className="w-full px-4 py-2 border border-gray-300 rounded mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Subject</label>
                <input type="text" placeholder="Subject of your message" className="w-full px-4 py-2 border border-gray-300 rounded mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea rows={4} placeholder="Your message" className="w-full px-4 py-2 border border-gray-300 rounded mt-1" />
              </div>
              <button type="submit" className="w-full bg-[#F7931B] text-white py-2 rounded font-semibold hover:bg-orange-500 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT INFO */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#011133] text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-[#F7931B]" />
                <div>
                  <p className="font-semibold">Our Location</p>
                  <p  className="text-gray-400">The Tiger Team Academy<br />VXGX+272 ตำบล โคกกรวด อำเภอเมืองนครราชสีมา นครราชสีมา 30280<br />Thailand</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Mail className="text-[#F7931B]" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p  className="text-gray-400">thetigerteamacademy@gmail.com<br />thetigerteamacademy@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-[#F7931B]" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p  className="text-gray-400">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-13 rounded-xl">
              <h3 className="text-2xl font-bold text-[#011133] mb-6">Office Hours</h3>
              <div className="flex  justify-between text-sm mb-3">
                <p className="font-[700]">Monday - Friday:</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
              <div className="flex justify-between text-sm mb-3">
                <p className="font-[700]">Saturday:</p>
                <p>10:00 AM - 2:00 PM</p>
              </div>
              <div className="flex  justify-between text-sm">
                <p className="font-[700]">Sunday:</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
