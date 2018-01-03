<template>
  <div>
    <div class="top">
      <div class="range">
        <input v-model="range" max="reader.chapters.length" min="0" step="1"  ref="range" type="range">
      </div>
      <a href="javascript:;" @click="back()"></a>
    </div>
    <ul class="list">
      <li v-for="(list, index) in reader.chapters" :key="index">
        <a href="javascript:;"
        :style="{color: (index === reader.currentChapter ? 'red' : '')}"
        @click="goToChapter(index)"
        >
          {{index === reader.currentChapter ? '当前：': ''}}
          {{list.title}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { READER_GOTOCHAPTER } from '../../store/reader.js'
  export default {
    name: 'chapters',
    data: function () {
      return {
        msg: 'chapters',
        range: this.reader.chapters.length
      }
    },
    methods: {
      ...mapActions([READER_GOTOCHAPTER]),
      back: function () {
        this.$router.go(-1)
      },
      goToChapter: function (nextChapter) {
        this.READER_GOTOCHAPTER(nextChapter)
        this.$router.go(-1)
      },
      skip: function () {
        setTimeout(() => {
          try {
            document.getElementById(this.$refs.range.value).scrollIntoView(false)
          } catch (error) {
            console.log(error)
          }
        }, 100)
      }
    },
    computed: {
      ...mapState({reader: state => state.reader}),
      classRed: function (index) {
        return {
          red: index === this.reader.currentChapter
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.list {
  margin: 0;
  padding: 0;
  margin-top: 60px;
  margin-bottom: 80px;
  li {
    list-style: none;
    padding: 8px;
    color: rgba(0, 0, 0, 0.3);
    border-bottom: 1px rgba(0, 0, 0, 0.1) dashed;
    a {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
.top {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  box-sizing: border-box;
  align-items: center;
  a {
    width: 70px;
    height: 100%;
    line-height: 50px;
    padding-left: 20px;
    font-size: 14px;
    color: #999;
  }
}
.range {
  width: 100%;
  height: 25px;
  input[type=range] {
      -webkit-appearance: none;
      width: 100%;
      border-radius: 0px; /*这个属性设置使填充进度条时的图形为圆角*/
  }
  input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    height: 5px;
    border-radius: 10px; /*将轨道设为圆角的*/
    background: rgba(0, 0, 0, 0.05);
    // box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112; /*轨道内置阴影效果*/
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 25px;
    width:25px;
    margin-top: -10px; /*使滑块超出轨道部分的偏移量相等*/
    background: #fff;
    border-radius: 100px; /*外观设置为圆形*/
    border: none; /*设置边框*/
    border: 1px rgba(0, 0, 0, 0.1) solid;
    // box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    // box-shadow: 0 .125em .125em #3b4547; /*添加底部阴影*/
  }
  input[type=range]::-moz-range-progress {
    background: linear-gradient(to right, #059CFA, white 100%, white);
    height: 13px;
    border-radius: 10px;
  }

  input[type=range]::-ms-track {
    height: 25px;
    border-radius: 10px;
    box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112;
    border-color: transparent; /*去除原有边框*/
    color: transparent; /*去除轨道内的竖线*/
  }

  input[type=range]::-ms-thumb {
    border: solid 0.125em rgba(205, 224, 230, 0.5);
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: #ffffff;
    margin-top: -5px;
    box-shadow: 0 .125em .125em #3b4547;
  }

  input[type=range]::-ms-fill-lower {
    /*进度条已填充的部分*/
    height: 22px;
    border-radius: 10px;
    background: linear-gradient(to right, #059CFA, white 100%, white);
  }

  input[type=range]::-ms-fill-upper {
    /*进度条未填充的部分*/
    height: 22px;
    border-radius: 10px;
    background: #ffffff;
  }

  input[type=range]:focus::-ms-fill-lower {
    background: linear-gradient(to right, #059CFA, white 100%, white);
  }

  input[type=range]:focus::-ms-fill-upper {
    background: #ffffff;
  }
}
</style>
