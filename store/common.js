export const state = () => ({
  isRightSideShow: false,
  statType: 'pref'
})

export const mutations = {
  changeStatType(state, statType) {
    state.statType = statType
  }
}
