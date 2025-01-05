<template>
  <button
    class="show"
    @click="toggleShowreel"
    @mouseenter="enter"
    @mouseleave="leave"
    :style="{ transform: `translate(-50%,-50%) rotate(${rotation}deg)` }"
  >
    <img :src="show" alt="showreel" class="show-image" />
  </button>
</template>

<script setup>
import { ref } from 'vue'
import show from '@/assets/show.png'
import { state } from '@/store'

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
/* @keyframes rotation {
  from { transform: translate(-50%, -50%) rotate(0); }
  to { transform: translate(-50%, -50%) rotate(-360deg); }
}

@-webkit-keyframes rotation {
  from { transform: translate(-50%, -50%) rotate(0); }
  to { transform: translate(-50%, -50%) rotate(-360deg); }
} */

.show {
  cursor: pointer;
  width: var(--show-size);
  height: var(--show-size);
  position: absolute;
  z-index: 15;
  border: none;
  background: transparent;
  top: 0;
  left: 0;
  border-radius: 50%;
  /* transform: translate(-50%, -50%); */

  /* &:hover {
    -webkit-animation: rotation 3s infinite;
    -moz-animation: rotation 3s infinite;
    -o-animation: rotation 3s infinite;
    animation: rotation 3s infinite;
  } */

  &-image {
    width: 100%;
    height: 100%;
  }
}
</style>
