<template>
  <div>
    <header-menu />
    <!--左サイド-->
    <side side="leftSide" :stat-type="s_statType" />
    <!--右サイド-->
    <side v-show="s_rightSideShow" side="rightSide" :stat-type="s_statType" />
    <!--フッター-->
    <footer-info :stat-type="s_statType" />
  </div>
</template>
<script>
import resizableDiv from 'assets/js/resizablediv'
import header from '../components/header'
import footer from '../components/footer'
import side from '../components/side'
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
      return 'aaaaa'
      // return this.$store.state.base.statType
    }
  },
  mounted() {
    this.$nextTick(function() {
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

// const resizableDiv = function(div) {
//   console.log(3333333)
// }
</script>
<style lang="scss">
@import '../assets/css/main';
@import '../assets/css/resizers';
</style>
