import React from 'react';

import { ItemProps, Root } from 'pages/SearchResult/SearchResult';

import { Button } from '../Button';
import * as Styled from './Filter.style';

type Item = {
  text: string;
  value: string | number;
  complexValue?: { from: number; to?: number };
};

export type OnFilterChangeParams = {
  [key: string]: { value: Item['value']; complexValue: Item['complexValue'] };
};

export interface IFilterProps {
  mainTitle: string;
  filters: Root;
  dispatch: React.Dispatch<any>;
  hasSelectedFilters: boolean;
  resetFilters: () => void;
}

function Filter({
  mainTitle,
  filters,
  dispatch,
  hasSelectedFilters,
  resetFilters,
}: IFilterProps) {
  const handleToggleCheckbox = (itemIndex: any, filterType: string) => {
    dispatch({ type: 'TOGGLE_CHECKBOX', itemIndex, filterType });
  };

  return (
    <Styled.Wrapper>
      <Styled.MainTitle>{mainTitle}</Styled.MainTitle>
      {hasSelectedFilters && (
        <Button
          isUppercase
          text='Limpar Filtro'
          variant='secondary'
          onClick={resetFilters}
        />
      )}
      {Object.entries(filters).map(([filterType, category]) => (
        <div key={filterType}>
          <Styled.Title>{category.title}</Styled.Title>
          <Styled.Filter>
            <ul>
              {category?.items?.map((item: ItemProps, index: any) => (
                <li key={item.id}>
                  <input
                    name={item.label}
                    type='checkbox'
                    checked={item.checked}
                    onChange={() => handleToggleCheckbox(index, filterType)}
                  />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </Styled.Filter>
        </div>
      ))}
    </Styled.Wrapper>
  );
}

export default Filter;
