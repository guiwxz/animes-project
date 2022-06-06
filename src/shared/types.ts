import { ToWatchAnime } from "../store/toWatch/toWatch.types";
import { WatchingAnime } from "../store/watching/watching.types";

export type GeneralAnime = WatchingAnime & ToWatchAnime;
