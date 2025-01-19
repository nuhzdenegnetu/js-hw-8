import { setUserInfoCookie } from '../main'

describe('setUserInfoCookie', () => {
  beforeAll(() => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: ''
    })
  })

  test('sets a userInfo cookie with useful information for 10 seconds', () => {
    setUserInfoCookie('language', 'uk')

    expect(document.cookie).toContain('userInfo=language%3Duk')
  })
})
