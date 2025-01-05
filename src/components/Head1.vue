<template>
  <h2 :style="{ transform: `translate(${dX}% , ${dY}%)` }">
    {{ $t('header') }}
  </h2>
</template>

<script setup>
import { useMouse, useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

const { x, y } = useMouse()
const { width, height } = useWindowSize()

const dX = computed(() =>
  Math.trunc(((x.value - width.value / 2) / (width.value / 2)) * 7.5)
)
const dY = computed(() =>
  Math.trunc(((y.value - height.value / 2) / (height.value / 2)) * 15)
)
</script>

<style lang="scss">
h2 {
  position: relative;
  font-size: var(--head1);
  max-width: var(--head1-w);
}
</style>
