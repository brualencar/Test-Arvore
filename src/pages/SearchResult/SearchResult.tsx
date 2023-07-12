import React, {
  useEffect,
  useState,
  useReducer,
  useRef,
  useCallback,
} from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { useSearchParams } from 'react-router-dom';

import { useRequest } from 'ahooks';

import { Filter } from '../../components/Filter';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { GetVolume } from '../../services/GetVolumes/GetVolumes';
import { VolumeItem } from '../../services/GetVolumes/GetVolumes.types';
import * as Styled from './SearchResult.style';

export interface RangeValue {
  min: number;
  max: number;
}
export interface ItemProps {
  id: number;
  label: string;
  rangeValue: RangeValue;
  checked: boolean;
}

export interface AvailableItemsProps {
  id: number;
  label: string;
  value: string;
  checked: boolean;
}

export interface AvailableFoormatsProps {
  id: number;
  label: string;
  value: string;
  checked: boolean;
}
export interface Price {
  title: string;
  items: ItemProps[];
}

export interface AvailableItems {
  title: string;
  items: AvailableItemsProps[];
}

export interface AvailableFormats {
  title: string;
  items: AvailableFoormatsProps[];
}
export interface Root {
  price: Price;
  availableItems: AvailableItems;
  availableFormats: AvailableFormats;
}

function SearchResult() {
  const refBooks = useRef(null);
  const [, updateState] = React.useState<object>();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState<VolumeItem[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [searchParamsFn, _] = useSearchParams();
  const [filteredBooks, setFilteredBooks] = useState<VolumeItem[]>([]);

  const { loading, run: runSearch } = useRequest(
    (query, index) => GetVolume(query, { maxResults: 40, startIndex: index }),
    {
      manual: true,
      onSuccess: ({ data: { items = [] } = {} }) => {
        setBooks(items);
      },
    }
  );
  const { loading: isLoadingMore, run: runLoadMoreSearch } = useRequest(
    (query, index) => GetVolume(query, { maxResults: 40, startIndex: index }),
    {
      manual: true,
      onSuccess: ({ data: { items = [] } = {} }) => {
        setBooks([...books, ...items]);
      },
    }
  );

  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const index = startIndex === 0 ? 41 : startIndex + 40;
          setStartIndex(index);
          runLoadMoreSearch(searchParamsFn.get('search'), index);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, setStartIndex, runLoadMoreSearch, searchParamsFn]);

  const reducer = (state: any, action: any) => {
    const { itemIndex, filterType }: { itemIndex: number; filterType: string } =
      action;

    switch (action.type) {
      case 'TOGGLE_CHECKBOX':
        state[filterType].items = (state[filterType].items as VolumeItem[]).map(
          (item: any, i: number) => {
            if (i === itemIndex) {
              return {
                ...item,
                checked: !item.checked,
              };
            }
            return item;
          }
        );

        forceUpdate();
        return state;
      case 'UNCHECK_ALL': {
        const test = Object.entries(state).reduce(
          (acc: any, [stateKey, stateValue]: [string, any]) => ({
            ...acc,
            [stateKey]: {
              ...stateValue,
              items: stateValue.items.map((item: any) => ({
                ...item,
                checked: false,
              })),
            },
          }),
          {}
        );
        return test;
      }
      default:
        return state;
    }
  };

  const initialState: Root = {
    price: {
      title: 'Preço',
      items: [
        {
          id: 1,
          label: 'de R$0 até R$30',
          checked: false,
          rangeValue: {
            min: 0,
            max: 30,
          },
        },
        {
          id: 2,
          label: 'de R$31 até R$50',
          checked: false,
          rangeValue: {
            min: 31,
            max: 50,
          },
        },
        {
          id: 3,
          label: 'de R$51 até R$100',
          checked: false,
          rangeValue: {
            min: 51,
            max: 100,
          },
        },
        {
          id: 4,
          label: 'Mais de R$100',
          checked: false,
          rangeValue: {
            min: 101,
            max: Infinity,
          },
        },
      ],
    },
    availableItems: {
      title: 'Disponibilidade para venda',
      items: [
        {
          id: 1,
          checked: false,
          label: 'Disponível',
          value: 'FOR_SALE',
        },
        {
          id: 2,
          checked: false,
          label: 'Indisponível',
          value: 'NOT_FOR_SALE',
        },
      ],
    },
    availableFormats: {
      title: 'Formatos disponíveis',
      items: [
        {
          id: 1,
          checked: false,
          label: 'e-pub',
          value: 'epub',
        },
        {
          id: 2,
          checked: false,
          label: 'PDF',
          value: 'pdf',
        },
      ],
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hasSelectedFilters, setHasSelectedFilters] = useState(false);

  const filterPrice = useCallback((book: any, filtersSelected: any[]) => {
    const price = book.saleInfo?.retailPrice?.amount ?? 0;
    if (filtersSelected.length === 0) return true;
    return filtersSelected.some((sel) => {
      const { min, max } = sel;
      return price >= min && price <= max;
    });
  }, []);

  const filterAvailableItems = useCallback(
    (book: any, filtersAvailableItemsSelected: any[]) => {
      const saleability = book.saleInfo?.saleability;
      if (filtersAvailableItemsSelected.length === 0) return true;
      return filtersAvailableItemsSelected.some(
        (value) => saleability === value
      );
    },
    []
  );

  const filterAvailableFormats = useCallback(
    (book: any, filtersAvailableFormatsSelected: any[]) => {
      const { accessInfo } = book;
      if (filtersAvailableFormatsSelected.length === 0) return true;
      return filtersAvailableFormatsSelected.some(
        (value) => accessInfo[value]?.isAvailable
      );
    },
    []
  );

  const filterBook = useCallback(
    (
      list: any[],
      filtersSelected: any[],
      filtersAvailableItemsSelected: any[],
      filtersAvailableFormatsSelected: any[]
    ): any[] => {
      const filteredByPrice =
        filtersSelected.length > 0
          ? list.filter((book) => filterPrice(book, filtersSelected))
          : list;
      const filteredByAvailableItem =
        filtersAvailableItemsSelected.length > 0
          ? filteredByPrice.filter((book) =>
              filterAvailableItems(book, filtersAvailableItemsSelected)
            )
          : filteredByPrice;
      const filteredByAvailableFormat =
        filtersAvailableFormatsSelected.length > 0
          ? filteredByAvailableItem.filter((book) =>
              filterAvailableFormats(book, filtersAvailableFormatsSelected)
            )
          : filteredByAvailableItem;
      return filteredByAvailableFormat || [];
    },
    [filterPrice, filterAvailableItems, filterAvailableFormats]
  );

  const resetFilters = useCallback(() => {
    setHasSelectedFilters(false);
    dispatch({ type: 'UNCHECK_ALL' });
  }, [setHasSelectedFilters]);

  useEffect(() => {
    const searchParams = searchParamsFn.get('search') || '';
    setSearch(searchParams);
  }, [searchParamsFn]);

  useEffect(() => {
    if (search === '') return;
    runSearch(search, 0);
  }, [search]);

  useEffect(() => {
    const filtersSelected: { min: number; max: number }[] = state.price?.items
      ?.filter((item: any) => item.checked)
      ?.map((item: any) => item.rangeValue);
    const filtersAvailableItemsSelected: string[] = state.availableItems?.items
      ?.filter((item: any) => item.checked)
      ?.map((item: any) => item.value);
    const filtersAvailableFormatsSelected: string[] =
      state.availableFormats?.items
        ?.filter((item: any) => item.checked)
        ?.map((item: any) => item.value);

    setHasSelectedFilters(
      filtersSelected.length > 0 ||
        filtersAvailableItemsSelected.length > 0 ||
        filtersAvailableFormatsSelected.length > 0
    );

    setFilteredBooks(
      filterBook(
        books,
        filtersSelected,
        filtersAvailableItemsSelected,
        filtersAvailableFormatsSelected
      )
    );
  }, [
    setFilteredBooks,
    filterBook,
    books,
    state.price?.items,
    state.availableItems?.items,
    state.availableFormats?.items,
  ]);

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
                resetFilters={resetFilters}
                hasSelectedFilters={hasSelectedFilters}
                mainTitle='Filtrar'
                filters={state}
                dispatch={dispatch}
              />
            </Col>
            <Col lg={9}>
              <Styled.ResultTitle>
                Resultados para ”{search}”:
              </Styled.ResultTitle>
              {!loading && (
                <Styled.Book ref={refBooks}>
                  {filteredBooks.map((book) => (
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
                            <Styled.UnavailableBook />
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
      <div ref={observerTarget} />
      <Footer />
    </>
  );
}

export default SearchResult;
