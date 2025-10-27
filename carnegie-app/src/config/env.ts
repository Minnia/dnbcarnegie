import Constants from "expo-constants";
import { Platform } from "react-native";
export const ENV = {
  API_BASE_URL:
    Platform.OS === "android"
      ? Constants.expoConfig?.extra?.androidAPIBaseUrl || ""
      : Constants.expoConfig?.extra?.iosAPIBaseUrl || "",
};
