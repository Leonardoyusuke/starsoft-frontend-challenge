import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss|sass|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.ts',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default createJestConfig(customJestConfig);
