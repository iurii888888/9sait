'use client';

import React, { useState } from 'react';

const NewOrder: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Отправка новой заявки:', { name, phone });
    // Тут будет отправка данных через API
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Новая заявка</h1>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-4 py-2 mb-4"
        />
        <input
          type="tel"
          placeholder="Ваш телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded px-4 py-2 mb-4"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default NewOrder;