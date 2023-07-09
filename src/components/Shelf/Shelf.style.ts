import { styled, css } from 'styled-components';

import { ShelfBackgroundProps, ShelfColorProps } from './Shelf.types';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.padding.km6} 0;
`;

export const Container = styled.div<ShelfBackgroundProps>`
  width: 100%;
  font-family: ${({ theme }) => theme.font.family};
  padding: ${({ theme }) => theme.padding.km6}; + ${({ theme }) =>
  theme.padding.km6};
  ${({ $background }) =>
    $background &&
    css`
      background: ${({ theme }) => theme.colors.background.brand.light};
    `};
`;

export const Title = styled.h2<ShelfColorProps>`
  color: ${({ theme }) => theme.colors.text.neutral.strong};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.km10};

  ${({ $color }) =>
    $color &&
    css`
      color: ${({ theme }) => theme.colors.text.brand.default};
      font-size: ${({ theme }) => theme.font.size.m7};
    `}
`;

export const NoImage = styled.div`
  width: 128px;
  height: 184px;
  background: ${({ theme }) => theme.colors.background.brand.default};
  box-shadow: 0px 4px 5px 0px rgba(5, 59, 75, 0.06);
  position: relative;

  & > p {
    display: flex;
    position: absolute;
    bottom: 0;
    justify-content: center;
    align-items: center;
    right: 0;
    left: 0;
    color: ${({ theme }) => theme.colors.text.neutral.strong};
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;
