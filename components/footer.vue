<template>
  <div id="footer">
    <div class="resizers">
      <div class="resizer top">
        <span style="padding: 0 20px 0 20px">フッター</span>
      </div>
      <div style="padding-top: 40px">
        <!--ここにいろいろ書く-->
        <div v-for="el in footerInner" :id="el.id" :key="el.id"></div>
        <!--ここにいろいろ書く。ここまで-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  props: {
    side: { type: String, default: '' },
    statType: { type: String, default: '' }
  },
  data() {
    return {
      footerInner: [
        { id: 'footer-inner-left', side: 'leftSide' },
        { id: 'footer-inner-right', side: 'rightSide' }
      ]
    }
  },
  methods: {}
}
</script>
