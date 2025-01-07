import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
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
      transition: 'slide-up',
    },
  },
  {
    path: '/where',
    component: () => import('@/views/WhereView.vue'),
    meta: {
      titles: {
        en: 'Where * MOZGI',
        ua: 'Де * MOZGI',
        ru: 'Где * MOZGI',
      },
      transition: 'slide-left',
    },
  },
  {
    path: '/who',
    component: () => import('@/views/WhoView.vue'),
    meta: {
      titles: {
        en: 'Who * MOZGI',
        ua: 'Хто * MOZGI',
        ru: 'Кто * MOZGI',
      },
      transition: 'slide-down',
    },
  },
  {
    path: '/what',
    component: () => import('@/views/WhatView.vue'),
    meta: {
      titles: {
        en: 'What * MOZGI',
        ua: 'Що * MOZGI',
        ru: 'Что * MOZGI',
      },
      transition: 'slide-right',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'no-match',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      titles: {
        en: 'MOZGI * 404',
        ua: 'MOZGI * 404',
        ru: 'MOZGI * 404',
      },
      transition: 'fade',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Update page title after each route change
router.afterEach(to => {
  const locale = i18n.global.locale
  const routeMeta = to.meta || {}
  const titles = routeMeta.titles || {}
  document.title = titles[locale] || titles.en
})

export default router
