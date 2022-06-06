import React from "react";
import socketIOClient from "socket.io-client";
import { WatchingAnime } from "../store/watching/watching.types";

const socketClient = socketIOClient("http://localhost:3333");

// on: listen to back socket emitions
// emit: emit to the sever so it can listen

const socket = {
  onSendBack: (setData: React.Dispatch<any>) => {
    socketClient.on("editEpCounter", (data) => {
      setData((previous: any) => [...previous, data]);
    });
  },

  emitEditEp: (
    codigo: number,
    new_ep: number,
    setData: React.Dispatch<React.SetStateAction<WatchingAnime[]>>
  ) => {
    socketClient.emit("editEpCounter", { codigo, new_ep });
    console.log("anime modificado? ", codigo, new_ep);
    setData((previous) =>
      previous.filter((current) => {
        if (current.codigo == codigo) {
          return (current.ep_counter = new_ep);
        }
        return current;
      })
    );
  },
};

export default socket;
