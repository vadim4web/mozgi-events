<template>
  <div class="sunshine">
    <div class="showreel-wrapper">
      <showreel-button />
    </div>
  </div>
</template>

<script setup>
import ShowreelButton from '@/components/ShowreelButton.vue'
</script>

<style lang="scss">
.sunshine {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
}

.sunshine::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: var(--sunshine-size);
  height: var(--sunshine-size);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: calc(var(--sunshine-size) / 2);
  -webkit-filter: blur(var(--sunshine-blur));
  filter: blur(var(--sunshine-blur));
  background: radial-gradient(var(--yellow) 95%, transparent);
  z-index: 0;
}

.showreel-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  -webkit-transform: translate(
    calc(var(--sunshine-size) * 0.36),
    calc(var(--sunshine-size) * 0.36)
  );
  transform: translate(
    calc(var(--sunshine-size) * 0.36),
    calc(var(--sunshine-size) * 0.36)
  );
  z-index: 1;
}
</style>
