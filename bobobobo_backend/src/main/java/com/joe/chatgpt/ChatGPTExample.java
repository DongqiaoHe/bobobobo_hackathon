package com.joe.chatgpt;

import com.google.gson.Gson;
import com.joe.utils.LoadConfig;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.io.IOException;
import java.util.*;


public class ChatGPTExample {
    private final String host = "https://api.openai.com/v1/chat/completions";
    private String messageText = "hello, how are you?";
    private float temperature = 0.7f;
    private int maxTokens = 3000;
    private String model = "gpt-3.5-turbo";
    // 从resource目录下的config.properties中读取配置
    private String apiKey = LoadConfig.getConfig("api_key");

    private String prompt = "You are chatting assistant to help our client. Client will talk something about their story or event" +
            "According to the content, give a further specific suggestions to reduce the carbon footprint. " +
            "Answer the question with around 250 words.";

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

        try (CloseableHttpClient httpclient = HttpClients.createDefault()) {
            HttpPost httpPost = new HttpPost(host);

            String jsonString = formRequestStringBody();

            StringEntity requestEntity = new StringEntity(
                    jsonString,
                    "UTF-8"
            );
            requestEntity.setContentType("application/json");
            httpPost.setEntity(requestEntity);

            httpPost.addHeader("Authorization", "Bearer " + apiKey);

            try (CloseableHttpResponse response = httpclient.execute(httpPost)) {
                HttpEntity entity = response.getEntity();
                if (entity != null) {
                    String result = EntityUtils.toString(entity);
                    System.out.println(result);
                    return result;
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        } catch (Exception e) {
            e.printStackTrace();
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
        return gson.toJson(payload);
    }


}
