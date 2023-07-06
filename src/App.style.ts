import { styled } from 'styled-components';

export const Text = styled.p`
  font-family: ${({ theme }) => theme.font.family};
  color: ${({ theme }) => theme.colors.text.brand.default};
`;
