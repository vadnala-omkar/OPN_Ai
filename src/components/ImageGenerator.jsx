import React, { useState } from "react";
import axios from "axios";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt) return;

    setLoading(true);
    setError("");
    setImageUrl(null);

    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2",
        {
          inputs: prompt,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_HF_API_TOKEN}`,
          },
          responseType: "blob",
        }
      );

      const imageBlob = response.data;
      const imageURL = URL.createObjectURL(imageBlob);
      setImageUrl(imageURL);
    } catch (err) {
      setError("Error generating image. Try again or use a different prompt.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 p-6">
      <div className="w-full max-w-5xl bg-gradient-to-br from-purple-800 via-black to-blue-900 text-white rounded-2xl shadow-2xl p-10 relative overflow-hidden">
        {/* Background blur balls */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center text-purple-400 mb-8">
            Generate AI Image
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <input
              type="text"
              className="w-full md:flex-1 p-3 rounded-lg text-black focus:outline-none"
              placeholder="Enter your image prompt..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              onClick={handleGenerate}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-xl font-semibold transition w-full md:w-auto"
            >
              {loading ? "Generating..." : "Generate Image"}
            </button>
          </div>

          {error && (
            <p className="text-red-400 mt-4 text-center font-medium">{error}</p>
          )}

          {imageUrl && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2 text-purple-300">
                Generated Image:
              </h3>
              <img
                src={imageUrl}
                alt="Generated"
                className="rounded-xl w-full max-h-[600px] object-contain border border-purple-700"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
