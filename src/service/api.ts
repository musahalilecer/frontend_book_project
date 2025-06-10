import axios from "axios"
const api = axios.create({
  baseURL: "http://localhost:8080",
});

// 🔐 Token'ı her istek öncesi header'a ekle
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ❗️Global response hatalarını yakala (opsiyonel)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      console.warn("403 Forbidden - Yetkisiz erişim.");
    }
    return Promise.reject(error);
  }
);

export default api;