<template>
  <div>
    <header-menu />
    <!--左サイド-->
    <side p-side="leftSide" :p-stat-type="s_statType" />
    <!--グラフ等の表示部分-->
    <contents />
    <!--右サイド-->
    <side v-show="s_isRightSideShow" p-side="rightSide" :p-stat-type="s_statType" />
    <!--フッター-->
    <footer-info :p-stat-type="s_statType" />
  </div>
</template>
<script>
import * as resizableDiv from '@/assets/js/resizablediv'
import footer from '@/components/footer'
import side from '@/components/side'
import contents from '@/components/contents'
import header from '@/components/header2'
export default {
  name: 'App',
  components: {
    contents,
    'header-menu': header,
    'footer-info': footer,
    side
  },
  computed: {
    // storeを見ている算出プロパティには頭にs_をつけている。
    s_isRightSideShow() {
      return this.$store.state.common.isRightSideShow
    },
    s_statType() {
      return this.$store.state.common.statType
    }
  },
  mounted() {
    this.$nextTick(function() {
      console.log(process.env.NODE_ENV + 'で起動')
      console.log('d3起動確認', d3)
      window.onresize = () => resizableDiv.divResize(this)
      // divにリサイズ機能を付与---------------------------------------------------------------
      resizableDiv.grantResize('#left-side-div', this)
      resizableDiv.grantResize('#right-side-div', this)
      resizableDiv.grantResize('#footer', this)
      // this.s_leftDivList.forEach((value) => {
      //   resizableDiv('#left-' + value.divId)
      // })
    })
  }
}
</script>
<style lang="scss">
@import '../../../assets/css/main';
@import '../../../assets/css/resizers';
@import '../../../assets/css/tree';
</style>
