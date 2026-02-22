import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ChatCircle, X, PaperPlaneTilt, Robot } from "phosphor-react";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Dev's portfolio assistant 🤖 Ask me about his projects, skills, backend systems, or experience.",
      isBot: true,
      timestamp: new Date(),
    },
  ]);

  const chatboxRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1, delay: 1.5, ease: "back.out(1.7)" }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        chatboxRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "back.out(1.7)" }
      );
    }
  }, [isOpen]);

  const toggleChat = () => {
    if (isOpen) {
      gsap.to(chatboxRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 20,
        duration: 0.2,
        onComplete: () => setIsOpen(false),
      });
    } else {
      setIsOpen(true);
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userText = message;
    const lowerInput = userText.toLowerCase();

    const newUserMessage = {
      id: messages.length + 1,
      text: userText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setMessage("");

    setTimeout(() => {
      let reply =
        "That's interesting! You can also ask about Dev's backend architecture, Smart Classroom system, or AWS deployment.";

      if (lowerInput.includes("skill")) {
        reply =
          "Dev is skilled in MERN Stack, C++ (DSA), PostgreSQL, MongoDB, AWS EC2 deployment, and implementing security layers like JWT, Rate Limiting, and reCAPTCHA.";
      } else if (lowerInput.includes("project")) {
        reply =
          "Dev built PANKAJ ELECTRICALS (MERN e-commerce), Smart Classroom Sync (Teacher Web + Student App), and a secure Event Registration backend handling 800+ users.";
      } else if (lowerInput.includes("smart")) {
        reply =
          "Smart Classroom Sync is a role-based backend system. Teachers create quizzes & upload notes via web portal, students use mobile app to attempt quizzes and track performance.";
      } else if (lowerInput.includes("registration")) {
        reply =
          "Dev developed a high-traffic Event Registration backend with Middleware validation, Rate Limiter, Google reCAPTCHA, OTP attempt limit, and AWS EC2 deployment.";
      } else if (lowerInput.includes("aws")) {
        reply =
          "Dev has deployed backend systems on AWS EC2 and configured production-ready environments.";
      } else if (lowerInput.includes("contact")) {
        reply =
          "You can contact Dev at varshneydev365@gmail.com or connect via LinkedIn: linkedin.com/in/dev-varshney-837390325";
      } else if (lowerInput.includes("cgpa") || lowerInput.includes("education")) {
        reply =
          "Dev is a 2nd Year B.Tech CSE student with a strong CGPA of 9.2.";
      }

      const botResponse = {
        id: messages.length + 2,
        text: reply,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    }, 700);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div
          ref={chatboxRef}
          className="mb-4 w-80 h-96 overflow-hidden flex flex-col bg-black border border-gray-700 rounded-xl shadow-xl"
        >
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary rounded-full">
                  <Robot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-white">
                    Dev's AI Assistant
                  </h3>
                  <p className="text-xs text-gray-400">Online</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="p-1 hover:bg-gray-700 rounded-full transition-colors"
              >
                <X size={16} className="text-white" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    msg.isBot
                      ? "bg-gray-800 text-white"
                      : "bg-primary text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about projects or skills..."
                className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-primary"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-primary rounded-lg hover:scale-105 transition-transform"
              >
                <PaperPlaneTilt size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        ref={buttonRef}
        onClick={toggleChat}
        className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <ChatCircle size={24} className="text-white" />
        )}
      </button>
    </div>
  );
};

export default Chatbot;