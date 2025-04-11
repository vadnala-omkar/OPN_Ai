import React, { useState } from "react";

const FileConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [conversionType, setConversionType] = useState("pdf-to-word");
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFileToPdfCo = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("https://api.pdf.co/v1/file/upload", {
      method: "POST",
      headers: {
        "x-api-key": "omkar123gowtham@gmail.com_bSAKeEdCptZO8LpvTDFNAIEmdL9lOnc88gtIh4zqzvvK6aE3GJuimHv9ex6hqYWM"
      },
      body: formData
    });

    const data = await response.json();
    if (data.url) return data.url;
    throw new Error(data.message || "File upload failed.");
  };

  const handleConvert = async () => {
    if (!selectedFile) {
      setErrorMessage("Please select a file to convert.");
      return;
    }

    try {
      const fileUrl = await uploadFileToPdfCo(selectedFile);

      let endpoint = "";
      let bodyPayload = {};

      switch (conversionType) {
        case "pdf-to-word":
          endpoint = "https://api.pdf.co/v1/pdf/convert/to/doc";
          bodyPayload = { url: fileUrl }; 
          break;
        case "word-to-pdf":
          endpoint = "https://api.pdf.co/v1/pdf/convert/from/doc";
          bodyPayload = { url: fileUrl, name: "converted.pdf" };
          break;
        case "pdf-to-image":
          endpoint = "https://api.pdf.co/v1/pdf/convert/to/png";
          bodyPayload = { url: fileUrl }; 
          break;
        default:
          setErrorMessage("Unsupported conversion type.");
          return;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "omkar123gowtham@gmail.com_bSAKeEdCptZO8LpvTDFNAIEmdL9lOnc88gtIh4zqzvvK6aE3GJuimHv9ex6hqYWM"
        },
        body: JSON.stringify(bodyPayload)
      });

      const data = await response.json();
      console.log("Response:", data);

      if (data.url) {
        setDownloadUrl(data.url);
        setErrorMessage("");
      } else {
        setErrorMessage(data.message || "Conversion failed.");
        setDownloadUrl(null);
      }
    } catch (error) {
      console.error("Error during conversion:", error);
      setErrorMessage("Something went wrong: " + error.message);
      setDownloadUrl(null);
    }
  };

  return (
    <section className="min-h-screen w-full bg-gray-950 text-white flex items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-blue-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="z-10 w-full max-w-md bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-xl p-6 flex flex-col items-center shadow-lg">
        <h1 className="text-3xl font-bold mb-6">OPN Ai File Converter</h1>

        <input type="file" onChange={handleFileChange} className="mb-4 w-full" />

        <select
          value={conversionType}
          onChange={(e) => setConversionType(e.target.value)}
          className="mb-4 p-2 w-full bg-gray-800 border border-purple-500 rounded"
        >
          <option value="pdf-to-word">PDF to Word</option>
          <option value="word-to-pdf">Word to PDF</option>
          <option value="pdf-to-image">PDF to Image</option>
        </select>

        <button
          onClick={handleConvert}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded text-white mb-4 w-full"
        >
          Convert
        </button>

        {errorMessage && <p className="text-red-500 mb-4 text-sm text-center">{errorMessage}</p>}

        {downloadUrl && (
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full text-center"
          >
            Download File
          </a>
        )}
      </div>
    </section>
  );
};

export default FileConverter;
