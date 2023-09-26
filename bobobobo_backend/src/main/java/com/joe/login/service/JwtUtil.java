package com.joe.login.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class JwtUtil {

    private static final String SECRET_KEY = "Bobobo"; // 这应该是一个复杂的密钥，并从配置或环境变量中获取

    public static String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)  // 设置token的主体（通常是用户的标识）
                .setIssuedAt(new Date())  // 设置token的签发时间
                .setExpiration(new Date(System.currentTimeMillis() + 3 * 86400000))  // 设置token的过期时间，两天
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)  // 使用HS256算法和你的密钥签名token
                .compact();  // 构建token
    }

    public static String getUsernameFromToken(String token) {
        try {
            // 使用Jwts.parser()方法来解析传递的token
            Claims claims = Jwts.parser()
                    .setSigningKey(SECRET_KEY)
                    .parseClaimsJws(token)
                    .getBody();

            // 从claims中获取主题(username)
            return claims.getSubject();
        } catch (Exception e) {
            // 如果解析失败，可能是因为token无效或已过期
            // 根据需要处理异常
            return null;
        }
    }
}
