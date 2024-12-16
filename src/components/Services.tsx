import React from 'react';
import { Stethoscope, Heart, Brain, Bone } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118'
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Expert care for neurological conditions with state-of-the-art treatments.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514'
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Specialized care for bone, joint, and muscle conditions.',
    image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Medical Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}