// api.js
// This file handles ALL API requests using Axios
// Automatically attaches token to every request

import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
});

// -----------------------------
// REQUEST INTERCEPTOR
// Adds token to every request automatically
// -----------------------------
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
