import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <div className="relative bg-[url('/assets/contactUs.png')] bg-cover bg-center h-screen w-full border-4 border-white/80 opacity-90 mt-9">
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-white text-lg md:text-2xl mb-6">
          We would love to hear from you! Whether you have a question about our
          services
        </p>
        <div className="text-white text-md md:text-xl mb-8 space-y-2">
          <p>Address: Dhaka, Bangladesh</p>
          <p>Phone: +880171662312</p>
          <p>Email: petCareHub@gmail.com</p>
        </div>
        <div className="flex space-x-6 text-white text-2xl">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-blue-500" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-blue-400" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
