'use client';

import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <p className="text-xl text-gray-700 mb-8">Страница не найдена</p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;