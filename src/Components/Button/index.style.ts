import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

interface StyledButtonProps {
  secondary: boolean;
  color: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 12px 16px;
  border: none;
  background-color: ${({ secondary, color }) => {
    if (color) {
      return color;
    }
    return secondary
      ? `${colorPalette.primary[200]}`
      : `${colorPalette.primary[900]}`;
  }};
  color: ${(props) =>
    props.secondary
      ? `${colorPalette.primary[900]}`
      : `${colorPalette.primary[200]}`};
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    opacity: 70%;
  }
`;
