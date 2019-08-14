<!--宮崎県市町村 いろんなグラフで..............miyazakiCity-->
<!--散布図で.....................scatterMiyazaki -->
<!--全国都道府県いろんなグラフで..............pref-->
<!--散布図で.....................scatterPref-->
<!--全国市町村 いろんなグラフで..............city-->
<!--散布図で.....................scatterCity-->
<!--時系列 宮崎県を時系列で..........time-->
<!--都道府県を時系列で.......timePref-->
<!--市町村を時系列で..........timeCity-->
<template>
  <div>
    <el-menu
      id="header-menu"
      default-active="miyazakiCity"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#03a9f4"
      @select="headerMenuSelect"
    >
      <el-menu-item index="home">新統計BOX（試作版）</el-menu-item>
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
      <el-submenu index="5">
        <template slot="title">
          時系列
        </template>
        <el-menu-item index="time">宮崎県を時系列で見える化</el-menu-item>
        <el-menu-item index="timePref">全国の都道府県を時系列で見える化</el-menu-item>
        <el-menu-item index="timeCity">全国の市町村を時系列で見える化</el-menu-item>
      </el-submenu>
      <el-menu-item index="page1">pege1</el-menu-item>
      <el-menu-item index="page2">pege2</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'HeaderMenu',
  computed: {},
  mounted() {},
  methods: {
    headerMenuSelect(key) {
      console.log(key)
      switch (key) {
        case 'page1':
        case 'page2':
          this.$nuxt.$router.push(key)
      }
    }
  }
}
</script>
