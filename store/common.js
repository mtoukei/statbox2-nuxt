export const state = () => ({
  isRightSideShow: false,
  statType: 'pref'
})

export const mutations = {
  login(state, user) {
    state.user = user
  },
  logout(state) {
    state.user = null
  }
}