import metaCity from '../assets/json/meta-city'
export const state = () => ({
  metaCityBackUp: metaCity,
  metaCityCity: metaCity,
  metaCityScatterCity: metaCity
})

export const mutations = {
  clear(state, statType) {
    if (statType === 'city') {
      state.metaCityCity = null
    } else {
      state.metaCityScatterCity = null
    }
  },
  set(state, statType) {
    if (statType === 'city') {
      state.metaCityCity = state.metaCityBackUp
    } else {
      state.metaCityScatterCity = state.metaCityBackUp
    }
  }
}
