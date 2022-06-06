import React from "react";
import { Grid } from "../Grid";
import { Container, Header, DrawerItems, Item, Footer } from "./index.style";
import router from "next/router";

import { FaHome, FaRegPlayCircle } from "react-icons/fa";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { FiPause, FiPlay } from "react-icons/fi";

//TODO adicionar styled components no _document
const Drawer: React.FC<{ switchTheme?: (param: boolean) => void }> = ({
  switchTheme,
}) => {
  return (
    <Container>
      <div style={{ height: "87%" }}>
        <Header>
          <img src="/static/aaaa.png" width="100px" />
        </Header>
        <DrawerItems>
          <Item onClick={() => router.push("/")}>
            <FiPlay size="20px" />
            Watching
          </Item>
          <Item onClick={() => router.push("/to-watch")}>
            <FiPause size="20px" />
            To Watch
          </Item>
          <Item onClick={() => router.push("/ended")}>
            <HiOutlineColorSwatch size="20px" />
            Ended
          </Item>
        </DrawerItems>
      </div>
      {/* <Footer>Switch Theme</Footer> */}
    </Container>
  );
};

export default Drawer;
