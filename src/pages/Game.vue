<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { useFlagGame } from '@/composables/useFlagGame'
import GameOverModal from '@/components/GameOverModal.vue'

const router = useRouter()

const {
  score,
  highScore,
  streak,
  round,
  maxRounds,
  options,
  correctCountry,
  selectedAnswer,
  showResult,
  progressPercent,
  gameOver,
  isCorrect,
  startRound,
  selectAnswer,
  nextRound,
  resetGame
} = useFlagGame()

onMounted(() => {
  startRound()
})
</script>
<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-4 text-gray-900 dark:text-gray-100"
  >
    <div class="text-xl font-bold mb-4">
      Score: {{ score }} | Round: {{ round }} / {{ maxRounds }}
    </div>

    <div class="w-full max-w-md mb-6">
      <div class="h-4 bg-gray-300 rounded-full overflow-hidden">
        <div
          class="h-full bg-red-500 transition-all duration-1000"
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-6">Select the flag of {{ correctCountry?.country }}</h2>

    <div class="flex justify-between w-full max-w-md text-sm mb-4">
      <span>🔥 Streak: {{ streak }}</span>
      <span>🏆 High Score: {{ highScore }}</span>
    </div>

    <div class="grid grid-cols-2 gap-4 sm:gap-6 max-w-md w-full">
      <div
        v-for="country in options"
        :key="country.code"
        @click="selectAnswer(country)"
        class="flag cursor-pointer"
        :class="{
          'border-4 border-green-500': showResult && country.code === correctCountry.code,
          'border-4 border-red-500':
            showResult &&
            selectedAnswer?.code === country.code &&
            country.code !== correctCountry.code,
          flipped: showResult,
        }"
      >
        <div
          class="flag-inner bg-white dark:bg-gray-800 p-4 rounded-xl shhadow-md transition transform hover:scale-105"
        >
          <img
            :src="country.flag"
            :alt="country.name"
            class="w-full h-24 sm:h-28 object-cover rounded"
          />
        </div>
      </div>
    </div>

    <div v-if="showResult" class="mt-6 text-xl font-bold">
      <span v-if="isCorrect" class="text-green-600"> ✅ Correct! </span>
      <span v-else> ❌ Wrong! </span>
    </div>
    <button
      v-if="showResult"
      @click="nextRound"
      class="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Next
    </button>

    <button
      @click="router.push('/')"
      class="absolute top-4 left-4 text-sm bg-white/80 px-3 py-1 rounded"
    >
      ⬅ Home
    </button>

    <GameOverModal
      v-if="gameOver"
      :score="score"
      :highScore="highScore"
      @playAgain="resetGame()"
      @goHome="router.push('/')"
    />
  </div>
</template>