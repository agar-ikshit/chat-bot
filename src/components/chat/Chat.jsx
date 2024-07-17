import React, { useEffect, useRef, memo, useState } from 'react';
import TextBox from '../input/Textbox';
import './chat.css';
import { motion, useAnimation } from 'framer-motion';

const ChatComponent = ({ messages = [] }) => {
  const chatEndRef = useRef(null);
  const [userMessages, setMessages] = useState(messages);

  useEffect(() => {
    if (userMessages.length === 0) {
      setMessages([{
        text: "Hi there, how can I help you?",
        type: 'bot'
      }]);
    }
  }, [userMessages]);

  const handleSendMessage = async (messageText, type) => {
    setMessages((prevMessages) => [...prevMessages, { text: messageText, type }]);

    if (type === 'user') {
      try {
        const response = await fetch(
          'https://utezbywj.cloud.sealos.io/api/v1/prediction/ef7600d7-f2d7-4085-ab86-4a7e90199f90',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: messageText }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('API response:', result); // Log the result to inspect its structure

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: result.text || 'No answer received', type: 'bot' },
        ]);
      } catch (error) {
        console.error('Error:', error);

        let errorMessage = 'There was an error communicating with the server.';
        if (error.message) {
          errorMessage = error.message;
        }

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: errorMessage, type: 'bot' },
        ]);
      }
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [userMessages]);

  return (
    <div className="chat-container">
      <div className="chat-display" aria-live="polite">
        {userMessages.map((message, index) => (
          <div 
            key={`${message.text}-${index}`} 
            className={`message ${message.type}`}
          >
            {message.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      
      <TextBox onSendMessage={handleSendMessage} />
   
    </div>
  );
};

ChatComponent.displayName = 'Chat';

const Chat = memo(ChatComponent);

export default Chat;
