import React, { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  pageNumber: number;
}

export default function PageLayout({ children, pageNumber }: PageLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white p-12 shadow-lg mb-8">
      <div className="min-h-[1056px] relative">
        {children}
        <div className="absolute bottom-4 right-4 text-gray-500">
          Page {pageNumber} of 4
        </div>
      </div>
    </div>
  );
}