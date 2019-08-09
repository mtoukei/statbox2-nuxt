export const state = () => ({
  rightSideShow: false
})

export const mutations = {
  login(state, user) {
    state.user = user
  },
  logout(state) {
    state.user = null
  }
}
