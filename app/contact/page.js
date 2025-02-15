"use client";
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';  // استيراد الأيقونات من مكتبة react-icons

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      {/* نموذج التواصل */}
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* نموذج إرسال الرسالة */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
              <input type="text" id="name" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
              <input type="email" id="email" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md" />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
              <textarea id="message" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md" rows="4"></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* معلومات الاتصال */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="text-sm text-gray-600 mb-2">Email: contact@movieapp.com</p>
          <p className="text-sm text-gray-600 mb-4">Phone: +123 456 789</p>

          {/* روابط السوشيال ميديا */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 text-blue-600 hover:text-blue-800 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 text-pink-500 hover:text-pink-700 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
