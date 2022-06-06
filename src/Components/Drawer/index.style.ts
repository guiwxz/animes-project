import styled from "styled-components";
import { Grid } from "../Grid";

import { colorPalette } from "../../config/colorPalette";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  min-width: 250px;
  height: 100vh;
  background-color: ${colorPalette.primary[800]};
  box-shadow: 5px 0px 5px ${colorPalette.primary[800]};
  border-radius: 0 10px 10px 0;

  justify-content: space-between;
`;

export const Header = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const DrawerItems = styled.div`
  width: 100%;
  color: ${colorPalette.primary[300]};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px;
  cursor: pointer;
  padding-left: 20px;
  border-bottom: 2px solid ${colorPalette.primary[500]};
  transition: 0.4s;

  &:hover {
    background-color: ${colorPalette.primary[700]};
  }
`;

export const Footer = styled.div`
  height: 100%;
  align-items: flex-end;
`;
