import { styled } from 'styled-components';

export const Wrapper = styled.div``;

export const Container = styled.div`
  position: fixed;
  display: grid;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  font-family: ${({ theme }) => theme.font.family};
  height: 100px;
  border: 0.5px solid ${({ theme }) => theme.colors.border.footer};
  padding: ${({ theme }) => theme.padding.km10};
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.text.neutral.light};
  font-size: ${({ theme }) => theme.font.size.m2};
  font-style: normal;
  font-weight: 500;
`;

export const Button = styled.div`
  gap: ${({ theme }) => theme.spacing.km4};
  justify-content: center;
  display: flex;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
