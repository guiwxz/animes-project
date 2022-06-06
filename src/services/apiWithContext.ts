import axios from "axios";

import { parseCookies } from "nookies";

export const getAPIClient = (ctx?: any) => {
  const { animes_token: token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api;
};
