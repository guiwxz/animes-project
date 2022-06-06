import React from "react";
import api from "../../../services/api";
import socket from "../../../services/socket";
import { WatchingAnime, WatchingAnimeContextSchema } from "../watching.types";

export const WatchingContext = React.createContext<WatchingAnimeContextSchema>(
  {} as WatchingAnimeContextSchema
);

const WatchingProvider: React.FC = ({ children }) => {
  const [watchingAnimes, setWatchingAnimes] = React.useState<WatchingAnime[]>([] as WatchingAnime[]);

  const fetchWatchingAnimes = async (params?: { cod_user: number }) => {
    console.log("DFFETCHCHCHCH")
    try {
      const response = await api.fetchWatchingAnimes(params);
      if (response) setWatchingAnimes(response.data);
    } catch (err) {
      console.warn(err);
    }
  };

  const postWatchingAnime = async (cod_user: number, anime: WatchingAnime) => {
    try {
      const response = await api.postWatchingAnime({
        cod_user,
        ...anime,
      });
      console.log(response);

      fetchWatchingAnimes();
    } catch (err) {
      console.warn(err);
    }
  };

  const editWatchingAnime = async (codigo: number, anime: WatchingAnime) => {
    try {
      const response = await api.editWatchingAnime(codigo, anime);
      console.log(response);

      //fetchWatchingAnimes();
      
      setWatchingAnimes(current => current.map(it => {
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

  const deleteWatchingAnime = async (codigo: number) => {
    try {
      const response = await api.deleteWatchingAnime(codigo);
      console.log(response);

      setWatchingAnimes(current => current.filter(it => it.codigo != codigo));
    } catch (err) {
      console.warn(err);
    }
  };

  const changeWatchingEp = (codigo: number, newEp: number) => {
    try {
      if (newEp < 1) {
        console.warn('A contagem de ep não pode ser menor que 1');
        return;
      }
      socket.emitEditEp(codigo, newEp, setWatchingAnimes);

    } catch(err) {
      console.warn(err);
    }
  }

  return (
    <WatchingContext.Provider
      value={{
        watchingAnimes,
        fetchWatchingAnimes,
        postWatchingAnime,
        editWatchingAnime,
        deleteWatchingAnime,
        changeWatchingEp
      }}
    >
      {children}
    </WatchingContext.Provider>
  );
};

export default WatchingProvider;
