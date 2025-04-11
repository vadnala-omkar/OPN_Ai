import React from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen w-full bg-black text-white flex justify-center items-center p-6 relative overflow-hidden">
      {/* Blurred Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-30 animate-pulse delay-3000"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-7xl">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-purple-400 mb-2 animate-fade-in text-center">Contact Us</h2>
          <p className="text-gray-400 mb-10 animate-fade-in-delay">OPN is Open to Work</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://wa.me/+918328437626"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-purple-700 p-6 rounded-2xl transition-transform transform hover:scale-105 shadow-lg flex flex-col items-center"
            >
              <FaWhatsapp size={32} className="mb-2 text-green-500 animate-bounce" />
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:omkarrajak83@gmail.com"
              className="bg-gray-900 hover:bg-purple-700 p-6 rounded-2xl transition-transform transform hover:scale-105 shadow-lg flex flex-col items-center"
            >
              <Mail size={32} className="mb-2" />
              <span>Email</span>
            </a>

            <a
              href="tel:+91 8328497626"
              className="bg-gray-900 hover:bg-purple-700 p-6 rounded-2xl transition-transform transform hover:scale-105 shadow-lg flex flex-col items-center"
            >
              <Phone size={32} className="mb-2" />
              <span>Phone</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vadnala-omkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-purple-700 p-6 rounded-2xl transition-transform transform hover:scale-105 shadow-lg flex flex-col items-center"
            >
              <Linkedin size={32} className="mb-2" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/cherish_collector_06?igsh=MWMwdjJqa2s1anFrNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-purple-700 p-6 rounded-2xl transition-transform transform hover:scale-105 shadow-lg flex flex-col items-center"
            >
              <Instagram size={32} className="mb-2" />
              <span>Instagram</span>
            </a>

            <a
              href="https://x.com/GantaNithin2?t=ypEe7rNy4g-6BEVp_hj1Kg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-purple-700 p-6 rounded-2xl transition-transform transform hover:scale-105 shadow-lg flex flex-col items-center"
            >
              <Twitter size={32} className="mb-2" />
              <span>X (Twitter)</span>
            </a>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-xl w-full max-w-md animate-slide-in-up">
            <h3 className="text-2xl font-semibold text-purple-400 mb-2 text-center">We value your opinion</h3>
            <p className="text-sm text-gray-400 mb-4 text-center">Let us know how we can improve or help you better.</p>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 transition py-2 px-4 rounded-lg text-white"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
