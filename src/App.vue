<script setup>
import { computed } from 'vue';
import { useDarkMode } from './composables/useDarkMode'

const { isDark } = useDarkMode()

const year = computed(() => {
  return new Date().getFullYear()
})

</script>

<template>
  <div>
    <router-view />
    <button
      @click="isDark = !isDark"
      class="fixed bottom-4 right-4 p-3 bg-gray-300 dark:bg-gray-700 rounded-full shadow-lg hover:opacity-80 transition">
      <span v-if="isDark">🌞</span>
      <span v-else>🌙</span>
    </button>

    <footer class="min-w-full fixed bottom-4 left-4 text-center text-sm text-gray-600 dark:text-gray-400">
      © {{ year }} Chris Otaalo. Learning VueJS 3 and Tailwind
    </footer>
  </div>
  
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
