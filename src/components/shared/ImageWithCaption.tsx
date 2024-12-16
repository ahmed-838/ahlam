import React from 'react';

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
}

export default function ImageWithCaption({ src, alt, caption }: ImageWithCaptionProps) {
  return (
    <figure className="mb-8">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
      <figcaption className="mt-2 text-sm text-gray-600 text-center italic">
        {caption}
      </figcaption>
    </figure>
  );
}