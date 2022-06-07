import React from "react";
import { StyledButton } from "./index.style";

interface ButtonProps {
  onClick: (payload: any) => void;
  secondary?: boolean;
  color?: string;
  testid: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, color, secondary, testid, children }) => {
  console.log(testid);
  return (
    <StyledButton onClick={onClick} secondary={secondary ?? false} color={color} id={testid}>
      {children}
    </StyledButton>
  );
};

export default Button;
