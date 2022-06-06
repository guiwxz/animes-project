import React from "react";
import api from "../../services/api";
import { ToWatchAnime, ToWatchAnimeContextSchema } from "./toWatch.types";

export const ToWatchContext = React.createContext<ToWatchAnimeContextSchema>(
  {} as ToWatchAnimeContextSchema
);

const ToWatchProvider: React.FC = ({ children }) => {
  const [toWatchAnimes, setToWatchAnimes] = React.useState<ToWatchAnime[]>([] as ToWatchAnime[]);

  const fetchToWatchAnimes = async (params?: { cod_user: number }) => {
    console.log("DFFETCHCHCHCH")
    try {
      const response = await api.fetchToWatchAnimes(params);
      if (response) setToWatchAnimes(response.data);
    } catch (err) {
      console.warn(err);
    }
  };

  const postToWatchAnime = async (cod_user: number, anime: ToWatchAnime) => {
    try {
      const response = await api.postToWatchAnime({
        cod_user,
        ...anime,
      });
      console.log(response);

      fetchToWatchAnimes();
    } catch (err) {
      console.warn(err);
    }
  };

  const editToWatchAnime = async (codigo: number, anime: ToWatchAnime) => {
    try {
      const response = await api.editToWatchAnime(codigo, anime);
      console.log(response);

      //fetchToWatchAnimes();
      
      setToWatchAnimes(current => current.map(it => {
        if (it.codigo == codigo) {
          return {
            ...it,
            name: anime.name,
            description: anime.description,
          }
        }
        return it;
      }));
      
    } catch (err) {
      console.warn(err);
    }
  };

  const deleteToWatchAnime = async (codigo: number) => {
    try {
      const response = await api.deleteToWatchAnime(codigo);
      console.log(response);

      setToWatchAnimes(current => current.filter(it => it.codigo != codigo));
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <ToWatchContext.Provider
      value={{
        toWatchAnimes,
        fetchToWatchAnimes,
        postToWatchAnime,
        editToWatchAnime,
        deleteToWatchAnime,
      }}
    >
      {children}
    </ToWatchContext.Provider>
  );
};

export default ToWatchProvider;
