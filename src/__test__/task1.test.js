import { createDomElement } from '../main'

describe('createDomElement', () => {
  let container

  beforeEach(() => {
    // Створення та додавання контейнера до body перед кожним тестом
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    // Очищення body після кожного тесту
    document.body.innerHTML = ''
  })

  test('creates and appends a new element to the specified container with the given tag and text content', () => {
    const tagName = 'p'
    const textContent = 'Test paragraph content'
    const element = createDomElement(tagName, textContent, container)

    // Перевірка, що контейнер тепер містить один дочірній елемент
    expect(container.childElementCount).toBe(1)

    // Перевірка, що створений елемент має правильний тег і текстовий вміст
    expect(element.tagName).toBe('P') // Tag names are returned in uppercase
    expect(element.textContent).toBe(textContent)

    // Перевірка, що елемент дійсно додано до заданого контейнера
    expect(container.contains(element)).toBe(true)
  })
})
