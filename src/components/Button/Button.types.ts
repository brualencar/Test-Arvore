import { ReactElement } from 'react';

type Variant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  text?: string;
  children?: ReactElement;
  variant: Variant;
  isUppercase: boolean;
}

export interface StyledButtonProps {
  variantColor: Variant;
  isUppercase: boolean;
}
