<template>
  <lingo /> <logo />  <links />
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import Logo from '@/components/Logo.vue'
import Lingo from '@/components/Lingo.vue'
import Links from '@/components/Links.vue'
</script>
