import React from 'react';

import * as Styled from './Button.style';
import { ButtonProps } from './Button.types';

function Button({ color, text, variant, isuppercase }: ButtonProps) {
  return (
    <Styled.Button
      type='button'
      color={color}
      variantcolor={variant}
      isuppercase={isuppercase}>
      {text}
    </Styled.Button>
  );
}

export default Button;
