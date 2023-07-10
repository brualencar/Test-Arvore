type Variant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  text?: string;
  variant: Variant;
  isUppercase?: boolean;
  onClick?: () => void;
}

export interface StyledButtonProps {
  $variantColor: Variant;
  $isUppercase: boolean;
}
