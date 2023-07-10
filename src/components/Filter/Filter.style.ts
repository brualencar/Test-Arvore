import { styled } from 'styled-components';

export const Wrapper = styled.div`
  font-family: Inter;
`;

export const MainTitle = styled.p`
  color: ${({ theme }) => theme.colors.text.neutral.strong};
  font-size: ${({ theme }) => theme.font.size.m5};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.text.neutral.medium};
  font-size: ${({ theme }) => theme.font.size.m4};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Filter = styled.div`
  & > ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: ${({ theme }) => theme.spacing.km8};
  }
  & > ul > li {
    margin-bottom: ${({ theme }) => theme.spacing.km3};
  }
  & > ul > li > span {
    color: ${({ theme }) => theme.colors.text.neutral.primary};
  }
`;
