import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../pages/Home';
import { SearchResult } from '../pages/SearchResult';

export const routes = createBrowserRouter([
  { path: '/', element: <Home /> },

  { path: '/search-result', element: <SearchResult /> },
]);
