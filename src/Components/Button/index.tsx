import React from "react";
import { StyledButton } from "./index.style";

interface ButtonProps {
  onClick: (payload: any) => void;
  secondary?: boolean;
  color?: string;
  testPath: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, color, secondary, testPath, children }) => {
  console.log(testPath);
  return (
    <StyledButton onClick={onClick} secondary={secondary ?? false} color={color} data-test-id='button'>
      {children}
    </StyledButton>
  );
};

export default Button;
