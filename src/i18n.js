import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    locale: 'EN',
    header: 'Full-Cycle Event Agency',
    home: 'main',
    who: 'who',
    where: 'where',
    what: 'what',
  },
  uk: {
    locale: 'UK',
    header: 'Івент-Агенція Повного Циклу',
    home: 'головна',
    who: 'хто',
    where: 'де',
    what: 'що',
  },
  ru: {
    locale: 'RU',
    header: 'Ивент-Агентство Полного Цикла',
    home: 'главная',
    who: 'что',
    where: 'где',
    what: 'кто',
  },
}

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages,
})

export function setLocale(locale) {
  localStorage.setItem('locale', locale)
  i18n.global.locale = locale
}

export default i18n
