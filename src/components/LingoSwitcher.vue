<template>
  <div class="lingo-switcher">
    <img :src="lingo" class="lingo-img" alt="lingo-img" />

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
.lingo-switcher {
  z-index: 10;
  position: absolute;
  top: var(--lingo-top);
  left: var(--lingo-left);
  width: var(--lingo-size);
  cursor: pointer;

  .lingo-img {
    width: var(--lingo-size);
    height: var(--lingo-size);
    -webkit-transition: transform 0.3s ease, opacity 0.3s ease;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  .lingo-list {
    --size: calc(var(--lingo-size) / 2);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    top: 0;
    left: var(--lingo-size);
    width: calc(var(--size) * 5);
    height: var(--lingo-size);
    font-size: var(--size);
    pointer-events: none;

    .lingo-list-item {
      position: relative;
      padding: 0.25rem 0.5rem;
      font-weight: bold;
      -webkit-transition: transform 1s, opacity 1s;
      transition: transform 1s, opacity 1s;
      color: var(--gray);
      cursor: pointer;
      pointer-events: auto;

      &:hover {
        color: var(--yellow);
        text-decoration: underline;
      }
    }
  }

  &:not(:hover) .lingo-list-item {
    opacity: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);

    &.en {
      -webkit-transform: translateX(calc(var(--size) * -1.5));
      transform: translateX(calc(var(--size) * -1.5));
    }
    &.uk {
      -webkit-transform: translateX(calc(var(--size) * -3));
      transform: translateX(calc(var(--size) * -3));
    }
    &.ru {
      -webkit-transform: translateX(calc(var(--size) * -4.5));
      transform: translateX(calc(var(--size) * -4.5));
    }
  }

  &:hover {
    .lingo-list-item {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
}
</style>
