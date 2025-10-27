import { Platform } from "react-native";

export default {
  expo: {
    name: "carnegie-app",
    slug: "carnegie-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.anonymous.carnegieapp"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      package: "com.anonymous.carnegieapp"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      iosAPIBaseUrl:  process.env.API_BASE_URL || "",
      androidAPIBaseUrl: process.env.ANDROID_API_BASE_URL || ""
    }
  }
};