export interface ToWatchAnime {
  codigo: number;
  name: string;
  description: string;
  date?: string;
  cod_user: number;
}

export interface ToWatchAnimeContextSchema {
  toWatchAnimes: ToWatchAnime[];
  fetchToWatchAnimes: (params?: any) => Promise<void>;
  postToWatchAnime: (cod_user: number, anime: ToWatchAnime) => Promise<void>;
  editToWatchAnime: (codigo: number, anime: ToWatchAnime) => Promise<void>;
  deleteToWatchAnime: (codigo: number) => Promise<void>;
}
