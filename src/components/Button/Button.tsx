import React from 'react';

import * as Styled from './Button.style';
import { ButtonProps } from './Button.types';

function Button({
  color,
  text,
  variant,
  isUppercase = false,
  onClick,
}: ButtonProps) {
  return (
    <Styled.Button
      type='button'
      onClick={onClick}
      color={color}
      $variantColor={variant}
      $isUppercase={isUppercase}>
      {text}
    </Styled.Button>
  );
}

export default Button;
