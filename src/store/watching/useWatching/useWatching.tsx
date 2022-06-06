import { useContext } from "react";

import { WatchingContext } from "../watchingProvider/watchingProvider";

const useWatching = () => {
  const context = useContext(WatchingContext);

  if (!context) {
    throw new Error(
      "useWatching() deve estar dentro de um <WatchingProvider />"
    );
  }

  return context;
};

export default useWatching;
