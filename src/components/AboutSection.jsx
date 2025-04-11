import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen w-full bg-gray-950 text-white flex items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-blue-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="relative max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-purple-400">About OPN AI</h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          OPN AI is a creative hub for cutting-edge AI tools, dedicated to making artificial intelligence accessible and impactful. Whether it's generating images, extracting text from media, converting files, or engaging with chatbots, we provide powerful solutions for everyone.
        </p>
        <p className="mt-6 text-md text-gray-400">
          Built with innovation and creativity at the core, our platform is constantly evolving to bring you new possibilities in the world of AI.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
