const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  displayName: 'root-tests',
  testMatch: ['<rootDir>/**/*.test.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/services/**/*.ts',
    '<rootDir>/src/utils/**/*.ts',
    '!<rootDir>/src/utils/module-alias.ts',
    '!<rootDir>/src/utils/logger.ts',
    '!<rootDir>/src/utils/validator.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  preset: 'ts-jest',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};