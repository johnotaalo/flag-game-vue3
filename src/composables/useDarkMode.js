import {ref, watch} from 'vue'

const isDark = ref(
    localStorage.getItem('darkMode') === 'true'
)

export function useDarkMode(){
    watch(isDark, (value) => {
        document.documentElement.classList.toggle('dark', value)
        localStorage.setItem('darkMode', value)
    }, {immediate: true})

    return { isDark }
}