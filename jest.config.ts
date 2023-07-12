export default {
  roots: ['<rootDir>'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/index.*',
    '!<rootDir>/src/**/*.d.ts',
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./setupTest.ts'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/(?!(react-slick)/)'],
  coveragePathIgnorePatterns: [
    'dist/',
    'node_modules',
    'src/mocks',
    'src/App.tsx',
    'src/assets/',
  ],
};
