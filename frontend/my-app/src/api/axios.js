import axios from "axios";
import.meta.env.VITE_APP_API_URL

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export default api;