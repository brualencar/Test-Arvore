import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

import ArvoreLogo from '../../assets/svg/ArvoreLogo';
import { Search } from '../Search';
import * as Styled from './Header.style';

function Header() {
  return (
    <Styled.Wrapper datatest-id='header'>
      <Styled.Container>
        <Grid fluid>
          <Row
            between='xs'
            style={{ alignItems: 'center' }}>
            <Col
              xl={2}
              lg={2}
              md={2}
              sm={3}
              xs={4}>
              <Styled.Logo>
                <ArvoreLogo />
              </Styled.Logo>
            </Col>
            <Col
              xl={7}
              lg={7}
              md={7}
              sm={6}
              xs={4}>
              <Styled.Search>
                <Search />
              </Styled.Search>
            </Col>
            <Col
              xl={2}
              lg={2}
              md={2}
              sm={3}
              xs={4}>
              <Styled.User>
                <Styled.NotificationIcon />
                <Styled.AvatarSvg />
                <Styled.UserName>Alessandra</Styled.UserName>
                <Styled.ArrowIcon />
              </Styled.User>
            </Col>
          </Row>
        </Grid>
      </Styled.Container>
    </Styled.Wrapper>
  );
}

export default Header;
