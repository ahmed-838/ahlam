import React from 'react';
import PageLayout from '../shared/PageLayout';
import ImageWithCaption from '../shared/ImageWithCaption';

export default function Page4() {
  return (
    <PageLayout pageNumber={4}>
      <h2 className="text-2xl font-semibold mb-6 text-blue-800">
        Patient Care Excellence
      </h2>

      <ImageWithCaption
        src="https://images.unsplash.com/photo-1571772996211-2f02c9727629"
        alt="Medical team meeting"
        caption="Our multidisciplinary team discussing patient care strategies"
      />

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">
          Comprehensive Care Approach
        </h3>
        <p className="text-gray-700 mb-4">
          We believe in a holistic approach to healthcare, considering not just
          the immediate medical needs but the overall well-being of our patients.
          Our team works collaboratively to ensure comprehensive care delivery.
        </p>
      </div>

      <ImageWithCaption
        src="https://images.unsplash.com/photo-1527613426441-4da17471b66d"
        alt="Doctor with patient"
        caption="Dr. Lisa Anderson providing personalized care consultation"
      />

      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-blue-800">
          Contact Information
        </h3>
        <p className="text-gray-700">
          For appointments and inquiries:<br />
          Phone: 1-800-MEDICARE<br />
          Email: contact@medicare.com<br />
          Address: 123 Medical Center Drive, New York, NY 10001
        </p>
      </div>
    </PageLayout>
  );
}