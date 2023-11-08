// components/SocialMediaIcons.js
import React from 'react';

const SocialMediaIcons = () => {
  return (
    <div className="fixed z-50 top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2 flex flex-col space-y-4">
      <a
        href="#your-link-here"
        className="text-3xl text-primary hover:text-blue-700 transition-all"
      >
<i className="fa fa-facebook"></i>      
</a>
      <a
        href="#your-link-here"
        className="text-3xl text-primary hover:text-red-700 transition-all"
      >
        <i className="fa fa-instagram"></i>
      </a>
      <a
        href="#your-link-here"
        className="text-3xl text-primary hover:text-blue-600 transition-all"
      >
        <i className="fa fa-twitter"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=+917030861199"
        className="text-3xl text-primary hover:text-green-600 transition-all"
      >
        <i className="fa fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
