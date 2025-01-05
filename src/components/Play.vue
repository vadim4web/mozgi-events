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
  z-index: 10;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;

  @media (orientation: portrait) {
    top: 12vmin;
  }

  @media (orientation: landscape) {
    bottom: 0;
  }
}

.video-player {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  mix-blend-mode: difference;
  z-index: 1;
}
</style>