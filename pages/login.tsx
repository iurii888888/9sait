'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin') {
      router.push('/admin');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Вход</h1>
        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded px-4 py-2 mb-4"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;