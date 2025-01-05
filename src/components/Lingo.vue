<template>
  <div class="lingo">
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
    -webkit-transition: transform 0.3s ease, opacity 0.3s ease;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
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
    pointer-events: none;

    .lingo-list-item {
      position: relative;
      transition: transform 1s, opacity 1s;
      -webkit-transition: transform 1s, opacity 1s;
      pointer-events: auto;
      cursor: pointer;
      color: var(--gray);
      font-weight: bold;
      padding: 0.25rem 0.5rem;

      &:hover {
        color: var(--yellow);
        text-decoration: underline;
      }
    }
  }

  &:not(:hover) .lingo-list-item {
    opacity: 0;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);

    &.en {
      transform: translateX(calc(var(--size) * -1.5));
      -webkit-transform: translateX(calc(var(--size) * -1.5));
    }
    &.uk {
      transform: translateX(calc(var(--size) * -3));
      -webkit-transform: translateX(calc(var(--size) * -3));
    }
    &.ru {
      transform: translateX(calc(var(--size) * -4.5));
      -webkit-transform: translateX(calc(var(--size) * -4.5));
    }
  }

  &:hover {
    .lingo-list-item {
      transform: translateX(0);
      -webkit-transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>
