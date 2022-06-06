import { useContext } from "react";

import { ToWatchContext } from "./toWatchProvider";

const useToWatch = () => {
  const context = useContext(ToWatchContext);

  if (!context) {
    throw new Error(
      "useToWatch() deve estar dentro de um <ToWatchProvider />"
    );
  }

  return context;
};

export default useToWatch;
