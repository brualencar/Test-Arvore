import React from 'react';

import { useRequest } from 'ahooks';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { Shelf } from '../../components/Shelf';
import { GetVolume } from '../../services/GetVolumes/GetVolumes';
import * as Styled from './Home.style';

function Home() {
  const {
    data: { data: { items: itemsAdventure = [] } = {} } = {},
    loading: loadingAdventure,
  } = useRequest(() => GetVolume('subject:adventure'));

  const {
    data: { data: { items: itemsAction = [] } = {} } = {},
    loading: loadingAction,
  } = useRequest(() => GetVolume('subject:action'));

  const {
    data: { data: { items: itemsHorror = [] } = {} } = {},
    loading: loadingHorror,
  } = useRequest(() => GetVolume('subject:horror'));

  const {
    data: { data: { items: itemsChild = [] } = {} } = {},
    loading: loadingChild,
  } = useRequest(() => GetVolume('subject:education'));

  const loadinBooks =
    !loadingAdventure && !loadingAction && !loadingChild && !loadingHorror;

  return (
    <>
      <Header />

      <Styled.Search>
        <Search />
      </Styled.Search>

      {loadinBooks && (
        <Styled.Shelf>
          <Shelf
            title='Aventura'
            books={itemsAdventure}
          />

          <Shelf
            title='Ação'
            books={itemsAction}
          />
          <Shelf
            color
            title='Destaques'
            background
            books={itemsHorror}
          />
          <Shelf
            title='Infantil'
            books={itemsChild}
          />
        </Styled.Shelf>
      )}
      <Footer />
    </>
  );
}

export default Home;
