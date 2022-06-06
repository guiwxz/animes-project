import { AxiosResponse } from "axios";
import { WatchingAnime } from "../store/watching/watching.types";
import { ToWatchAnime } from "../store/toWatch/toWatch.types";
import { SignInPayload, SignInRequestData } from "../store/auth/auth.types";
import { getAPIClient } from "./apiWithContext";

export const baseApi = getAPIClient();

const parseResponse = (response: AxiosResponse) => {
  const res = response;
  if (response.status === 200) {
    return res.data;
  }
  throw res;
};

const api = {
  postSignIn: async ({
    password,
    username,
  }: SignInPayload): Promise<SignInRequestData> => {
    return await baseApi
      .post(
        `/signin`,
        { password, username },
        {
          method: "POST",
        }
      )
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },

  fetchWatchingAnimes: async (params: { cod_user: number }) => {
    return await baseApi
      .get(`/animeswatching?cod_user=1`, {
        method: "GET",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  postWatchingAnime: async (anime: WatchingAnime) => {
    return await baseApi
      .post("/animeswatching", anime, {
        method: "POST",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  editWatchingAnime: async (codigo: number, anime: WatchingAnime) => {
    return await baseApi
      .put(`/animeswatching/${codigo}`, anime, {
        method: "PUT",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  deleteWatchingAnime: async (codigo: number) => {
    return await baseApi
      .delete(`/animeswatching/${codigo}`, {
        method: "DELETE",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },

  fetchToWatchAnimes: async (params: { cod_user: number }) => {
    return await baseApi
      .get(`/animestowatch?cod_user=1`, {
        method: "GET",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  postToWatchAnime: async (anime: ToWatchAnime) => {
    return await baseApi
      .post("/animestowatch", anime, {
        method: "POST",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  editToWatchAnime: async (codigo: number, anime: ToWatchAnime) => {
    return await baseApi
      .put(`/animestowatch/${codigo}`, anime, {
        method: "PUT",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
  deleteToWatchAnime: async (codigo: number) => {
    return await baseApi
      .delete(`/animestowatch/${codigo}`, {
        method: "DELETE",
      })
      .then(parseResponse)
      .catch((err) => console.warn(err));
  },
};

export default api;
