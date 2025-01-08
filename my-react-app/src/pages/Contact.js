import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  MailIcon, 
  LocationMarkerIcon,
  ClockIcon 
} from '@heroicons/react/outline';

function Contact() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
              {/* Add more form fields */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;