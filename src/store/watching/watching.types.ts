export interface WatchingAnime {
  codigo: number;
  name: string;
  description: string;
  ep_counter: number;
  date?: string;
  cod_user: number;
}

export interface WatchingAnimeContextSchema {
  watchingAnimes: WatchingAnime[];
  fetchWatchingAnimes: (params?: any) => Promise<void>;
  postWatchingAnime: (cod_user: number, anime: WatchingAnime) => Promise<void>;
  editWatchingAnime: (codigo: number, anime: WatchingAnime) => Promise<void>;
  deleteWatchingAnime: (codigo: number) => Promise<void>;
  changeWatchingEp: (codigo: number, newEp: number) => Promise<void>;
}
