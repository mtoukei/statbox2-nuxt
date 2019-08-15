import metaPref from '../assets/json/meta-pref'
export const state = () => ({
  metaPrefBackUp: metaPref,
  metaPrefPref: metaPref,
  metaPrefScatterPref: metaPref
})

export const mutations = {
  clear(state, statType) {
    if (statType === 'pref') {
      state.metaPrefPref = null
    } else {
      state.metaPrefScatterPref = null
    }
  },
  set(state, statType) {
    if (statType === 'pref') {
      state.metaPrefPref = state.metaPrefBackUp
    } else {
      state.metaPrefScatterPref = state.metaPrefBackUp
    }
  }
}
