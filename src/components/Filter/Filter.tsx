import React, { useCallback, useState } from 'react';

import { Button } from '../Button';
import * as Styled from './Filter.style';

type Item = {
  text: string;
  value: string | number;
  complexValue?: { from: number; to?: number };
};

type Filter = {
  title: string;
  id: string;
  items: Item[];
};

export type OnChangeParams = {
  id: string;
  value: Item['value'];
  complexValue: Item['complexValue'];
};

export type OnFilterChangeParams = {
  [key: string]: { value: Item['value']; complexValue: Item['complexValue'] };
};

function Filter({
  mainTitle,
  filters,
  onFilterChange,
  clearFilter,
}: {
  mainTitle: string;
  filters: Filter[];
  onFilterChange: (currentFilters: OnFilterChangeParams) => void;
  clearFilter: () => void;
}) {
  const [selectedOption, setSelectedOption] = useState<string | number>();
  const [currentFilters, setCurrentFilters] = useState({});
  const onChange = useCallback(
    ({ id, value, complexValue }: OnChangeParams) => {
      const newCurrentFilters = {
        ...currentFilters,
        [id]: { value, complexValue },
      };
      setCurrentFilters(newCurrentFilters);
      onFilterChange(newCurrentFilters);
      setSelectedOption(value);
    },
    [setCurrentFilters, onFilterChange, currentFilters]
  );

  // todo usecalbback
  const handleReset = () => {
    setSelectedOption('');
    clearFilter();
  };

  return (
    <Styled.Wrapper>
      <Styled.MainTitle>{mainTitle}</Styled.MainTitle>
      {selectedOption && (
        <Button
          isUppercase
          text='Limpar Filtro'
          variant='secondary'
          onClick={handleReset}
        />
      )}
      {filters.map(({ title, items, id }) => (
        <div key={id}>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Filter>
            <ul>
              {items.map(({ text, value, complexValue }) => (
                <li key={value}>
                  <input
                    checked={selectedOption === value}
                    name={id}
                    type='radio'
                    value={value}
                    onChange={() => onChange({ id, value, complexValue })}
                  />
                  <span>{text}</span>
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
