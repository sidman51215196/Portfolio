import React from 'react';

const Footer = () => {
  const currentDate = new Date();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">
          Designed and Developed by <span className="font-bold">Siddharth Manna</span>
        </p>
        <p className="mt-4 text-sm">
          Last Updated: 13th November, 2025. 
        </p>
        <p className="mt-4 text-sm">
          © {currentDate.getFullYear()} Siddharth Manna. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
