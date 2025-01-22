import React, { useState } from 'react';

const Footer = () => {
  return (
        <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">
            Designed and Developed by <span className="font-bold">Siddharth Manna</span>
          </p>
          <p className="mt-4 text-sm">
          Last updated: 22nd January, 2025
          </p>
          <p className="mt-4 text-sm">
            © {new Date().getFullYear()} Siddharth Manna. All Rights Reserved.
          </p>
        </div>
      </footer>
  );
};

export default Footer;