import React, { useState } from 'react';
import { askgpt } from '../../utils/chatApi' // 请确保路径正确
import { Button, TextField } from '@mui/material';

interface MessageProps {
  content: string;
  id: number;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [input, setInput] = useState<string>('');

  const sendMessage = async () => { // 注意 async 关键字
    try {
      console.log("bobobooboboboobobobo")
      const response = await askgpt(input); // 使用 input 而不是 message
      console.log("--------")
      console.log("Response:"+response);
      // Process the response as needed
      
      console.log("Data:"+response.data);
      // 添加新的消息到 messages 列表
      setMessages(prevMessages => [...prevMessages, { content: response.data.response, id: Date.now() }]);
      setInput(''); // 清空输入框
    } catch (error) {
      console.log("}}++++++++++++")

      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((message) => (
          <p key={message.id}>{message.content}</p>
        ))}
      </div>
      <div className="input-section">
      <Button onClick={sendMessage}>Ask protector</Button>
        <TextField 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          placeholder="Please input some verbs..."
        />
      </div>
    </div>
    
  );
};

export default ChatBox;
