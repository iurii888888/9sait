'use client';

import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Панель пользователя</h1>
      <p className="text-lg text-gray-700">Добро пожаловать в ваш личный кабинет!</p>
    </div>
  );
};

export default Dashboard;