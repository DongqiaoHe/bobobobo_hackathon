package com.joe.utils;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class LoadConfig {
    public static String getConfig(String key){
        InputStream input = LoadConfig.class.getClassLoader().getResourceAsStream("config.properties");
        Properties prop = new Properties();

        if (input == null) {
            System.out.println("Sorry, unable to find config.properties");
            return null;
        }

        // Load the properties
        try {
            prop.load(input);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        // Get property value by its name
        return prop.getProperty(key);
    }

}
