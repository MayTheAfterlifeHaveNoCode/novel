<template>
  <div class="Read" v-if="content">
    <van-popup
      v-model="ShowUp"
      position="top"
      :style="{ height: '45px' }"
      :overlay="false"
    >
      <div class="ret">
        <span class="leftic" @click="retreat"
          ><span class="iconfont icon-left">返回</span></span
        >
        <span class="title">{{ book.title }}</span>
      </div></van-popup
    >

    <div
      @click="
        showt();
        showo();
      "
      class="conti"
    >
      <h3>{{ content.title }}</h3>
      <p v-html="CpContent"></p>
    </div>
    <van-popup
      v-model="ShowUp"
      position="bottom"
      :style="{ height: '50px' }"
      :overlay="false"
    >
      <div class="switch">
        <span @click="page--">上一章</span>
        <span
          @click="
            showp();
            showt();
          "
          >目录</span
        >
        <span @click="page++">下一章</span>
      </div>
    </van-popup>
    <van-popup
      v-model="ShowLe"
      position="left"
      :style="{ height: '100%', width: '80%' }"
      :overlay="false"
    >
      <ul class="chap">
        <li
          v-for="(item, index) in chapter"
          :key="index"
          @click="
            page = index;
            showo();
          "
        >
          {{ item.title }}
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: ["chapter", "Caddress", "index", "book"],
  data() {
    return {
      content: null,
      CpContent:null,
      page: this.index,
      ShowUp: false,
      ShowLe: false,
    };
  },
  created() {
    this.axios
      .get("http://novel.kele8.cn/chapters/" + this.Caddress[this.page])
      .then((response) => {
        // console.log(response);
        this.content = response.data.chapter;
        this.CpContent = this.LineFeed(response.data.chapter.cpContent);
      });
  },
  methods: {
    retreat() {
      this.$router.go(-1);
    },
    showt() {
      if (this.ShowUp) {
        this.ShowUp = false;
      } else if (this.ShowLe == false) {
        this.ShowUp = true;
      }
    },
    showp() {
      if (this.ShowLe) {
        this.ShowLe = false;
      } else {
        this.ShowLe = true;
      }
    },
    showo() {
      this.ShowLe = false;
    },
    LineFeed: function (turn) {
      let enter = /(\r\n)|(\n)/g
      // console.log(turn);
      let complete = turn.replace(enter, "<br>　　");
      return complete;
    },
  },
  watch: {
    page() {
      this.axios
        .get("http://novel.kele8.cn/chapters/" + this.Caddress[this.page])
        .then((response) => {
          // console.log(response);
          this.content = response.data.chapter;
        });
    },
  },
};
</script>

<style lang="less">
.Read {
  min-height: 549px;
  padding: 10px;
  background-color: #b8cd8d;
  .van-popup {
    background-color: rgba(0, 0, 0, 0);
  }
  .switch {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: rgba(13, 14, 14, 0.6);
    display: flex;
    span {
      flex: 1;
      text-align: center;
      color: white;
    }
  }
  .ret {
    width: 100%;
    height: 30px;
    padding-top: 15px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    .leftic {
      height: 21px;
      line-height: 21px;
      float: left;
    }
    .title {
      display: inline-block;
      max-width: 150px;
      min-width: 50px;
      margin: 0 auto;
    }
  }
  .chap {
    background-color: white;
    li {
      width: 100%;
      height: 41px;
      line-height: 41px;
      border-bottom: 1px solid #f8f8f8;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .conti {
    min-height: 549px;
    p {
      word-break: break-all;
      text-indent:2em;
    }
  }
}
</style>