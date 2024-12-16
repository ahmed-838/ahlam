import React from 'react';
import PageLayout from '../shared/PageLayout';
import ImageWithCaption from '../shared/ImageWithCaption';

export default function Page2() {
  return (
    <PageLayout pageNumber={2}>
      <h2 className="text-2xl font-semibold mb-6 text-blue-800">
        Specialized Departments
      </h2>

      <ImageWithCaption
        src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed"
        alt="Doctor performing surgery"
        caption="Dr. Michael Rodriguez leading a minimally invasive surgical procedure"
      />

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-blue-700">Surgery</h3>
          <p className="text-gray-700">
            Our surgical department features advanced equipment and experienced
            surgeons specialized in various procedures, from minimally invasive
            to complex operations.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-blue-700">Cardiology</h3>
          <p className="text-gray-700">
            State-of-the-art cardiac care facility with comprehensive diagnostic
            and treatment services for heart conditions.
          </p>
        </div>
      </div>

      <ImageWithCaption
        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
        alt="Female doctor with patient"
        caption="Dr. Emily Thompson consulting with a patient in our cardiology department"
      />
    </PageLayout>
  );
}