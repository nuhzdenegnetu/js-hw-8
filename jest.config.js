const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom', // або 'jsdom' для веб-проектів
  testMatch: ['**/*.test.js'], // патерн для знаходження тестових файлів
  setupFilesAfterEnv: ['./jest.setup.js'] // додано шлях до вашого файлу налаштувань
}

module.exports = config
