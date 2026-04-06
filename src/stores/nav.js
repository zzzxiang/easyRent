import { defineStore } from 'pinia'
export const useNavStore = defineStore('nav', {
  state: () => {
    return {
      hot: 'active',
      all: null,
      message: null,
      me: null,
      location: '/index'
    }
  },
  getters: {},
  actions: {
    change(x) {
      this.hot = null
      this.all = null
      this.message = null
      this.me = null
      this[x] = 'active'
      this.location = '/index/' + x
    },
    reset() {
      this.hot = 'active'
      this.all = null
      this.message = null
      this.me = null
      this.location = '/index'
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'nav',
        storage: localStorage
      }
    ]
  }

})