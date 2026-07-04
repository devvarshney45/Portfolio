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
        "That's interesting! You can also ask about Dev's experience at Swayamfin, his Skribbl.io Arena project, or his backend skills.";

      if (lowerInput.includes("skill")) {
        reply =
          "Dev is an expert in Backend & Full-Stack. Tech stack: Java (Spring Boot), Node.js, React, TypeScript, AWS EC2, PostgreSQL, MongoDB, and Redis.";
      } else if (lowerInput.includes("project")) {
        reply =
          "Major projects: 1. Skribbl.io Arena (Real-time Fullstack), 2. Swayamfin CRM (Fintech), 3. Registration Backend (AWS), 4. GraphGuardians (IIT Delhi Hackathon Finalist).";
      } else if (lowerInput.includes("skribbl")) {
        reply =
          "Skribbl.io Arena is a real-time multiplayer drawing & guessing game with WebSocket sync, room management, and a live canvas, built in 72 hours.";
      } else if (lowerInput.includes("swayamfin")) {
        reply =
          "At Swayamfin Financial Services, Dev is a Full Stack Intern architecting a production fintech platform with Spring Boot and React, handling 20+ secure REST APIs.";
      } else if (lowerInput.includes("registration")) {
        reply =
          "Dev developed a high-traffic Event Registration backend with AWS EC2 deployment, handling 1,000+ registrations with robust security.";
      } else if (lowerInput.includes("aws") || lowerInput.includes("infra")) {
        reply =
          "Dev has extensive experience deploying production systems on AWS EC2, configuring Linux environments, PM2, and RDS instances.";
      } else if (lowerInput.includes("contact")) {
        reply =
          "You can contact Dev at devvarshney45@gmail.com or via LinkedIn.";
      } else if (lowerInput.includes("cgpa") || lowerInput.includes("education")) {
        reply =
          "Dev is a 3rd Year B.Tech Student at AKGEC with an 8.5 CGPA and a strong record in Competitive Programming.";
      } else if (lowerInput.includes("hackathon") || lowerInput.includes("iit")) {
        reply =
          "Dev was an IIT Delhi Hackathon Finalist (Devcation 2026) where his team built GraphGuardians, a GitHub vulnerability scanner.";
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
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[200]">
      {isOpen && (
        <div
          ref={chatboxRef}
          className="mb-4 w-[calc(100vw-2rem)] md:w-80 h-[70vh] md:h-96 overflow-hidden flex flex-col bg-black border border-gray-700 rounded-[2rem] shadow-2xl"
        >
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary rounded-full">
                  <Robot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-white">
                    Dev's AI Assistant
                  </h3>
                  <p className="text-xs text-green-500">Online</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="p-1 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X size={16} className="text-white" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    msg.isBot
                      ? "bg-gray-800 text-gray-200"
                      : "bg-primary text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-800">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my projects..."
                className="flex-1 px-4 py-2 bg-gray-900 border border-gray-800 rounded-xl text-xs text-white focus:outline-none focus:border-primary/50"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-primary rounded-xl hover:scale-105 transition-transform"
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
        className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative"
      >
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
        {isOpen ? (
          <X size={24} className="text-white relative z-10" />
        ) : (
          <ChatCircle size={24} className="text-white relative z-10" />
        )}
      </button>
    </div>
  );
};

export default Chatbot;