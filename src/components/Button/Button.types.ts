type Variant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  text?: string;
  variant: Variant;
  isuppercase: boolean;
}

export interface StyledButtonProps {
  variantcolor: Variant;
  isuppercase: boolean;
}
