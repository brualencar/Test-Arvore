import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Slider from 'react-slick';

import * as Styled from './Shelf.style';
import { ShelfProps } from './Shelf.types';

function Shelf({ title, background, books, color }: ShelfProps) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Styled.Wrapper>
      <Styled.Container background={background}>
        <Grid fluid>
          <Col>
            <div>
              <Styled.Title color={color}>{title}</Styled.Title>
              <div>
                <Slider {...settings}>
                  {books.map((book) => (
                    <div>
                      {book.volumeInfo.imageLinks ? (
                        <img
                          src={book.volumeInfo.imageLinks?.thumbnail}
                          alt={book.volumeInfo.title}
                        />
                      ) : (
                        <Styled.NoImage>
                          <p>Sem capa</p>
                        </Styled.NoImage>
                      )}
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </Col>
        </Grid>
      </Styled.Container>
    </Styled.Wrapper>
  );
}

export default Shelf;
