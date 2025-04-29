'use client';

import React from 'react';

const Admin: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Панель администратора</h1>
      <p className="text-lg text-gray-700">Здесь вы можете управлять всеми заявками.</p>
    </div>
  );
};

export default Admin;