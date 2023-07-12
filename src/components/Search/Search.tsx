import React, { useState } from 'react';

import * as Styled from './Search.style';
import { InputEventProps } from './Search.types';

function Search() {
  const [search, setSearch] = useState('');

  const eventOnInput = (event: React.ChangeEvent<InputEventProps>) => {
    const target = event.target as HTMLInputElement;
    setSearch(target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      window.location.assign(`/search-result?search=${search}`);
    }
  };

  return (
    <Styled.Wrapper data-testid='search'>
      <Styled.Input
        data-testid='search-input'
        type='search'
        placeholder='Search'
        onChange={eventOnInput}
        onKeyDown={handleKeyPress}
      />
    </Styled.Wrapper>
  );
}

export default Search;
