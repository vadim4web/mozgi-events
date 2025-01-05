<template>
  <div class="loop-wrapper diagonal-container" ref="diagonal">
    <h3 class="loop loop1">{{ $t('header') }}</h3>
    <h3 class="loop loop2">{{ $t('header') }}</h3>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const diagonal = ref(null)

const updateDiagonal = () => {
  const container = diagonal.value
  const w = window.innerWidth
  const h = window.innerHeight
  const angle = Math.atan(h / w) * (180 / Math.PI)
  container.style.transform = `rotate(-${angle}deg)`
  container.style.width = `${Math.hypot(w, h)}px`
  container.style.left = `-${(Math.hypot(w, h) - w) / 2}px`
}

onMounted(() => {
  updateDiagonal()
  window.addEventListener('resize', updateDiagonal)
})

onUnmounted(() => window.removeEventListener('resize', updateDiagonal))
</script>

<style lang="scss">
.loop-wrapper {
  position: absolute;
  min-width: calc(hypot(100vw, 100vh));
  min-height: 1px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(50%);
}

.loop {
  opacity: 0.1;
  color: transparent;
  text-shadow: none;
  -webkit-text-stroke: 2px var(--black);
  text-align: center;
  text-transform: uppercase;
  border: 1px solid var(--gray);
  font-weight: 700;
  line-height: 110%;
  font-size: var(--loop-f);
  height: var(--loop-h);
  width: calc(hypot(100vmax, 100vmin) * 4);
}

@keyframes loop1 {
  from { transform: translateX(-75%) translateY(8px) rotate(180deg); }
  to { transform: translateX(0) translateY(8px) rotate(180deg); }
}

@keyframes loop2 {
  from { transform: translateX(75%) translateY(-8px) rotate(0); }
  to { transform: translateX(0) translateY(-8px) rotate(0); }
}

.loop1 {
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(180deg) translateY(8px);
  animation: loop1 13s -2s linear infinite;
}

.loop2 {
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(-0%, -8px) rotate(0);
  animation: loop2 15s -2s linear infinite;
}
</style>
