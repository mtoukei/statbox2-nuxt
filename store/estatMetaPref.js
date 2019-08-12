import metaPref from '../assets/json/meta-pref'
export const state = () => ({
  rightSideShow: false,
  metaPref
})

export const mutations = {
  login(state, user) {
    state.user = user
  },
  logout(state) {
    state.user = null
  }
}
