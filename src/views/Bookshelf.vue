<template>
  <div>
    <Navigation> 我的书架 </Navigation>
    <div v-if="SerialNumber">
      <ul >
        <ListItem
          v-for="item in SerialNumber"
          :key="item._id"
          :item="item"
        />
      </ul>
    </div>
  </div>
</template>
<script>
import ListItem from "@/components/ListItem.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  props: ["bookrack"],
  data() {
    return {
      SerialNumber: [],
    };
  },
  components: { Navigation,ListItem },
  created() {
    for (var i = 0; i < this.bookrack.length; i++) {
      this.axios
        .get("http://novel.kele8.cn/book-info/" + this.bookrack[i])
        .then((response) => {
          this.SerialNumber.push(response.data);
        });
    }
  },
};
</script>
<style lang="less">
</style>