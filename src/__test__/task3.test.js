import { getUserInfo, saveUserInfo } from '../main'

describe('userSessionStorage', () => {
  beforeEach(() => {
    // Очистка sessionStorage перед кожним тестом
    sessionStorage.clear()
    jest.clearAllMocks()
  })

  test('saves user information to sessionStorage', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    saveUserInfo('role', 'admin')

    expect(sessionStorage.getItem('role')).toBe('admin')
    expect(consoleSpy).toHaveBeenCalledWith('Saved role: admin')
  })

  test('retrieves user information from sessionStorage', () => {
    sessionStorage.setItem('role', 'admin') // Встановлення даних безпосередньо через sessionStorage для тесту
    const consoleSpy = jest.spyOn(console, 'log')

    const retrievedRole = getUserInfo('role')

    expect(retrievedRole).toBe('admin')
    expect(consoleSpy).toHaveBeenCalledWith('Retrieved role: admin')
  })
})
