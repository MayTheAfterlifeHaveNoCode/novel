<template>
  <div id="app">
    <div class="imgp" v-show="$parent.isShowLoading"><img src="./assets/22b7da531739.loading (1).gif"></div>
    <router-view
      @update:maleHot="
        maleHot = $event.maleHot;
        gender = $event.gender;
        feHot = $event.feHot;
        feFinish=$event.feFinish
        maleFinish=$event.maleFinish
      "
      @update:book="book = $event"
      :bookrack="bookrack"
      :maleFinish="maleFinish"
      :maleHot="maleHot"
      :gender="gender"
      :HotPush="HotPush"
      :book="book"
      :feHot="feHot"
      :feFinish="feFinish"

    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["bookrack"]),
  data() {
    return {
      maleHot: null,
      gender: null,
      maleFinish: null,
      HotPush: null,
      book: null,
      feFinish:null,
      feHot:null,
    };
  },
  created() {
    this.axios.get("http://novel.kele8.cn/rank-category").then((response) => {
      // this.category = response.data;
      // console.log(response);
      this.$store.commit("updateRankCategory", response.data);
    });
    this.axios.get("/HotPush.json").then((response) => {
      console.log(response.data.recommend);
      this.HotPush = response.data.recommend;
    });
  },
  watch: {
    bookrack: function (n) {
      // console.log(n);
      window.localStorage.setItem("bookrack", JSON.stringify(n));
    },
  },
};
</script>
<style lang="less">
html {
  background-color: #f4f4f4;
}
li {
  list-style-type: none;
}
.van-card {
  .van-card__header {
    .van-card__thumb {
      width: 60px;
      height: 80px;
      img {
        border-radius: 0;
      }
    }
  }
}
#app{
  position: relative;
  .imgp{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9999999999;
    background-color: rgba(0, 0  ,0, .5);
    img{
      width: 50px;
      height: 50px;
      margin-left: -25px;
      position: absolute;
      top: 200px;
      left: 50%;
    }
  }
}
</style>
