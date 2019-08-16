<template>
  <div id="contents">
    <NuxtChild />
    <div style="margin-top: 100px">
      下の3つのパラメータでグラフは再現可能
      <p>1 タイプ＝{{ s_statType }}</p>
      <p>2 ID＝{{ s_id }}</p>
      <p>3 CAT01＝{{ s_cat01 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contents',
  computed: {
    s_statType() {
      return this.$store.state.common.statType
    },
    s_id() {
      const statType = this.s_statType
      return this.$store.state.common.statId[statType].id
    },
    s_cat01() {
      const statType = this.s_statType
      return this.$store.state.common.statId[statType].cat01
    }
  }
}
</script>

<style scoped></style>
