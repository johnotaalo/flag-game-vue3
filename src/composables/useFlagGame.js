import { ref, computed, watch } from 'vue'
import countries from '../countries.json'

export function useFlagGame() {
  const score = ref(0)
  const highScore = ref(Number(localStorage.getItem('flagHighScore')) || 0)

  const streak = ref(0)
  const round = ref(1)
  const maxRounds = 10

  const options = ref([])
  const correctCountry = ref(null)
  const selectedAnswer = ref(null)
  const showResult = ref(false)

  const duration = 10
  const timeLeft = ref(duration)
  const timer = ref(null)

  const correctSound = new Audio('/correct.mp3')
  const wrongSound = new Audio('/wrong.mp3')

  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5)
  }

  function generateRound() {
    const shuffled = shuffle(countries)
    options.value = shuffled.slice(0, 4)
    correctCountry.value = options.value[Math.floor(Math.random() * 4)]
  }

  function startTimer() {
    timeLeft.value = duration

    timer.value = setInterval(() => {
      timeLeft.value--

      if (timeLeft.value <= 0) {
        clearInterval(timer.value)
        handleTimeout()
      }
    }, 1000)
  }

  function handleTimeout() {
    showResult.value = true
    streak.value = 0
  }

  function startRound() {
    selectedAnswer.value = null
    showResult.value = false

    generateRound()
    startTimer()
  }

  function selectAnswer(country) {
    if (showResult.value) return

    clearInterval(timer.value)

    selectedAnswer.value = country
    showResult.value = true

    if (country.code === correctCountry.value.code) {
      streak.value++
      score.value += 1 * streak.value // multiplier
      correctSound.play()
    } else {
      streak.value = 0
      wrongSound.play()
    }
  }

  function nextRound() {
    if (round.value < maxRounds) {
      round.value++
      startRound()
    } else {
      if (score.value > highScore.value) {
        highScore.value = score.value
        localStorage.setItem('flagHighScore', score.value)
      }
      alert(`Game Over! Final score: ${score.value}`)
      resetGame()
    }
  }

  function resetGame() {
    score.value = 0
    streak.value = 0
    round.value = 1
    startRound()
  }

  const progressPercent = computed(() => {
    return (timeLeft.value / duration) * 100
  })

  const isCorrect = computed(() => selectedAnswer.value?.code === correctCountry.value?.code)

  return {
    score,
    highScore,
    streak,
    round,
    maxRounds,
    options,
    correctCountry,
    selectedAnswer,
    showResult,
    timeLeft,
    progressPercent,
    isCorrect,
    startRound,
    selectAnswer,
    nextRound,
  }
}
