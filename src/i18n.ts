import { createI18n } from 'vue-i18n'
import da from './locales/da.json'
import en from './locales/en.json'

type MessageSchema = typeof da

const getInitialLocale = (): string => {
  if (typeof window === 'undefined') return 'da'
  
  // Check URL parameter first
  const url = new URL(window.location.href)
  const langParam = url.searchParams.get('lang')
  if (langParam && ['da', 'en'].includes(langParam)) {
    return langParam
  }
  
  // Check localStorage
  const stored = localStorage.getItem('locale')
  if (stored && ['da', 'en'].includes(stored)) {
    return stored
  }
  
  // Check browser language
  const browserLang = navigator.language.split('-')[0]
  if (['da', 'en'].includes(browserLang)) {
    return browserLang
  }
  
  return 'da'
}

export const i18n = createI18n<[MessageSchema], 'da' | 'en'>({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'da',
  messages: {
    da,
    en,
  },
})

export const setLocale = (locale: 'da' | 'en') => {
  // @ts-expect-error - locale is a ref in composition mode
  i18n.global.locale.value = locale
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', locale)
  }
}
