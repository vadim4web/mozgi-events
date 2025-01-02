<template>
  <div class="lingo">
    <img :src="lingo" alt="lingo-img">

    <ul class="lingo-list">
      <li class="lingo-list-item" @click="setLocale('en')">EN</li>
      <li class="lingo-list-item" @click="setLocale('uk')">UK</li>
      <li class="lingo-list-item" @click="setLocale('ru')">RU</li>
    </ul>
  </div>
</template>

<script setup>
import { setLocale } from '@/i18n'
import lingo from '@/assets/lingo.png'
</script>

<style lang="scss" scoped>
.lingo {
  width: 3rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  cursor: pointer;

  .lingo-list {
    display: flex;
    gap: 0.5rem;
    width: 100%;
  }
}
</style>