import { styled, css } from 'styled-components';

import { StyledButtonProps } from './Button.types';

const COLOR = {
  primary: css`
    color: ${({ theme }) => theme.colors.text.neutral.light};
    background: ${({ theme }) => theme.colors.background.neutral.white};
    border: 1px solid ${({ theme }) => theme.colors.text.neutral.light};
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.text.neutral.white};
    background: ${({ theme }) => theme.colors.background.neutral.strong};
    border: 1px solid rgba(64, 106, 118, 0.2);
  `,
  tertiary: css``,
};

export const Button = styled.button<StyledButtonProps>`
  height: 40px;
  border-radius: 10px;
  padding: ${({ theme }) => theme.padding.km3}
    ${({ theme }) => theme.padding.km4};
  ${({ variantColor }) =>
    css`
      ${COLOR[variantColor]}
    `};

  ${({ isUppercase }) =>
    isUppercase &&
    css`
      text-transform: uppercase;
    `}
`;
