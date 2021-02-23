<template>
  <div class="picture">
    <van-swipe
      class="my-swipe"
      style="height: 128px"
      :autoplay="3000"
      indicator-color="red"
    >
      <van-swipe-item
        v-for="(item, index) in gender === 'male' ? bannerMale : bannerFemale"
        @click="$router.push('/Book/' + item.id)"
        :key="index"
      >
        <van-image width="100%" :src="item.img" />
      </van-swipe-item>
    </van-swipe>
    <div class="icon" >
      <span @click="$router.push('/Bookshelf')">
          <span class="iconfont icon-shujia"></span>
        <p>书架</p>
      </span>
      <span @click="$router.push('/categoty')">
          <span class="iconfont icon-leimupinleifenleileibie2-copy"></span>
        <p>分类</p>
      </span>
      <span @click="$router.push('/Ranking')">
          <span class="iconfont icon-paihang"></span>
        <p>排行</p>
      </span>
      <span @click="$router.push('/Praise/?gender='+gender)">
          <span class="iconfont icon-jingxuan"></span>
        <p>精选</p>
      </span>
    </div>
    <div class="lately">
      <span>最近阅读</span>
      <span v-if="book" @click="$router.push('/Book/' + book._id)">{{
        book.title
      }}</span>
      <span v-else class="boo">暂无阅读记录</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["gender", "book"],
  data() {
    return {
      bannerMale: [],
      bannerFemale: [],
      pursIcon: [],
    };
  },
  created() {
    this.axios.get("/banner.json").then((response) => {
      // console.log(response);
      this.bannerMale = response.data.male;
      this.bannerFemale = response.data.female;
    });
    this.axios.get("/Icon.json").then((response) => {
      // console.log(response);
      this.pursIcon = response.data.icon;
    });
  },
};
</script>
<style lang="less">
.van-nav-bar {
  background: #b83320;
}
.van-button--primary {
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid white;
  &.active {
    background: white;
    color: lightgray;
  }
}
.van-button--primary:nth-child(1) {
  border-radius: 15px 0 0 15px;
}
.van-button--primary:nth-child(2) {
  border-radius: 0 15px 15px 0;
}
.van-button--mini + .van-button--mini {
  margin: 0;
}
.swch {
  position: relative;
  background-color: white;
  .van-swipe {
    text-align: left;
    position: absolute;
    top: 18px;
    left: 0.75rem;
  }
  .van-search {
    margin: 0;
    background-color: white;

    .van-search__content {
      background-color: #e9e9e9;
    }
  }
}
.van-swipe__indicators {
  left: 93%;
}
.icon {
  display: flex;
  padding: 1.325rem 1.375rem;
  text-align: center;
  justify-content: space-between;
  /* 设置子元素在侧轴方向的位置 元素居中显示 */
  align-items: center;
  background: white;
  div {
    span {
      float: 1;
      padding: 12px 0;
      font-size: 25px;
    }
  }
  p {
    margin: 0;
    font-size: 0.32rem;
  }
}
.lately {
  height: 2.125rem;
  line-height: 2.125rem;
  background: white;
  font-size: 0.75rem;
  padding: 0 1.125rem;
  margin-bottom: 0.5rem;
  span:nth-child(1) {
    padding-right: 0.26667rem;
    border-right: 1px solid #000;
    color: rgb(172, 168, 168);
  }
  span:nth-child(2) {
    padding-left: 0.56667rem;
    color: red;
  }
}
</style>