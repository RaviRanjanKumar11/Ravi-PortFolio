"use client";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function AIChatbot() {
  const [messages, setMessages] = useState([{ text: "Hi, how can I help?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    // Mock AI Response (Replace with OpenAI API)
    setTimeout(() => {
      const botMessage = { text: "I'm here to assist you! 🚀", sender: "bot" };
      setMessages([...messages, userMessage, botMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="p-4 w-72 fixed bottom-5 right-5 bg-white shadow-lg rounded-lg border">
      <div className="flex items-center gap-1 mb-1">
        <FaRobot className="text-blue-500" />
        <h2 className="text-lg font-bold">AI Assistant</h2>
      </div>
      <div className="h-40 overflow-y-auto bg-gray-100 p-1 rounded">
        {messages.map((msg, i) => (
          <p key={i} className={`p-2 ${msg.sender === "bot" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"} rounded my-1`}>
            {msg.text}
          </p>
        ))}
      </div>
      <div className="mt-2 flex">
        <input className="w-full p-2 border rounded" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="bg-blue-500 text-white p-1 rounded ml-2" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
