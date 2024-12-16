import React from 'react';
import { Stethoscope, Users, Building2, Heart } from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'Specialized Care',
    description: 'Expert medical services across multiple specialties with proven outcomes.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Board-certified physicians with decades of combined experience.'
  },
  {
    icon: Building2,
    title: 'Modern Facilities',
    description: 'State-of-the-art medical equipment and comfortable healing environments.'
  },
  {
    icon: Heart,
    title: 'Patient-First Approach',
    description: 'Personalized care plans tailored to your unique health needs.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}