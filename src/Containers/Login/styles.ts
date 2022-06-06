import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(120deg, #9e9e9e, #414141 60%);
`;

export const LoginContainer = styled.div`
  width: 23em; //calc(40vw - 120px);
  height: calc(20vh + 23em); //calc(83vh - 70px);
  //background: transparent padding-box,
  //linear-gradient(to right, blue, red) border-box;

  border: 1px solid ${colorPalette.primary[300]};
  border-radius: 15px;

  box-shadow: 0 0 1em ${colorPalette.primary[800]};
  //inset 0 0 1em ${colorPalette.primary[900]};

  background-color: ${colorPalette.primary[800]};

  padding: 30px;

  color: ${colorPalette.primary[400]};
  font-weight: bold;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${colorPalette.primary[300]};
  //background-image: linear-gradient(to right, #9e9e9e, #626262);
  width: 100%;
  margin: 30px 0;
`;
