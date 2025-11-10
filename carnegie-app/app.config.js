

export default {
  expo: {
    name: "carnegie-app",
    slug: "carnegie-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/app logo.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/frame.png",
      resizeMode: "contain",
      backgroundColor: "#00693C"
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