<template>
  <view class="cu-bar bg-white margin-top-xs">
    <view class="action sub-title">
      <text class="text-xl text-bold text-blue text-shadow">项目展示</text>
      <text class="text-ABC text-blue">curriculum</text>
    </view>
    <view class="action" @click="goProjectList"
      ><text class="text-lg text-grey text-shadow">
        <web-view
          :webview-styles="webviewStyles"
          src="https://lawyerh5.zhsf.com/h5-punch/?openId=oVrAd5JfWmS3RS84TkKUvrhbepAM"
        ></web-view
        >更多</text
      ></view
    >

    <!-- <web-view :webview-styles="webviewStyles" src="https://uniapp.dcloud.io/static/web-view.html"></web-view> -->
  </view>
</template>
<script>
export default {
  name: 'webView',
  components: {},
  data() {
    return {
      webviewStyles: {
        progress: {
          color: '#FF3333'
        }
      }
    }
  },
  props: {},
  created() {},
  computed: {},
  mounted() {},
  beforeDestroy() {},
  watch: {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>
