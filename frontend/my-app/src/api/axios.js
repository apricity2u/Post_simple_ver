import axios from "axios";
import.meta.env.VITE_BASE_URL

const instance = axios.create({
  baseURL: VITE_BASE_URL,
});

export default instance;