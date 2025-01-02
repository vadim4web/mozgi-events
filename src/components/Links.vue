<template>
  <div class="links">
    <router-link class="link who" to="/who">{{ $t('who') }} ?</router-link>
    <router-link class="link where" to="/where">{{ $t('where') }} ?</router-link>
    <router-link class="link what" to="/what">{{ $t('what') }} ?</router-link>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.links {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  background: none;

  .link {
    position: absolute;
    width: max-content;
    height: max-content;

    &.who {
      left: 1rem;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
    }

    &.where {
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%) rotate(180deg);
    }

    &.what {
      right: 1rem;
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
    }
  }
}
</style>