// зараз підключаємо елементи

import {
  createElement,
  createHeader,
} from '../../script/layout'
// визиваємо ці елементи з script/layout

const page = document.querySelector('.page')

const header = createHeader()

// додаємо до сторінки хедер   після цього і зявляється на сторінці хедер
page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')
page.append(title)

//=====

const BUTTON_LIST = [
  { title: 'База знань', isActive: false },
  { title: 'Інформація', isActive: true },
]

const createHeader2 = () => {
  const header2List = createElement('div', 'header2')

  BUTTON_LIST.forEach((button) => {
    const headersButton = createElement(
      'button',
      button.isActive
        ? 'header2__button header2__button--active'
        : 'header2__button',
      button.title,
    )

    header2List.append(headersButton)
  })

  return header2List
}

const header2 = createHeader2()

page.append(header2)

//=====
const createPost = () => {
  const postList = createElement('main', 'post__list')

  const card = createElement('div', 'card')

  const img = createElement('img', 'card__image')
  img.src = '/img/card__image.png'

  const cardTitle = createElement(
    'h2',
    'card__title',
    'Що таке база знань?',
  )

  const cardDescription = createElement(
    'p',
    'card__description',
    'База знань - база даних, що містить правила виведення та інформацію про людський досвід і знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення попередніх завдань.',
  )

  const cardButton = createElement(
    'button',
    'card__button',
    'Перейти до ком`юніті у Телеграм',
  )

  card.append(img, cardTitle, cardDescription, cardButton)

  postList.append(card)

  return postList
}

const post = createPost()
page.append(post)
