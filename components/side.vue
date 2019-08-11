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
              :data="s_eStatMetaPref"
              node-key="statId"
              :check-on-click-node="true"
              :check-strictly="true"
              :filter-node-method="filterNode"
              highlight-current
              :indent="10"
              @node-expand="nodeClickEstat1"
              @check="nodeClickEstat1"
            />
            <div class="side-sourse">出典:<a href="https://www.stat.go.jp/data/ssds/index.html" target="_blank">社会・人口統計体系</a></div>
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
      cityDiv: [{ id: '11', statType: 'city', ref: 'treeCity' }, { id: '12', statType: 'scatterCity', ref: 'tresscatterCity' }],
      timeDiv: [{ id: '21', statType: 'timePref', ref: 'treeTimePref' }, { id: '22', statType: 'timeCity', ref: 'treeTimeCity' }],
      divId: 'left-side-div',
      divClass: 'resizer right'
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
    }
  },
  watch: {},
  mounted() {
    console.log(this.pStatType)
    this.$nextTick(function() {})
  },
  methods: {
    handleResize() {
      console.log('resized')
    }
  }
}
</script>
