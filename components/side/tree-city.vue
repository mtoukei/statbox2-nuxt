<template>
  <div>
    <div class="top-div">
      <el-button type="info" size="mini" style="margin-bottom: 10px;" @click.stop="clear">
        クリア
      </el-button>
      <el-input v-model="c_filterText" placeholder="キーワード検索" />
    </div>
    <div class="tree-div">
      <el-tree
        ref="tree"
        node-key="statId"
        :check-on-click-node="true"
        :check-strictly="true"
        :data="s_estatMetaCity"
        :filter-node-method="filterNode"
        highlight-current
        :indent="10"
      />
      <span class="tree-name">全国市町村いろんなグラフ</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeCity',
  data() {
    return {
      filterText: ''
    }
  },
  computed: {
    c_filterText: {
      get() {
        return this.filterText
      },
      set(value) {
        this.filterText = value
      }
    },
    s_statType() {
      return this.$store.state.common.statType
    },
    s_estatMetaCity() {
      return this.$store.state.estatMetaCity.metaCityCity
    }
  },
  watch: {
    filterText(value) {
      this.$refs.tree.filter(value)
    }
  },
  mounted() {
    this.$nextTick(function() {})
  },
  methods: {
    clear() {
      this.$store.commit('estatMetaCity/clear', this.s_statType)
      this.$nextTick(function() {
        this.$store.commit('estatMetaCity/set', this.s_statType)
      })
      this.filterText = ''
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.includes(value)
    }
  }
}
</script>
