import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      username: '',
      pwd: ''
    }
  },
  getters: {},
  actions: {
    keep(x, y) {
      this.username = x
      this.pwd = y
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage
      }
    ]
  }
})