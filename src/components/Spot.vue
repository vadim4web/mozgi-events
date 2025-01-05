<template>
  <div class="spot">
    <div class="spot"></div>
    <div class="show-wrapper">
      <show />
    </div>
  </div>
</template>

<script setup>
import Show from '@/components/Show.vue'
</script>

<style lang="scss">
.spot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
}

.spot::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: var(--spot-size);
  height: var(--spot-size);
  border-radius: calc(var(--spot-size) / 2);
  -webkit-filter: blur(4vmax);
  filter: blur(4vmax);
  background: radial-gradient(var(--yellow) 95%, transparent);
  z-index: 0;
}

.show-wrapper {
  position: absolute;
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  -webkit-transform: translate(
    calc(var(--spot-size) * 0.36),
    calc(var(--spot-size) * 0.36)
  );
  transform: translate(
    calc(var(--spot-size) * 0.36),
    calc(var(--spot-size) * 0.36)
  );
  z-index: 1;
}
</style>
