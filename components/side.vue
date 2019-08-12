<template>
  <div :id="c_divId" v-resize="handleResize">
    <div class="resizers">
      <div :class="c_divClass">
        <div class="resizer-inner">
          <i :class="c_iClass"></i>
        </div>
      </div>
      <!-- ツリーここから-->
      <!--全国都道府県と全国散布図-->
      <div class="v-tree">
        <div v-for="item in prefDiv" :key="item.id">
          <div v-show="pStatType === item.statType">
            <div class="top-div top-div-h">
              <el-button type="info" size="mini" style="margin-bottom: 10px;" @click="clearPref">
                クリア
              </el-button>
              <el-input v-model="c_filterText" placeholder="キーワード検索" />
            </div>
            <div class="tree-div">
              <el-tree
                :ref="item.ref"
                node-key="statId"
                :check-on-click-node="true"
                :check-strictly="true"
                :data="s_eStatMetaPref"
                :filter-node-method="filterNode"
                highlight-current
                :indent="10"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- ツリーここまで-->
    </div>
  </div>
</template>
<script>
export default {
  name: 'SideTree',
  props: {
    pSide: { type: String, default: '' },
    pStatType: { type: String, default: '' }
  },
  data() {
    return {
      prefDiv: [{ id: '00', statType: 'pref', ref: 'treePref' }, { id: '01', statType: 'scatterPref', ref: 'tresscatterPref' }],
      filterTextPref: '',
      filterTextPrefScatter: '',
      filterTextPrefTime: ''
    }
  },
  computed: {
    c_divId() {
      return this.pSide === 'leftSide' ? 'left-side-div' : 'right-side-div'
    },
    c_divClass() {
      return this.pSide === 'leftSide' ? 'resizer right' : 'resizer left'
    },
    c_iClass() {
      return this.pSide === 'leftSide' ? 'el-icon-arrow-right' : 'el-icon-arrow-left'
    },
    c_filterText: {
      get() {
        switch (this.pStatType) {
          case 'pref':
            return this.filterTextPref
          case 'scatterPref':
            return this.filterTextPrefScatter
          case 'timePref':
            return this.filterTextPrefTime
          default:
            return 'error'
        }
      },
      set(value) {
        switch (this.pStatType) {
          case 'pref':
            this.filterTextPref = value
            break
          case 'scatterPref':
            this.filterTextPrefScatter = value
            break
          case 'timePref':
            this.filterTextPrefTime = value
            break
        }
      }
    },
    // ここからストア
    s_eStatMetaPref() {
      return this.$store.state.estatMetaPref.metaPref
    }
  },
  watch: {
    filterTextPref(val) {
      this.$refs.treePref[0].filter(val)
    }
  },
  mounted() {
    this.$nextTick(function() {})
  },
  methods: {
    clearPref() {
      alert('未作成')
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.includes(value)
    },
    handleResize() {
      console.log('resized')
    }
  }
}
</script>
