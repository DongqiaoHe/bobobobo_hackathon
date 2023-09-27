import React, { useState } from 'react';
import { askgpt } from '../../utils/chatApi' // 请确保路径正确
import { Button, TextField, Typography, useTheme } from '@mui/material';
import { Send } from '@mui/icons-material';

interface MessageProps {
  content: string;
  id: number;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [input, setInput] = useState<string>('');
  const theme = useTheme();

  const sendMessage = async () => { // 注意 async 关键字
    try {
      console.log("bobobooboboboobobobo")
      const response = await askgpt(input); // 使用 input 而不是 message
      console.log("--------")
      console.log("Response:"+response);
      // Process the response as needed
      
      console.log("Data:"+response.data);
      // 添加新的消息到 messages 列表
      setMessages(prevMessages => [{ content: response.data.response, id: Date.now() }]);
      setInput(''); // 清空输入框
    } catch (error) {
      console.log("}}++++++++++++")

      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chat-box" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <Typography variant='h5' style={{
        color: theme.palette.success.main
      }}>Carbon ChatBot</Typography>
      <div className="messages" style={{maxHeight: '480px', overflowY: 'auto', flex:1}}>
        {messages.map((message) => (
          <p key={message.id}>{message.content}</p>
        ))}
      </div>
      <div className="input-section" style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        
        <TextField 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          placeholder="Type in your quesiton"
        />
        <Button onClick={sendMessage} variant="contained" style={{
          height: '54px',
          marginLeft: 8
        }}>
          <Send />
        </Button>
      </div>
    </div>
    
  );
};

export default ChatBox;
