import { CacheKeys } from "../constants";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? `${origin}`
      : "http://localhost:3000",
  responseType: "json",
});
api.interceptors.request.use((request) => {
  const token = getLocalStorage(CacheKeys.Profile.Default).token;
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

export default api;
