<template>
  <li class="Review" :class="index === 0 ? '' : 'renie'">
    <img :src="`http://statics.zhuishushenqi.com${item.author.avatar}`" />
    <div class="Renright">
      <span>{{ item.author.nickname }}</span>
      <div>
        <span class="iconfont" v-for="(innt , indee) in 5" :key="indee" :class="indee >= item.rating ?'icon-xing' : 'icon-xingxing' "></span
        >
      </div>
      <p>{{ item.content }}</p>
    </div>
  </li>
</template>
<script>
export default {
  props: ["item", "index"],
};
</script>
<style lang="less">
.Review {
  margin: 0 16px;
  border-bottom: 1px solid #ececec;
  position: relative;
  &.renie {
    padding-top: 20px;
  }
  img {
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
    position: absolute;
  }
  span {
    font-size: 12px;
    color: #999;
  }
  .Renright {
    margin-left: 40px;
    .iconfont{
      margin-left: 2px;
      // background: red;
    }
    .icon-xingxing{
      color: rgb(255, 187, 0);
    }
    .icon-xing{
      color: rgb(255, 230, 0);
    }
  }
  p{
    margin: 0 0 16px 0;
  }
}
</style>