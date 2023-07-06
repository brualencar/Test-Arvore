export default {
  roots: ['<rootDir>'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/index.*',
    '!<rootDir>/src/**/*.d.ts',
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./setupTests.ts'],
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    'dist/',
    'node_modules',
    'src/mocks',
    'src/App.tsx',
  ],
};
