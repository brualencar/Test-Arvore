import { styled } from 'styled-components';

export const Shelf = styled.div`
  padding-top: 50px;

  @media only screen and (max-width: 575px) {
    padding-top: ${({ theme }) => theme.padding.km3};
  }
`;

export const Search = styled.div`
  padding: ${({ theme }) => theme.padding.km6}
    ${({ theme }) => theme.padding.km4};
  @media only screen and (min-width: 575px) {
    display: none;
  }
`;
