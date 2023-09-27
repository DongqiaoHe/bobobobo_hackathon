package com.joe.chatgpt.controller;

import com.joe.chatgpt.service.GPTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/gpt")
public class GPTController {

    @Autowired
    private GPTService gptService;

    @PostMapping("/ask")
    public ResponseEntity<?> ask(@RequestBody String question) {
        Map<String, Object> responseMap = new HashMap<>();
        String response = gptService.chat(question);
        responseMap.put("response", response);
        if (response == null || response.isEmpty()) {
            return ResponseEntity.badRequest().body(responseMap);
        } else {
            return ResponseEntity.ok(responseMap);
        }
    }

}
