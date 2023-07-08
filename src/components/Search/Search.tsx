import React from 'react';

import * as Styled from './Search.style';

function Search() {
  return (
    <Styled.Wrapper datatest-id='search'>
      <Styled.Input placeholder='Search' />
    </Styled.Wrapper>
  );
}

export default Search;
