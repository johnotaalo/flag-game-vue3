<script setup>
import { useDarkMode } from './composables/useDarkMode'

const { isDark } = useDarkMode()

</script>

<template>
  <router-view />
</template>

<style scoped>
.flag{
  perspective: 1000px;
}

.flag-inner{
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flag-flipped .flag-inner{
  transform: rotateY(180deg);
}
</style>
