import React, { useState } from "react";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [targetLang, setTargetLang] = useState("es"); // default Spanish
  const [history, setHistory] = useState([]);
  const [detectedLang, setDetectedLang] = useState(null);

  const handleTranslate = async () => {
    try {
      const response = await fetch(
        `https://free-google-translator.p.rapidapi.com/external-api/free-google-translator?from=en&to=${targetLang}&query=${encodeURIComponent(inputText)}`,
        {
          method: "POST",
          headers: {
            "x-rapidapi-key": "d61939d6dbmsh8fd8b85a5138753p115df2jsn53986cc9c082",
            "x-rapidapi-host": "free-google-translator.p.rapidapi.com",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ translate: "rapidapi" })
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (data.translation) {
        setOutputText(data.translation);
        setDetectedLang(data.translateTo);
        setHistory((prev) => [
          { input: inputText, output: data.translation, target: targetLang },
          ...prev
        ]);
      } else {
        setOutputText("Unexpected response from API. Check console for details.");
      }
    } catch (error) {
      console.error("Translation error:", error);
      setOutputText("Translation failed.");
    }
  };

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      setInputText(event.results[0][0].transcript);
    };
    recognition.start();
  };

  const handleVoiceOutput = () => {
    const utterance = new SpeechSynthesisUtterance(outputText);
    utterance.lang = targetLang;
    window.speechSynthesis.speak(utterance);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex justify-center items-center p-6 relative overflow-hidden">
      {/* Blurred Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-30 animate-pulse delay-3000"></div>

      <div className="z-10 flex flex-col items-center w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">OPN Ai Translator</h1>

        <button
          onClick={handleVoiceInput}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded mb-4"
        >
          🎤 Voice Input
        </button>

        <textarea
          rows="4"
          className="w-full p-3 rounded bg-gray-800 border border-purple-500 mb-4"
          placeholder="Enter text to translate..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <select
          className="mb-4 p-2 rounded bg-gray-800 border border-purple-500"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="te">Telugu</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
          <option value="zh">Chinese</option>
          <option value="ja">Japanese</option>
          <option value="ru">Russian</option>
          <option value="ar">Arabic</option>
          <option value="pt">Portuguese</option>
        </select>

        <button
          onClick={handleTranslate}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded mb-6"
        >
          Translate
        </button>

        <textarea
          rows="4"
          className="w-full p-3 rounded bg-gray-800 border border-purple-500 mb-2"
          placeholder="Translation output..."
          value={outputText}
          readOnly
        />

        {detectedLang && (
          <p className="text-sm text-purple-300 mb-4">Translation Direction: {detectedLang}</p>
        )}

        <button
          onClick={handleVoiceOutput}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded mb-6"
        >
          🔊 Voice Output
        </button>

        <div className="w-full">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Translation History</h2>
            <button
              onClick={handleClearHistory}
              className="text-sm text-red-500 hover:underline"
            >
              Clear History
            </button>
          </div>
          <ul className="space-y-2">
            {history.map((entry, index) => (
              <li
                key={index}
                className="bg-gray-800 p-3 rounded border border-purple-500"
              >
                <strong>Input:</strong> {entry.input}<br />
                <strong>Output ({entry.target}):</strong> {entry.output}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Translator;
