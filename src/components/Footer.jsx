import React from "react";

const Footer = ({ id }) => {
  return (
    <footer
      className="w-full h-auto bg-gray-50 p-6 space-y-2 dark:bg-gray-700"
      // id={id}
    >
      <p className="text-lg ">About Us</p>
      <p className="text-sm text-gray-300">Investors</p>
      <p className="text-sm text-gray-300">Jobs</p>
      <p className="text-sm text-gray-300">Privacy policy</p>
      <p className="text-sm text-gray-300">Terms and Conditions</p>
      <p className="text-sm text-gray-300">Travel World, Inc.</p>
      <p className="text-sm text-gray-300">Follow Us </p>
      <div className="w-full h-11"></div>
    </footer>
  );
};

export default Footer;
