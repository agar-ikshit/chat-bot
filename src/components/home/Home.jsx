import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Ads from '../ads/Ads';
import Chat from '../chat/Chat';
import './home.css';
import { motion } from 'framer-motion';

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const handleNewChat = () => {
    setMessages([]);
  };

  const handleToggleSidebar = (isVisible) => {
    console.log('Sidebar is now:', isVisible ? 'Open' : 'Closed');
    setSidebarVisible(isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarVisible(false);
      } else {
        setSidebarVisible(true);
      }
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  return (
    <div className="home">
      <Sidebar onNewChat={handleNewChat} onToggleSidebar={handleToggleSidebar} />
      <motion.div 
        className='main-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Chat messages={messages} />
      </motion.div>
      <div className='ads-container'>
        <Ads />
      </div>
    </div>
  );
};

export default Home;
