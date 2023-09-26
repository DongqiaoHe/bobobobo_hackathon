package com.chatgpt.service;

import com.chatgpt.ChatGPTExample;
import org.springframework.stereotype.Service;

@Service
public class GPTService {
    public String chat(String question) {
        ChatGPTExample chatGPTExample = new ChatGPTExample();
        chatGPTExample.setMessage(question);
        try {
            chatGPTExample.sendRequest();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "Hello, how are you?";
    }
}
