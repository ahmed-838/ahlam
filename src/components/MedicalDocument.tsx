import React from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

export default function MedicalDocument() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Medical Documentation</h2>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </div>
    </section>
  );
}