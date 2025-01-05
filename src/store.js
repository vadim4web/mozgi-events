import { reactive } from 'vue'

export const state = reactive({
  showPlayer: false,
  setShowPlayer(value) {
    this.showPlayer = value
  },
})