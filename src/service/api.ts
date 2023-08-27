import axios from "axios";

const token = localStorage.getItem("@dev-path:token");

export const instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 20000,
});

export const instanceHeaders = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 20000,
  headers: { Authorization: `Bearer ${token}` },
});
