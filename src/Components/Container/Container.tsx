import React from 'react';
import { ContainerStyle } from './Container.styles';

export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return <ContainerStyle {...rest}>{children}</ContainerStyle>;
};

export default Container;
