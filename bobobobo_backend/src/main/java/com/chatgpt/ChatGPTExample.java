package com.chatgpt;

import com.google.gson.Gson;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.logging.log4j.message.Message;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class ChatGPTExample {
    private final String host = "https://api.openai.com/v1/chat/completions";
    private String messageText = "hello, how are you?";
    private float temperature = 0.7f;
    private int maxTokens = 100;
    private String model = "gpt-3.5-turbo";
    private String apiKey = "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";

    private String prompt = "You are chatting with an AI assistant. The assistant is helpful, creative, clever, and very friendly.";

    public void setMessage(String message) {
        this.messageText = message;
    }

    private Map<String, Object> setUserMessages(String message) {
        Map<String, Object> messageMap = new HashMap<>();
        messageMap.put("role", "user");
        messageMap.put("content", message);
        return messageMap;
    }

    private Map<String, Object> setSystemPrompt(String message) {
        Map<String, Object> messageMap = new HashMap<>();
        messageMap.put("role", "system");
        messageMap.put("content", message);
        return messageMap;
    }

    public String sendRequest() throws IOException {
        CloseableHttpClient httpclient = HttpClients.createDefault();

        try {
            HttpPost httpPost = new HttpPost(host);

            String jsonString = formRequestStringBody();

            StringEntity requestEntity = new StringEntity(
                    jsonString,
                    "UTF-8"
            );
            requestEntity.setContentType("application/json");
            httpPost.setEntity(requestEntity);

            httpPost.addHeader("Authorization", "Bearer "+apiKey);

            CloseableHttpResponse response = httpclient.execute(httpPost);

            try {
                HttpEntity entity = response.getEntity();
                if (entity != null) {
                    String result = EntityUtils.toString(entity);
                    System.out.println(result);
                    return result;
                }
            } finally {
                response.close();
            }
        } finally {
            httpclient.close();
        }
        return null;
    }

    private String formRequestStringBody() {
        List<Map<String, Object>> messages = new ArrayList<>();
        messages.add(setSystemPrompt(prompt));
        messages.add(setUserMessages(messageText));

        Map<String, Object> payload = new HashMap<>();
        payload.put("messages", messages);
        payload.put("temperature", temperature);
        payload.put("max_tokens", maxTokens);
        payload.put("model", model);


        Gson gson = new Gson();
        String jsonString = gson.toJson(payload);
        return jsonString;
    }


}
