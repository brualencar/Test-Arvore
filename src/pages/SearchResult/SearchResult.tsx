import React, { useCallback, useEffect, useState } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { useSearchParams } from 'react-router-dom';

import { useRequest } from 'ahooks';
import { OnFilterChangeParams } from 'components/Filter/Filter';

import { Filter } from '../../components/Filter';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { GetVolume } from '../../services/GetVolumes/GetVolumes';
import { VolumeItem } from '../../services/GetVolumes/GetVolumes.types';
import * as Styled from './SearchResult.style';

function SearchResult() {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState<VolumeItem[]>([]);
  const [allBooks, setAllBooks] = useState<VolumeItem[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [searchParamsFn, _] = useSearchParams();

  const {
    data,
    loading,
    run: runSearch,
  } = useRequest(
    (query, index) => GetVolume(query, { maxResults: 40, startIndex: index }),
    {
      manual: true,
      onSuccess: ({ data: { items = [] } = {} }) => {
        setBooks(items);
        setAllBooks(items);
      },
    }
  );

  // scrooll fn -> setStartIndex

  useEffect(() => {
    const searchParams = searchParamsFn.get('search') || '';
    setSearch(searchParams);
  }, [searchParamsFn]);

  useEffect(() => {
    if (search === '') return;
    runSearch(search, startIndex);
  }, [search, startIndex]);

  const filters = [
    {
      title: 'Preço',
      items: [
        {
          text: 'de R$0 até R$30',
          value: '30',
          complexValue: {
            from: 0,
            to: 30,
          },
        },
        {
          text: 'de R$31 até R$50',
          value: '50',
          complexValue: {
            from: 31,
            to: 50,
          },
        },
        {
          text: 'de R$51 até R$100',
          value: '100',
          complexValue: {
            from: 51,
            to: 100,
          },
        },
        {
          text: 'Mais de R$100',
          value: '',
          complexValue: {
            from: 101,
          },
        },
      ],
      id: 'price',
    },
    {
      title: 'Disponibilidade para venda',
      items: [
        {
          text: 'Disponível',
          value: 'FOR_SALE',
        },
        {
          text: 'Indisponível',
          value: 'NOT_FOR_SALE',
        },
      ],
      id: 'available_items',
    },
    {
      title: 'Formatos disponíveis',
      items: [
        {
          text: 'e-pub',
          value: 'epub',
        },
        {
          text: 'PDF',
          value: 'pdf',
        },
      ],
      id: 'available_formats',
    },
  ];
  const onFilterChange = useCallback(
    (currentFilters: OnFilterChangeParams) => {
      let filteredBooks = allBooks;
      if (currentFilters.price) {
        const { from = 0, to } = currentFilters.price.complexValue || {};
        filteredBooks = filteredBooks.filter((book) => {
          const price = book.saleInfo?.retailPrice?.amount || 0;
          if (to === undefined) return price >= from;
          return price >= from && price <= (to || price);
        });
      }

      if (currentFilters.available_items) {
        filteredBooks = filteredBooks.filter((book) => {
          const saleability = book.saleInfo?.saleability;
          const isForSale =
            saleability === currentFilters.available_items.value;

          return isForSale;
        });
      }

      if (currentFilters.available_formats) {
        filteredBooks = filteredBooks.filter((book) => {
          const isEpub = book.accessInfo.epub.isAvailable;
          const isPdf = book.accessInfo.pdf.isAvailable;
          const isPdfFilter = currentFilters.available_formats.value === 'pdf';

          const isAvailable = isPdfFilter ? isPdf : isEpub;

          return isAvailable;
        });
      }
      setBooks(filteredBooks);
    },
    [books, runSearch, setBooks]
  );

  return (
    <>
      <Header />

      <Styled.Search>
        <Search />
      </Styled.Search>

      <Styled.Wrapper>
        <Grid>
          <Row>
            <Col lg={3}>
              <Filter
                mainTitle='Filtrar'
                filters={filters}
                onFilterChange={onFilterChange}
              />
            </Col>
            <Col lg={9}>
              <Styled.ResultTitle>
                Resultados para ”{search}”:
              </Styled.ResultTitle>
              {!loading && (
                <Styled.Book>
                  {books.map((book) => (
                    <Col
                      xs
                      key={book.id}>
                      {book.volumeInfo.imageLinks ? (
                        <>
                          <Styled.BookImage>
                            <img
                              src={book.volumeInfo.imageLinks?.thumbnail}
                              alt={book.volumeInfo.title}
                            />
                          </Styled.BookImage>
                          <Styled.BookTitle>
                            {book.volumeInfo.title}
                          </Styled.BookTitle>
                          <Styled.BookAuthor>
                            {book.volumeInfo.authors?.[0]}
                          </Styled.BookAuthor>
                        </>
                      ) : (
                        <>
                          <Styled.NoImage>
                            <Styled.LeafIcon />
                            <p>Sem capa</p>
                          </Styled.NoImage>
                          <Styled.BookTitle>
                            {book.volumeInfo.title}
                          </Styled.BookTitle>
                          <Styled.BookAuthor>
                            {book.volumeInfo.authors?.[0]}
                          </Styled.BookAuthor>
                        </>
                      )}
                    </Col>
                  ))}
                </Styled.Book>
              )}
            </Col>
          </Row>
        </Grid>
      </Styled.Wrapper>

      <Footer />
    </>
  );
}

export default SearchResult;
