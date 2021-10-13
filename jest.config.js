module.exports = {
  setupFiles: ["dotenv/config"],
  setupFilesAfterEnv: ["jalexa/dist/matchers"],
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
