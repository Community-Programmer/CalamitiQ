import ChatBot from "@/components/ChatBot/ChatBot";
import React, { useState } from "react";
import bot from '../../assets/chatbot.png'

const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <div className="h-96">Home</div>
      <div className="chatBotBtn">
        <button onClick={() => setShowChatbot(!showChatbot)}><img src={bot} alt="bot" /></button>
      </div>
      {showChatbot && <ChatBot />}
    </>
  );
};

export default Home;
