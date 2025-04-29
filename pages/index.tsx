'use client';

import React from 'react';
import Head from 'next/head';
import FunctionsSection from '../components/FunctionsSection';

const Home: React.FC = () => (
  <>
    <Head>
      <title>StomaLink — Универсальная платформа для стоматологов и зубных техников</title>
      <meta name="description" content="Свяжите клинику и лабораторию в одном месте: от заказа конструкций до контроля качества и взаимодействия с пациентом." />
    </Head>
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative bg-blue-600 text-white py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">StomaLink</h1>
          <p className="text-xl mb-8">Универсальная платформа для стоматологов и зубных техников.</p>
          <p className="max-w-lg mx-auto mb-8">
            Свяжите клинику и лабораторию в одном месте: от заказа конструкций до контроля качества и взаимодействия с пациентом.
          </p>
          <a href="/signup" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded">
            Начать бесплатно
          </a>
        </div>
      </section>
      {/* Functions Section */}
      <FunctionsSection />
    </main>
  </>
);

export default Home;