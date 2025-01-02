import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    locale: 'EN',
    header: 'Full-Cycle Event Agency',
    who: 'Who',
    where: 'Where',
    what: 'What',
  },
  uk: {
    locale: 'UK',
    header: 'Агенція Подій Повного Циклу',
    who: 'Хто',
    where: 'Де',
    what: 'Що',
  },
  ru: {
    locale: 'RU',
    header: 'Агентство мероприятий полного цикла',
    who: 'Что',
    where: 'Где',
    what: 'Кто',
  },
}

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'en', // Set locale from localStorage
  fallbackLocale: 'en',
  messages,
})

export function setLocale(locale) {
  localStorage.setItem('locale', locale)
  i18n.global.locale = locale // Change locale in i18n instance
}

export default i18n
