export const state = () => ({
  isRightSideShow: false,
  statType: 'pref',
  statId: {
    pref: { id: '', cat01: '' },
    scatterPref: { id: '', cat01: '' },
    city: { id: '', cat01: '' },
    scatterCity: { id: '', cat01: '' }
  }
})

export const mutations = {
  changeStatType(state, statType) {
    state.statType = statType
  },
  changeStatId(state, payload) {
    const id = payload.id.split('/')[0]
    const cat01 = payload.id.split('/')[1]
    state.statId[payload.statType].id = id
    state.statId[payload.statType].cat01 = cat01

    const url = new URL(window.location.href)
    const params = url.searchParams
    params.set('id', id)
    params.set('cat01', cat01)
    window.history.replaceState({}, '', url.href)
  }
}
