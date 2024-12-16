import React from 'react';
import PageLayout from '../shared/PageLayout';
import ImageWithCaption from '../shared/ImageWithCaption';

export default function Page3() {
  return (
    <PageLayout pageNumber={3}>
      <h2 className="text-2xl font-semibold mb-6 text-blue-800">
        Advanced Medical Technology
      </h2>

      <ImageWithCaption
        src="https://images.unsplash.com/photo-1516549655169-df83a0774514"
        alt="Modern medical equipment"
        caption="Our advanced MRI facility featuring the latest diagnostic technology"
      />

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">
          Diagnostic Excellence
        </h3>
        <p className="text-gray-700 mb-4">
          Our facility is equipped with the latest medical imaging and diagnostic
          equipment, enabling precise diagnosis and treatment planning. Our team
          of specialists utilizes these advanced tools to provide accurate and
          timely results.
        </p>
      </div>

      <ImageWithCaption
        src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c"
        alt="Doctor analyzing test results"
        caption="Dr. James Wilson analyzing patient test results in our diagnostic center"
      />
    </PageLayout>
  );
}