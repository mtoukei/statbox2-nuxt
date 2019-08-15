<template>
  <div :id="c_divId" v-resize="handleResize">
    <div class="resizers">
      <div :class="c_divClass">
        <div class="resizer-inner">
          <i :class="c_iClass"></i>
        </div>
      </div>
      <!-- ツリーここから-->
      <div class="side-tree">
        <!--全国都道府県-->
        <tree-pref v-show="s_statType === 'pref'" />
        <!--全国都道府県散布図-->
        <tree-scatter-pref v-show="s_statType === 'scatterPref'" />
        <!--全国市町村-->
        <tree-city v-show="s_statType === 'city'" />
        <!--全国市町村散布図-->
        <tree-scatter-city v-show="s_statType === 'scatterCity'" />
      </div>
      <!-- ツリーここまで-->
    </div>
  </div>
</template>
<script>
import treePref from '@/components/side/tree-pref'
import treeScatterPref from '@/components/side/tree-scatter-pref'
import treeCity from '@/components/side/tree-city'
import treeScatterCity from '@/components/side/tree-scatter-city'
export default {
  name: 'SideTree',
  components: {
    'tree-pref': treePref,
    'tree-scatter-pref': treeScatterPref,
    'tree-city': treeCity,
    'tree-scatter-city': treeScatterCity
  },
  props: {
    pSide: { type: String, default: '' }
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
    s_statType() {
      return this.$store.state.common.statType
    }
  },
  methods: {
    handleResize() {
      console.log('resized')
    }
  }
}
</script>
