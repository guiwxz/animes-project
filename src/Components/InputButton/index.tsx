import React from "react";
import { StyledSubmitButton } from "./styles";

interface SubmitButtonProps {
  label: string;
  style?: any;
}

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  return <StyledSubmitButton id="submit" type="submit" name="submit" value={props.label} {...props} />;
};

export default SubmitButton;
