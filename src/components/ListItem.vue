<template>
  <li @click="$router.push('/Book/' + item._id)">
    <van-card
      :num="item.majorCate"
      :price="item.minorCate"
      :desc="item.shortIntro"
      :title="item.title"
      currency=""
      :lazy-load="true"
      :thumb="`http://statics.zhuishushenqi.com${item.cover}`"
    >
    </van-card>
  </li>
</template>
<script>
export default {
  props: ["item"],
};
</script>

<style lang="less">
li {
  .van-card {
    background: white;
    .van-card__thumb img {
      border-radius: 0;
    }
    .van-card__price-integer {
      font-size: 12px;
      padding-right: 0.375rem;
      // border-right: 1px solid #000;
    }
    .van-card__num {
      font-size: 12px;
      border: 1px solid #ff8400;
      color: #ff8400;
    }
  }
  .van-card__title {
    font-size: 16px;
    max-height: 16px;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  .van-card__desc {
    max-height: 40px;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
</style>