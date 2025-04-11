import React, { useEffect, useState } from "react";

const HomeSection = () => {
  const features = [
    "Unleash Creativity with OPN AI Image Generator",
    "Talk to Smart Minds using OPN AI Chatbot",
    "Translate Anything Instantly with OPN AI Translator",
    "Convert Files Seamlessly with OPN AI File Converter"
  ];

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-16">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 transition-opacity duration-1000">
          {features[currentFeatureIndex].includes("Image Generator") && (
            <>
              Unleash Creativity with{" "}
              <span className="text-purple-500">OPN AI Image Generator</span>
            </>
          )}
          {features[currentFeatureIndex].includes("Chatbot") && (
            <>
              Talk to Smart Minds using{" "}
              <span className="text-blue-400">OPN AI Chatbot</span>
            </>
          )}
          {features[currentFeatureIndex].includes("Translator") && (
            <>
              Translate Anything Instantly with{" "}
              <span className="text-green-400">OPN AI Translator</span>
            </>
          )}
          {features[currentFeatureIndex].includes("File Converter") && (
            <>
              Convert Files Seamlessly with{" "}
              <span className="text-yellow-400">OPN AI File Converter</span>
            </>
          )}
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Powered by advanced models from Hugging Face, Stability AI, and other AI leaders.
        </p>
        <a
          href="#GetStarted"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition shadow-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
