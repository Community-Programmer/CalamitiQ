import { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from "react-markdown";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() !== '') {
      // Add user's message to the state
      setMessages(prevMessages => [
        ...prevMessages,
        { text: input, fromUser: true }
      ]);

      try {
        const response = await axios.post(`http://127.0.0.1:5050/api/v1/chat/getresponse`, {
          userInput: input
        });
        
        // Add bot's response to the state
        setMessages(prevMessages => [
          ...prevMessages,
          { text: response.data.text, fromUser: false }
        ]);
      } catch (error) {
        console.error('Error fetching response:', error);
      }

      // Clear input field
      setInput('');
    }
  };

  return (
    <div className="fixed right-20 bottom-2 w-[500px] border border-gray-300 rounded-lg overflow-hidden bg-gray-200">
      <div className="max-h-[300px] overflow-y-auto p-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.fromUser ? 'bg-blue-200 p-1.5 mb-1 rounded text-black' : 'bg-gray-100 p-1.5 mb-1 rounded text-black'}
          >
           <ReactMarkdown>{message.text}</ReactMarkdown>
          </div>
        ))}
      </div>
      <div className="flex items-center p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 rounded mr-2"
        />
        <button
          onClick={sendMessage}
          className="py-2 px-4 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
