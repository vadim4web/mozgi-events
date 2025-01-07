<template>
  <button
    class="showreel-button"
    @click="toggleShowreel"
    @mouseenter="enter"
    @mouseleave="leave"
    :style="{ transform: `translate(-50%,-50%) rotate(${rotation}deg)` }"
  >
    <img
      :src="showreel"
      alt="showreel-buttonreel"
      class="showreel-button-image"
    />
  </button>
</template>

<script setup>
import { ref } from 'vue'
import { state } from '@/store'
import showreel from '@/assets/showreel.png'

const rotation = ref(0)
let interval = null

const enter = () => {
  clearInterval(interval)
  rotation.value -= 5
  interval = setInterval(() => (rotation.value -= 20), 100)
}

const leave = () => {
  rotation.value += 50
  clearInterval(interval)
}

const toggleShowreel = () => state.setShowPlayer(!state.showPlayer)
</script>

<style lang="scss">
.show {
  z-index: 15;
  position: absolute;
  top: 0;
  left: 0;
  width: var(--showreel-button-size);
  height: var(--showreel-button-size);
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
