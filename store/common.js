export const state = () => ({
  isRightSideShow: false,
  statType: 'pref',
  statId: {
    pref: { dai: '', id: '', cat01: '' },
    scatterPref: { dai: '', id: '', cat01: '' },
    city: { dai: '', id: '', cat01: '' },
    scatterCity: { dai: '', id: '', cat01: '' }
  }
})

export const mutations = {
  changeStatType(state, statType) {
    state.statType = statType
  },
  changeStatId(state, payload) {
    const dai = payload.id.split('/')[0]
    const id = payload.id.split('/')[1]
    const cat01 = payload.id.split('/')[2]
    state.statId[payload.statType].dai = dai
    state.statId[payload.statType].id = id
    state.statId[payload.statType].cat01 = cat01
    // ここからURLにパラメータを付与-------------------------
    const url = new URL(window.location.href)
    const params = url.searchParams
    params.set('dai', dai)
    params.set('id', id)
    params.set('cat01', cat01)
    window.history.replaceState({}, '', url.href)
  }
}
