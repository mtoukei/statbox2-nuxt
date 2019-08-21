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
        node-key="key"
        :check-on-click-node="true"
        :check-strictly="true"
        :data="s_estatMetaCity"
        :filter-node-method="filterNode"
        highlight-current
        :indent="10"
        :default-expanded-keys="expandedKeys"
        :current-node-key="s_statId_key"
        @node-expand="nodeClick"
        @check="nodeClick"
      />
      <span class="tree-name">全国市町村散布図</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeCity',
  data() {
    return {
      expandedKeys: [],
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
      return this.$store.state.estatMetaCity.metaCityScatterCity
    },
    s_statId_key() {
      const statId = this.$store.state.common.statId[this.s_statType]
      return statId.dai + '/' + statId.id + '/' + statId.cat01
    }
  },
  watch: {
    filterText(value) {
      this.$refs.tree.filter(value)
    }
  },
  mounted() {
    if (this.s_statType === 'scatterCity') {
      const statId = this.$store.state.common.statId[this.s_statType]
      const dai = statId.dai
      const id = statId.dai + '/' + statId.id
      // なぜか直接ストアの数値を使うとエラーになるが一度dataに入れるとエラーを回避できた。
      this.expandedKeys = [dai, id]
    }
  },
  methods: {
    nodeClick(e) {
      if (!e.children) {
        const payload = { statType: this.s_statType, id: e.key }
        this.$store.commit('common/changeStatId', payload)
      }
    },
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
