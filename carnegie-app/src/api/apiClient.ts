import axios from "axios";
import { ENV } from "../config/env";

const apiClient = axios.create({
  baseURL: ENV.API_BASE_URL,
});

export default apiClient;

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status >= 400 && status < 500) {
        const errorMessage = error.response.data?.message || "Client Error";
        return Promise.reject(new Error(errorMessage));
      }
      if (status >= 500) {
        const errorMessage = error.response.data?.message || "Server Error";
        return Promise.reject(new Error(errorMessage));
      }
    }
  }
);
