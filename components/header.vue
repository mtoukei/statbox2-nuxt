<!--全国都道府県いろんなグラフで..............pref-->
<!--散布図で.............................scatterPref-->
<!--全国市町村 いろんなグラフで.................city-->
<!--散布図で.............................scatterCity-->
<!--都道府県を時系列で...................timePref-->
<!--市町村を時系列で......................timeCity-->
<template>
  <div>
    <el-menu
      id="header-menu"
      :default-active="defaultActive"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#03a9f4"
      @select="headerMenuSelect"
    >
      <el-menu-item index="index">新統計BOX（試作版）</el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          全国都道府県
        </template>
        <el-menu-item index="pref">いろんなグラフで見える化</el-menu-item>
        <el-menu-item index="scatterPref">散布図で見える化</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          全国市町村
        </template>
        <el-menu-item index="city">いろんなグラフで見える化</el-menu-item>
        <el-menu-item index="scatterCity">散布図で見える化</el-menu-item>
      </el-submenu>
      <!--      <el-submenu index="5">-->
      <!--        <template slot="title">-->
      <!--          時系列-->
      <!--        </template>-->
      <!--        <el-menu-item index="timePref">全国の都道府県を時系列で見える化</el-menu-item>-->
      <!--        <el-menu-item index="timeCity">全国の市町村を時系列で見える化</el-menu-item>-->
      <!--      </el-submenu>-->
      <el-menu-item index="index-page1"><nuxt-link :to="{ name: 'index-page1' }">pege1</nuxt-link></el-menu-item>
      <el-menu-item index="index-page2"><nuxt-link :to="{ name: 'index-page2' }">pege2</nuxt-link></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'HeaderMenu',
  data() {
    return {
      defaultActive: 'pref'
    }
  },
  computed: {},
  beforeMount() {
    const url = new URL(window.location.href)
    const params = url.searchParams
    let statType = params.get('type')
    const dai = params.get('dai')
    const id = params.get('id')
    const cat01 = params.get('cat01')
    if (!statType) statType = 'pref'
    this.defaultActive = statType
    this.$store.commit('common/changeStatType', statType)
    if (id) {
      const payload = { statType, id: dai + '/' + id + '/' + cat01 }
      this.$store.commit('common/changeStatId', payload)
    }
  },
  methods: {
    headerMenuSelect(key) {
      console.log(key)
      switch (key) {
        case 'index':
        case 'index-page1':
        case 'index-page2':
          this.$nuxt.$router.push({ name: key })
          break
        default:
          this.$nuxt.$router.push({ name: 'index' })
          this.$store.commit('common/changeStatType', key)
          // 時間をおいてURLを設定
          setTimeout(() => {
            const url = new URL(window.location.href)
            const params = url.searchParams
            params.set('type', key)
            if (this.$store.state.common.statId[key].id) {
              params.set('dai', this.$store.state.common.statId[key].dai)
              params.set('id', this.$store.state.common.statId[key].id)
              params.set('cat01', this.$store.state.common.statId[key].cat01)
            }
            window.history.replaceState({}, '', url.href)
          }, 0)
      }
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
