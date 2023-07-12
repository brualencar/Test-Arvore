import '@testing-library/jest-dom/extend-expect';
import 'jest-canvas-mock';
import 'jest-styled-components';
import '@testing-library/jest-dom';

jest.mock(
  'appHost/Globals',
  () => () => ({
    user: {},
    history: {},
    dispatchToGlobal: jest.fn(),
  }),
  {
    virtual: true,
  }
);

window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));
