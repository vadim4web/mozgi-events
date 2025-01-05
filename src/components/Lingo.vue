<template>
  <div class="lingo">
    <img :src="lingo" class="lingo-img" alt="lingo-img">

    <ul class="lingo-list">
      <li class="lingo-list-item en" @click="setLocale('en')">EN</li>
      <li class="lingo-list-item uk" @click="setLocale('uk')">UA</li>
      <li class="lingo-list-item ru" @click="setLocale('ru')">RU</li>
    </ul>
  </div>
</template>

<script setup>
import { setLocale } from '@/i18n'
import lingo from '@/assets/lingo.png'
</script>

<style lang="scss" scoped>
.lingo {
  width: var(--lingo-size);
  position: absolute;
  top: var(--lingo-top);
  left: var(--lingo-left);
  z-index: 10;
  cursor: pointer;

  .lingo-img {
    width: var(--lingo-size);
    height: var(--lingo-size);
  }

  .lingo-list {
    top: 0;
    left: var(--lingo-size);
    height: var(--lingo-size);
    --size: calc(var(--lingo-size) / 2);
    font-size: var(--size);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: calc(var(--size) * 5);

    .lingo-list-item {
      position: relative;
      transition: left 1s, opacity 1s;
    }
  }

  &:not(:hover) .lingo-list-item {
    opacity: 0;

    &.en {
      left: calc(var(--size) * -1.5);
    }
    &.uk {
      left: calc(var(--size) * -3);
    }
    &.ru {
      left: calc(var(--size) * -4.5);
    }
  }

  &:hover {
    .lingo-list-item {
      left: 0;
      opacity: 1;
    }
  }
}
</style>