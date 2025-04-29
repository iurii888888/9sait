'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

const Signup: React.FC = () => {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const router = useRouter()

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (!password || password !== confirm) {
      toast.error('Пароли не совпадают')
      return
    }
    // TODO: здесь отправить запрос на API для регистрации
    toast.success('Регистрация прошла успешно')
    router.push('/login')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Регистрация</h1>

        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border rounded px-4 py-2 mb-4"
          required
        />

        <input
          type="password"
          placeholder="Повторите пароль"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          className="w-full border rounded px-4 py-2 mb-6"
          required
        />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
          Зарегистрироваться
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
          Уже есть аккаунт?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Войти
          </a>
        </p>
      </form>
    </div>
  )
}

export default Signup
