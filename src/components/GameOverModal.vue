<script setup>
defineProps({
  score: Number,
  highScore: Number,
})

defineEmits(['playAgain', 'goHome'])
</script>

<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div
      class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 w-full max-w-sm text-center animate-scale-in"
    >
      <h2 class="text-2xl font-bold mb-2">🎉 Game Over</h2>

      <p class="mb-4 text-lg">
        Your Score: <span class="font-bold">{{ score }}</span>
      </p>

      <p class="mb-6 text-sm opacity-80">High Score: {{ highScore }}</p>

      <div class="flex gap-4">
        <button
          @click="$emit('playAgain')"
          class="flex-1 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          ▶ Play Again
        </button>

        <button
          @click="$emit('goHome')"
          class="flex-1 py-2 bg-gray-300 dark:bg-gray-700 rounded-xl hover:opacity-80 transition"
        >
          🏠 Home
        </button>
      </div>
    </div>
  </div>
</template>