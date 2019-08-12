<template>
  <div>
    <header-menu />
    <!--左サイド-->
    <side p-side="leftSide" :p-stat-type="s_statType" />
    <!--右サイド-->
    <side v-show="s_rightSideShow" p-side="rightSide" :p-stat-type="s_statType" />
    <!--フッター-->
    <footer-info :p-stat-type="s_statType" />
  </div>
</template>
<script>
import resizableDiv from 'assets/js/resizablediv'
import header from '../components/header'
import footer from '../components/footer'
import side from '../components/side'
import metaPref from '../assets/json/meta-pref'
export default {
  name: 'App',
  components: {
    'header-menu': header,
    'footer-info': footer,
    side
  },
  mixins: [
    // mixinMetadataCreate, // 復活させるとログにメタ情報を作る。
    // mixinWatch // ウオッチを集中させている。
  ],
  computed: {
    // storeを見ている算出プロパティには頭にs_をつけている。
    s_rightSideShow() {
      return this.$store.state.rightSideShow
    },
    s_statType() {
      return this.$store.state.statType
    }
  },
  mounted() {
    this.$nextTick(function() {
      console.log(d3)
      console.log(metaPref)
      // window.onresize = () => this.mix_detectResize()
      // divにリサイズ機能を付与---------------------------------------------------------------
      resizableDiv('#left-side-div')
      resizableDiv('#right-side-div')
      resizableDiv('#footer')
      // this.s_leftDivList.forEach((value) => {
      //   resizableDiv('#left-' + value.divId)
      // })
    })
  }
}
</script>
<style lang="scss">
@import '../assets/css/main';
@import '../assets/css/resizers';
@import '../assets/css/tree';
</style>
