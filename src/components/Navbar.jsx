import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTools = () => setToolsOpen(!toolsOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center text-2xl font-bold text-purple-400">
            OPN Ai
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="hover:text-purple-400 transition">Home</a>
            <a href="#gallery" className="hover:text-purple-400 transition">Gallery</a>

            {/* Tools Dropdown */}
            <div className="relative">
              <button
                onClick={toggleTools}
                className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition shadow-lg"
              >
                Tools <ChevronDown className="ml-1" size={18} />
              </button>
              {toolsOpen && (
                <div className="absolute bg-gray-800 mt-2 rounded-md shadow-lg py-2 w-56 z-10">
                  <a onClick={() => window.open("/ImageGenerator", "_blank")} className="cursor-pointer block px-4 py-2 hover:bg-gray-700">OPN Ai Image Generator</a>
                  <a onClick={() => window.open("/AIChatbot", "_blank")} className="cursor-pointer block px-4 py-2 hover:bg-gray-700">OPN Ai ChatBot</a>
                  <a onClick={() => window.open("/Translator", "_blank")} className="cursor-pointer block px-4 py-2 hover:bg-gray-700">OPN Ai Translator</a>
                  <a onClick={() => window.open("/FileConverter", "_blank")} className="cursor-pointer block px-4 py-2 hover:bg-gray-700">OPN Ai File Converter</a>
                </div>
              )}
            </div>

            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-4 space-y-4">
          <a href="#" className="block hover:text-purple-400">Home</a>
          <a href="#gallery" className="block hover:text-purple-400">Gallery</a>
          <div className="border-t border-gray-700 pt-2">
            <p className="text-purple-300 font-semibold">Tools</p>
            <a onClick={() => window.open("/ImageGenerator", "_blank")} className="cursor-pointer block hover:text-purple-400">Image Generator</a>
            <a onClick={() => window.open("/AIChatbot", "_blank")} className="cursor-pointer block hover:text-purple-400">ChatBot</a>
            <a onClick={() => window.open("/Translator", "_blank")} className="cursor-pointer block hover:text-purple-400">Translator</a>
            <a onClick={() => window.open("/FileConverter", "_blank")} className="cursor-pointer block hover:text-purple-400">File Converter</a>
          </div>
          <a href="#about" className="block hover:text-purple-400">About</a>
          <a href="#contact" className="block hover:text-purple-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
