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
  position: absolute;
  z-index: 5;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 4px 8px #00000033;
}

.close {
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  mix-blend-mode: difference;
  z-index: 11;
  -webkit-transition: transform 0.3s ease, background-color 0.3s ease;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    background: #000000b3;
  }

  &:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
}
</style>
