import React, { useState } from 'react';
import './textbox.css';
import sendIcon from '../../assets/send.png';

const TextBox = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSendMessage(inputText, 'user'); 
      setInputText('');
    }
  };

  return (
    <div className="textbox-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="textbox-input"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type message"
        />
        <button type="submit">
          <img src={sendIcon} alt="Send" className='sendimg'/>
        </button>
      </form>
    </div>
  );
};

export default TextBox;
