import { styled } from 'styled-components';

export const Wrapper = styled.div``;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.background.neutral.default};
  background: ${({ theme }) => theme.colors.background.neutral.light};

  &:focus {
    outline: none;
    padding-left: ${({ theme }) => theme.spacing.km4};
  }

  &:focus::placeholder {
    color: transparent;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.neutral.default};
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    padding-left: ${({ theme }) => theme.spacing.km4};
  }
`;
