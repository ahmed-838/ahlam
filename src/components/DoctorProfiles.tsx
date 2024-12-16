import React from 'react';

const doctors = [
  {
    name: 'Dr. Sarah Chen',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d',
    description: 'Board-certified cardiologist with 15 years of experience in complex cardiac care.'
  },
  {
    name: 'Dr. Michael Rodriguez',
    specialty: 'Neurosurgery',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
    description: 'Leading neurosurgeon specializing in minimally invasive brain and spine procedures.'
  },
  {
    name: 'Dr. Emily Thompson',
    specialty: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
    description: 'Dedicated pediatrician focused on developmental care and family wellness.'
  }
];

export default function DoctorProfiles() {
  return (
    <section className="py-20 bg-gray-50" id="doctors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Expert Doctors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-blue-600 mb-4">{doctor.specialty}</p>
                <p className="text-gray-600">{doctor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}