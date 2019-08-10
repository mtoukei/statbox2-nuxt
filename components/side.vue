<template>
  <div :id="c_divId" v-resize="handleResize">
    <div class="resizers">
      <div :class="c_divClass">
        <div class="resizer-inner">
          <i :class="c_iClass"></i>
        </div>
      </div>
      <!-- ツリーここから-->
      <!-- ツリーここまで-->
    </div>
  </div>
</template>
<script>
export default {
  name: 'SideTree',
  props: {
    side: { type: String, default: '' },
    statType: { type: String, default: '' }
  },
  data() {
    return {}
  },
  computed: {
    c_divId() {
      if (this.side === 'leftSide') {
        return 'left-side-div'
      }
      return 'right-side-div'
    },
    c_divClass() {
      if (this.side === 'leftSide') {
        return 'resizer right'
      }
      return 'resizer left'
    },
    c_iClass() {
      if (this.side === 'leftSide') {
        return 'el-icon-arrow-right'
      }
      return 'el-icon-arrow-left'
    }
  },
  watch: {},
  mounted() {
    this.$nextTick(function() {})
  },
  methods: {
    handleResize() {
      console.log('resized')
    }
  }
}
</script>
