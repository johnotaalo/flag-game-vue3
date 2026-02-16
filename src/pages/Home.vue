<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function startGame() {
  router.push({
    name: 'game',
  })
}
</script>

<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-4 text-gray-900 dark:text-gray-100"
  >
    <h1 class="text-4xl font-bold mb-4 text-center">🌍 Flag Guessing Game</h1>
    <p class="text-center max-w-md mb-8 text-lg opacity-90">
      Test your geography skills. Guess the correct flag before time runs out!
    </p>

    <button
      @click="startGame"
      class="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:scale-105 transition shadow-lg"
    >
      ▶ Start Game
    </button>

    <!-- Extra features -->
    <div class="mt-10 grid grid-cols-2 gap-4 text-sm max-w-sm">
      <div class="bg-white/20 p-4 rounded-lg text-center">⏱ Timed Rounds</div>
      <div class="bg-white/20 p-4 rounded-lg text-center">🔥 Streak Multipliers</div>
      <div class="bg-white/20 p-4 rounded-lg text-center">🌙 Dark Mode</div>
      <div class="bg-white/20 p-4 rounded-lg text-center">👥 Local Multiplayer</div>
    </div>
  </div>
</template>