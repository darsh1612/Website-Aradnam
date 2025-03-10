import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const whatsappNumber = '9310519082';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm ${name} and I'm interested in learning more about your loans.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600"
        >
          <MessageSquare className="h-5 w-5" />
          <span>Connect on WhatsApp</span>
        </button>
      </form>
    </div>
  );
};

export default WhatsAppForm;