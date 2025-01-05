<template>
  <div class="video-container" v-if="state.showPlayer">
    <button @click="state.setShowPlayer(false)" class="close">X</button>
    <video
      class="video-player"
      controls
      autoplay
      loop
      muted
      :src="videoSrc"
    ></video>
  </div>
</template>

<script setup>
import { state } from '@/store'
import videoFile from '@/assets/show.mp4'
const videoSrc = videoFile
</script>

<style lang="scss" scoped>
.video-container {
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

.video-player {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close {
  position: absolute;
  right: 1rem;
  top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
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
    background: rgba(0, 0, 0, 0.7);
  }

  &:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
}
</style>

