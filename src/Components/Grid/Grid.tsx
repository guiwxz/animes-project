import React from 'react';
import * as styled from './Grid.styles';

import { GridProps } from './types';

const Grid: React.FunctionComponent<GridProps> = props => {
  const {
    alignContent = 'stretch',
    alignItems = 'stretch',
    container = false,
    direction = 'row',
    item = false,
    justifyContent = 'flex-start',
    lg = false,
    md = false,
    sm = false,
    spacing = 0,
    wrap = 'wrap',
    xl = false,
    xs = false,
    zeroMinWidth = false,
    style,
    ...other
  } = props;

  const generateClasses = () => {
    let classes = '';

    const breakpoints: { [key: string]: any } = {
      xs,
      sm,
      md,
      lg,
      xl
    };

    Array.from(['xs', 'sm', 'md', 'lg', 'xl']).map(breakpoint => {
      if (breakpoints[breakpoint]) {
        classes = classes.concat(`grid-${breakpoint}-${breakpoints[breakpoint]} `);
      }
    });

    return 'line-grid ' + classes;
  };

  if (props.container) {
    return (
      <styled.Container
        {...other}
        spacing={spacing}
        className={`spacing-xs-${spacing}`}
        alignContent={alignContent}
        alignItems={alignItems}
        justifyContent={justifyContent}
        direction={direction}
        style={style}
      />
    );
  } else if (props.item) {
    return <styled.Item {...other} className={generateClasses()} style={style} />;
  }

  return <styled.Item {...other} className={generateClasses()} style={style} />;
};

export default Grid;
