import React from 'react';
import PageLayout from '../shared/PageLayout';
import ImageWithCaption from '../shared/ImageWithCaption';

export default function Page1() {
  return (
    <PageLayout pageNumber={1}>
      <h1 className="text-3xl font-bold mb-8 text-blue-900">
        Excellence in Medical Care
      </h1>
      
      <ImageWithCaption
        src="https://images.unsplash.com/photo-1622253692010-333f2da6031d"
        alt="Female doctor examining medical scans"
        caption="Dr. Sarah Chen, Lead Radiologist, reviewing patient imaging results"
      />

      <p className="mb-6">
        At MediCare, we pride ourselves on delivering exceptional healthcare services
        through our team of highly qualified medical professionals. Our state-of-the-art
        facilities and patient-centered approach ensure that every individual receives
        the highest standard of care.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Our Mission</h2>
      <p className="mb-6">
        To provide comprehensive, compassionate healthcare services that enhance the
        quality of life for our patients and contribute to the well-being of our
        community.
      </p>

      <ImageWithCaption
        src="https://images.unsplash.com/photo-1581056771107-24ca5f033842"
        alt="Medical team discussion"
        caption="Our medical team collaborating on patient care strategies"
      />
    </PageLayout>
  );
}