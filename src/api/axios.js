import axios from "axios";
import { CacheKeys } from "../constants";
import { getLocalStorage } from "../utils";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? `${origin}`
      : "http://localhost:5000/ibidwebapplication-0001/europe-west2/api",
  responseType: "json",
});
api.interceptors.request.use((request) => {
  const token = getLocalStorage(CacheKeys.Profile.Default)?.token;
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

export default api;
