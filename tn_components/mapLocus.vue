<template>
  <view>
    <cu-custom class="navBox" bgColor="bg-gradual-blue" :isBack="true">
      <block slot="backText">返回</block>
      <block slot="content">地图轨迹</block>
    </cu-custom>

    <view class="container">
      <map
        id="map"
        :latitude="latitude"
        :longitude="longitude"
        :markers="covers"
        :style="{ width: '100%', height: mapHeight + 'px' }"
        :scale="13"
        :polyline="polyline"
      >
      </map>

      <view class="btnBox">
        <button :disabled="isDisabled" @click="start" class="cu-btn bg-blue round shadow lg">
          轨迹回放
        </button>
      </view>
    </view>
  </view>
</template>

<!-- 注：vue只支持小程序及H5，如打包App，请修改代码为nvue，或加群要文件 -->

<script>
export default {
  data() {
    return {
      map: null,

      windowHeight: 0,
      mapHeight: 0,
      timer: null,

      isDisabled: false,
      isStart: false,
      playIndex: 1,

      id: 0, // 使用 marker点击事件 需要填写id
      title: 'map',
      latitude: 34.263734,
      longitude: 108.934843,
      // 标记点
      covers: [
        {
          id: 1,
          width: 42,
          height: 47,
          rotate: 270,
          latitude: 34.259428,
          longitude: 108.94704,
          iconPath: 'http://cdn.zhoukaiwen.com/car.png',
          callout: {
            content: '粤A·99999', // 车牌信息
            display: 'ALWAYS',
            fontWeight: 'bold',
            color: '#5A7BEE', //文本颜色
            fontSize: '12px',
            bgColor: '#ffffff', //背景色
            padding: 5, //文本边缘留白
            textAlign: 'center'
          },
          anchor: {
            x: 0.5,
            y: 0.5
          }
        }
      ],

      // 线
      polyline: [
        {
          points: [],
          color: '#12a7cd',
          width: 5,
          dottedLine: false
        }
      ],

      // 坐标数据
      coordinate: [
        {
          latitude: 34.259428,
          longitude: 108.94704,
          problem: false
        },
        {
          latitude: 34.252918,
          longitude: 108.946963,
          problem: false
        },
        {
          latitude: 34.252408,
          longitude: 108.94624,
          problem: false
        },
        {
          latitude: 34.249286,
          longitude: 108.946184,
          problem: false
        },
        {
          latitude: 34.24867,
          longitude: 108.94664,
          problem: false
        },
        {
          latitude: 34.248129,
          longitude: 108.946826,
          problem: false
        },
        {
          latitude: 34.243537,
          longitude: 108.946816,
          problem: true
        },
        {
          latitude: 34.243478,
          longitude: 108.939003,
          problem: true
        },
        {
          latitude: 34.241218,
          longitude: 108.939027,
          problem: true
        },
        {
          latitude: 34.241192,
          longitude: 108.934802,
          problem: true
        },
        {
          latitude: 34.241182,
          longitude: 108.932235,
          problem: true
        },
        {
          latitude: 34.247227,
          longitude: 108.932311,
          problem: true
        },
        {
          latitude: 34.250833,
          longitude: 108.932352,
          problem: true
        },
        {
          latitude: 34.250877,
          longitude: 108.931756,
          problem: true
        },
        {
          latitude: 34.250944,
          longitude: 108.931576,
          problem: true
        },
        {
          latitude: 34.250834,
          longitude: 108.929662,
          problem: true
        },
        {
          latitude: 34.250924,
          longitude: 108.926015,
          problem: true
        },
        {
          latitude: 34.250802,
          longitude: 108.910121,
          problem: true
        },
        {
          latitude: 34.269718,
          longitude: 108.909921,
          problem: true
        },
        {
          latitude: 34.269221,
          longitude: 108.922366,
          problem: false
        },
        {
          latitude: 34.274531,
          longitude: 108.922388,
          problem: false
        },
        {
          latitude: 34.276201,
          longitude: 108.923433,
          problem: false
        },
        {
          latitude: 34.276559,
          longitude: 108.924004,
          problem: false
        },
        {
          latitude: 34.276785,
          longitude: 108.945855,
          problem: false
        }
      ],
      posi: {
        // 汽车定位点的数据，后面只用改latitude、longitude即可
        id: 1,
        width: 32,
        height: 32,
        latitude: 0,
        longitude: 0,
        iconPath: 'http://cdn.zhoukaiwen.com/car.png',
        callout: {
          content: '陕A·85Q1Q', // 车牌信息
          display: 'BYCLICK',
          fontWeight: 'bold',
          color: '#5A7BEE', //文本颜色
          fontSize: '12px',
          bgColor: '#ffffff', //背景色
          padding: 5, //文本边缘留白
          textAlign: 'center'
        },
        anchor: {
          x: 0.5,
          y: 0.5
        }
      }
    }
  },
  watch: {},
  // 分享小程序
  onShareAppMessage(res) {
    return {
      title: '看看这个地图轨迹多好玩～'
    }
  },
  // 分享朋友圈
  onShareTimeline() {
    return {
      title: '看看这个地图轨迹多好玩～',
      imageUrl: 'https://cdn.zhoukaiwen.com/qdpz_share.jpg'
    }
  },
  onReady() {
    // 创建map对象
    this.map = uni.createMapContext('map')
    // 获取屏幕高度
    uni.getSystemInfo({
      success: res => {
        this.windowHeight = res.windowHeight
      }
    })
  },
  mounted() {
    this.setNavTop('.navBox')
    this.polyline[0].points = this.coordinate
  },
  methods: {
    setNavTop(style) {
      let view = uni.createSelectorQuery().select(style)
      view
        .boundingClientRect(data => {
          console.log('tabInList基本信息 = ' + data.height)
          this.mapHeight = this.windowHeight - data.height
          console.log(this.mapHeight)
        })
        .exec()
    },
    start() {
      if (this.isStart) return // 避免重复点击
      this.isStart = true
      this.isDisabled = true
      let data = this.coordinate
      let len = data.length

      const moveMarker = index => {
        if (index >= len) {
          this.playFinished()
          return
        }
        let datai = data[index]
        this.map.translateMarker({
          markerId: 1,
          autoRotate: true,
          destination: {
            longitude: datai.longitude,
            latitude: datai.latitude
          },
          duration: 700,
          complete: () => {
            setTimeout(() => {
              moveMarker(index + 1)
            }, 100)
          },
          fail(e) {
            // 轨迹回放失败
          }
        })
      }

      moveMarker(this.playIndex)
    },

    playFinished() {
      uni.showToast({
        title: '播放完成',
        duration: 1400,
        icon: 'none'
      })
      this.playIndex = 0
      this.isStart = false
      this.isDisabled = false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}

.btnBox {
  width: 750rpx;
  position: absolute;
  bottom: 60rpx;
  z-index: 99;
  display: flex;
  justify-content: space-around;
}
</style>
