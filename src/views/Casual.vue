<template>
  <div class="categoty" v-if="categoties">
    <Navigation> 分类 </Navigation>
    <h3>男生</h3>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="(item, index) in categoties.male"
        :key="index"
        @click="$router.push(`/categoty/Asubclass/${item.name}/?gender=male`);"
      >
        <h5>{{ item.name }}</h5>
        <p>{{ item.bookCount }}</p>
      </van-grid-item>
    </van-grid>
    <h3>女生</h3>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="(item, index) in categoties.female.slice(0 , 11)"
        :key="index"
        @click="$router.push(`/categoty/Asubclass/${item.name}/?gender=female`)"
      >
        <h5>{{ item.name }}</h5>
        <p>{{ item.bookCount }}</p>
      </van-grid-item>
    </van-grid>
    <h3>出版小说</h3>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="(item, index) in categoties.press"
        :key="index"
        @click="$router.push(`/categoty/Asubclass/${item.name}/?gender=press`)"
      >
        <h5>{{ item.name }}</h5>
        <p>{{ item.bookCount }}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
export default {
  props:["gender"],
  components: {
    Navigation,
  },
  data() {
    return {
      categoties: null,
    };
  },
  created() {
    this.axios.get("http://novel.kele8.cn/categories").then((response) => {
      // console.log(response.data);
      this.categoties = response.data;
    });
  },
  
};
</script>

<style lang="less">
.categoty {
  h3 {
    margin-left: 10px;
  }
  h5,
  p {
    margin: 0;
  }
  p {
    color: #ccc;
    font-size: 12px;
  }
}
</style>