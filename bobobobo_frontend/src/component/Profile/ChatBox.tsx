import React, { useState } from 'react';
import { askgpt } from '../../utils/chatApi' // 请确保路径正确

interface MessageProps {
  content: string;
  id: number;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [input, setInput] = useState<string>('');

  const sendMessage = async () => { // 注意 async 关键字
    try {
      const response = await askgpt(input); // 使用 input 而不是 message
      // Process the response as needed
      console.log(response.data);
      // 添加新的消息到 messages 列表
      setMessages(prevMessages => [...prevMessages, { content: input, id: Date.now() }]);
      setInput(''); // 清空输入框
    } catch (error) {
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
        <input 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          placeholder="输入消息..."
        />
        <button onClick={sendMessage}>发送</button>
      </div>
    </div>
  );
};

export default ChatBox;
