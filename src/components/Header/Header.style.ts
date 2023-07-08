import { styled } from 'styled-components';

import Avatar from '../../assets/svg/Avatar';
import IconRight from '../../assets/svg/IconRight';
import Notification from '../../assets/svg/Notiification';

export const Wrapper = styled.div``;

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.family};
  height: 70px;
  padding: ${({ theme }) => theme.padding.km2}
    ${({ theme }) => theme.padding.km4} ${({ theme }) => theme.padding.km2}
    ${({ theme }) => theme.padding.km6};
  box-shadow: 0px 4px 5px 0px rgba(5, 59, 75, 0.06);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Search = styled.div`
  @media only screen and (max-width: 575px) {
    display: none;
  }
`;

export const AvatarSvg = styled(Avatar)`
  border-radius: 50%;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: ${({ theme }) => theme.padding.km3};
`;

export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.text.neutral.default};
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.extraBold};

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const ArrowIcon = styled(IconRight)`
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const NotificationIcon = styled(Notification)`
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;
