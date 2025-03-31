"use client";
import { useState } from "react";
import { FaRobot, FaTimes, FaCommentDots } from "react-icons/fa";

export default function AIChatbot() {
  const [messages, setMessages] = useState([{ text: "Hi, how can I help?", sender: "bot" }]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Toggle state

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const botMessage = { text: "I'm here to assist you! 🚀", sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5">
      {/* Toggle Button */}
      {!isOpen ? (
        <button
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg sm:p-4"
          onClick={() => setIsOpen(true)}
        >
          <FaCommentDots size={24} />
        </button>
      ) : (
        <div className="p-1 w-[72vw] max-w-xs sm:max-w-sm bg-white shadow-lg rounded-lg border relative">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-1">
              <FaRobot className="text-blue-500" />
              <h2 className="text-lg font-bold">AI Assistant</h2>
            </div>
            <button className="text-gray-500" onClick={() => setIsOpen(false)}>
              <FaTimes size={18} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-40 sm:h-48 overflow-y-auto bg-gray-100 p-2 rounded">
            {messages.map((msg, i) => (
              <p
                key={i}
                className={`p-2 ${
                  msg.sender === "bot" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                } rounded my-1`}
              >
                {msg.text}
              </p>
            ))}
          </div>

          {/* Input Field */}
          <div className="mt-2 flex">
            <input
              className="w-full p-2 border rounded text-sm sm:text-base"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="bg-blue-500 text-white px-3 py-2 rounded ml-2 text-sm sm:text-base" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
