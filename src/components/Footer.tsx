import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-gray-200 text-gray-700 py-8">
    <div className="text-center text-sm">
      {`© ${new Date().getFullYear()} 一橋大学 バドミントン部`}
    </div>
  </footer>
);
