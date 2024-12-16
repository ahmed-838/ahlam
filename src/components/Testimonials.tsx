import React from 'react';

const testimonials = [
  {
    name: 'John Smith',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    text: 'The care I received at MediCare was exceptional. The staff was attentive and professional throughout my treatment.',
    rating: 5
  },
  {
    name: 'Emma Davis',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    text: 'Dr. Thompson and her team provided outstanding care. I felt supported and informed every step of the way.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Patient Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}