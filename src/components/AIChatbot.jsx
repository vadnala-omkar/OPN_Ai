import React, { useState } from "react";
import { Send } from "lucide-react";

const AIChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const userMessage = { type: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            ...messages
              .filter((msg) => msg.type === "user" || msg.type === "bot")
              .map((msg) => ({
                role: msg.type === "user" ? "user" : "assistant",
                content: msg.text,
              })),
            {
              role: "user",
              content: userInput,
            },
          ],
        }),
      });

      const data = await res.json();
      const botMessage = {
        type: "bot",
        text: data.choices?.[0]?.message?.content || "No response received.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error chatting with bot:", err);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
      setUserInput("");
    }
  };

  const handleClear = () => {
    setMessages([]);
  };

  return (
    <div className="mt-8 min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white px-4 py-8 md:px-10 backdrop-blur-md">
      <h2 className="text-4xl font-extrabold text-purple-400 mb-6 text-center">
        OPN AI Chat Assistant
      </h2>

      <div className="flex items-center gap-3 mb-6 w-[80vh] mx-auto">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-grow px-4 py-2 rounded-2xl bg-gray-700 bg-opacity-30 border border-purple-500 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm backdrop-blur"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-2xl text-white flex items-center gap-2 disabled:opacity-50 text-sm"
        >
          <Send size={16} /> Send
        </button>
        <button
          onClick={handleClear}
          className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-2xl text-white text-sm"
        >
          Clear
        </button>
      </div>

      <div className="bg-white bg-opacity-10 border border-purple-500 rounded-2xl shadow-lg h-auto  w-[99vh] overflow-y-auto p-4 mb-6 mx-auto flex flex-col backdrop-blur-md">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-3 p-3 rounded-2xl w-fit max-w-[75%] break-words shadow-md backdrop-blur-sm ${
              msg.type === "user"
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white self-end ml-auto"
                : "bg-gradient-to-r from-blue-600 to-indigo-500 text-white self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="text-purple-300 text-sm animate-pulse">Typing...</div>
        )}
      </div>
    </div>
  );
};

export default AIChatbot;
