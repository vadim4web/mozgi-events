<template>
  <div class="showreel-player-wrapper" v-if="state.showPlayer">
    <button @click="state.setShowPlayer(false)" class="close">X</button>
    <video
      class="showreel-player"
      controls
      autoplay
      running-span
      muted
      :src="videoFile"
    ></video>
  </div>
</template>

<script setup>
import { state } from '@/store'
import videoFile from '@/assets/showreel.mp4'
</script>

<style lang="scss" scoped>
.showreel-player-wrapper {
  z-index: 5;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;

  @media (orientation: portrait) {
    top: 4rem;
  }

  @media (orientation: landscape) {
    bottom: 0;
  }
}

.showreel-player {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 8px #00000033;
}

.close {
  z-index: 11;
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  -webkit-transition: transform 0.3s ease, background-color 0.3s ease;
  transition: transform 0.3s ease, background-color 0.3s ease;
  mix-blend-mode: difference;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #000000b3;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
}
</style>
