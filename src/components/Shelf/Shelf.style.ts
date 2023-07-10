import { styled, css } from 'styled-components';

import Leaf from '../../assets/svg/Leaf';
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

export const BookImage = styled.div`
  & img {
    width: 198px;
    height: 296px;
    border-radius: 10px;
    box-shadow: 0px 4px 5px 0px rgba(5, 59, 75, 0.06);
  }

  @media only screen and (max-width: 575px) {
    & img {
      width: 145px;
      height: 220px;
    }
  }
`;

export const NoImage = styled.div`
  width: 198px;
  height: 296px;
  background: ${({ theme }) => theme.colors.background.brand.default};
  box-shadow: 0px 4px 5px 0px rgba(5, 59, 75, 0.06);
  position: relative;
  border-radius: 10px;

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

  @media only screen and (max-width: 575px) {
    width: 145px;
    height: 220px;
  }
`;

export const LeafIcon = styled(Leaf)`
  width: 100px;
  float: right;
  padding: ${({ theme }) => theme.padding.km6};
`;
