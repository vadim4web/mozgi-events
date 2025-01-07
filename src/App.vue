<template>
  <lingo-switcher /> <main-logo /> <router-links />
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import MainLogo from '@/components/MainLogo.vue'
import LingoSwitcher from '@/components/LingoSwitcher.vue'
import RouterLinks from '@/components/RouterLinks.vue'
</script>
