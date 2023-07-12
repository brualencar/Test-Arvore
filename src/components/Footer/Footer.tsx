import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

import { Button } from '../Button';
import * as Styled from './Footer.style';

function Footer() {
  return (
    <Styled.Wrapper data-testid='footer'>
      <Styled.Container>
        <Grid fluid>
          <Row
            middle='xs'
            center='xs'
            between='xs'>
            <Col
              xl={6}
              lg={6}
              md={12}
              sm={12}
              xs={12}>
              <Styled.Text>
                Copyright © 2023 Árvore. Todos os direitos reservados.
              </Styled.Text>
            </Col>

            <Col
              xl={6}
              lg={6}
              md={2}
              sm={3}
              xs={4}>
              <Styled.Button>
                <Button
                  text='Política de privacidade'
                  variant='primary'
                />
                <Button
                  text='Ajuda'
                  variant='primary'
                />
              </Styled.Button>
            </Col>
          </Row>
        </Grid>
      </Styled.Container>
    </Styled.Wrapper>
  );
}

export default Footer;
