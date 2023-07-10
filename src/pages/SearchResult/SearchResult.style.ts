import { styled } from 'styled-components';

import Leaf from '../../assets/svg/Leaf';

export const Wrapper = styled.div`
  font-family: Inter;
  margin-top: ${({ theme }) => theme.spacing.km8};
`;

export const TitleFilter = styled.p`
  color: ${({ theme }) => theme.colors.text.neutral.strong};
  font-size: ${({ theme }) => theme.font.size.m5};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const ResultTitle = styled.p`
  color: ${({ theme }) => theme.colors.text.neutral.strong};
  font-size: ${({ theme }) => theme.font.size.m4};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.km8};
`;

export const Book = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: ${({ theme }) => theme.spacing.km5};
  row-gap: ${({ theme }) => theme.spacing.km10};

  @media only screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 575px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Search = styled.div`
  padding: ${({ theme }) => theme.padding.km6}
    ${({ theme }) => theme.padding.km4};
  @media only screen and (min-width: 575px) {
    display: none;
  }
`;

export const NoImage = styled.div`
  width: 124px;
  height: 185px;
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
  width: 70px;
  float: right;
  padding: ${({ theme }) => theme.padding.km2};
`;

export const BookImage = styled.div`
  & img {
    width: 124px;
    height: 185px;
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

export const UnavailableBook = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #4f392f;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
`;

export const BookTitle = styled.p`
  color: ${({ theme }) => theme.colors.text.neutral.strong};
  font-size: ${({ theme }) => theme.font.size.m2};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const BookAuthor = styled.p`
  color: ${({ theme }) => theme.colors.text.neutral.week};
  font-size: ${({ theme }) => theme.font.size.m1};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;
