import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-gray-200 py-4 mt-8">
        <div className="container mx-auto text-center text-gray-600">
          © {new Date().getFullYear()} Task Manager. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  