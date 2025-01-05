import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import { useI18n } from 'vue-i18n'
import i18n from '@/i18n'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      titles: {
        en: 'MOZGI * Full-Cycle Event Agency',
        ua: 'MOZGI * Агенція подій повного циклу',
        ru: 'MOZGI * Агентство мероприятий полного цикла',
      },
      transition: 'slide-up'
    },
  },
  {
    path: '/where',
    component: () => import('@/views/Where.vue'),
    meta: {
      titles: {
        en: 'Where * MOZGI',
        ua: 'Де * MOZGI',
        ru: 'Где * MOZGI',
      },
      transition: 'slide-left'
    },
  },
  {
    path: '/who',
    component: () => import('@/views/Who.vue'),
    meta: {
      titles: {
        en: 'Who * MOZGI',
        ua: 'Хто * MOZGI',
        ru: 'Кто * MOZGI',
      },
      transition: 'slide-down'
    },
  },
  {
    path: '/what',
    component: () => import('@/views/What.vue'),
    meta: {
      titles: {
        en: 'What * MOZGI',
        ua: 'Що * MOZGI',
        ru: 'Что * MOZGI',
      },
      transition: 'slide-right'
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'no-match',
    component: () => import('@/views/404.vue'),
    meta: {
      titles: {
        en: 'MOZGI * 404',
        ua: 'MOZGI * 404',
        ru: 'MOZGI * 404',
      },
      transition: 'fade'
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Update page title after each route change
router.afterEach(to => {
  const locale = i18n.global.locale // Access current locale from i18n instance
  const routeMeta = to.meta || {}
  const titles = routeMeta.titles || {}
  document.title = titles[locale] || titles.en // Set title based on current locale
})

export default router
