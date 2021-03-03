module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  collectCoverageFrom: [
    '<rootDir>/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/**/*',
    '!<rootDir>/.next/**/*',
    '!<rootDir>/constants/**/*',
    '!<rootDir>/coverage/**/*',
    '!<rootDir>/types/**/*',
    '!<rootDir>/*.config.js',
    '!<rootDir>/*.d.ts',
    '!<rootDir>/pages/api/**/*',
    '!<rootDir>/.scannerwork/**/*'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  coverageReporters: ['text'],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.ts']
};
