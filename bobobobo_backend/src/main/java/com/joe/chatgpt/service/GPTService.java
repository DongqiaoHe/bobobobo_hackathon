package com.joe.chatgpt.service;

import com.joe.chatgpt.ChatGPTExample;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.stereotype.Service;

@Service
public class GPTService {
    public String chat(String question) {
        ChatGPTExample chatGPTExample = new ChatGPTExample();
        chatGPTExample.setMessage(question);
        String content = null;
        try {
            String response = chatGPTExample.sendRequest();
            JsonObject jsonObject = JsonParser.parseString(response).getAsJsonObject();

            content = jsonObject.getAsJsonArray("choices")
                    .get(0)
                    .getAsJsonObject()
                    .getAsJsonObject("message")
                    .get("content")
                    .getAsString();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return content;
    }
}


