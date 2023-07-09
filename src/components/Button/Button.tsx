import React from 'react';

import * as Styled from './Button.style';
import { ButtonProps } from './Button.types';

function Button({ color, text, variant, isUppercase = false }: ButtonProps) {
  return (
    <Styled.Button
      type='button'
      color={color}
      $variantColor={variant}
      $isUppercase={isUppercase}>
      {text}
    </Styled.Button>
  );
}

export default Button;
