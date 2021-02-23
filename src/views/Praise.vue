<template lang="">
    <div>
    <Navigation> 精选好评 </Navigation>
     <ListItem
      v-for="item in this.$route.query.gender == 'male' ? pramale:prafemale"
      :key="item._id"
      :item="item"
    />
    </div>
</template>
<script>
import ListItem from "@/components/ListItem.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  components: { Navigation,ListItem },
  data() {
    return{
      prafemale: null,
      pramale:null
    }
  },
  created() {
    this.axios
      .get("http://novel.kele8.cn/rank/5a684551fc84c2b8efaab179")
      .then((response) => {
        // console.log(response.data.ranking.books);
        this.prafemale = response.data.ranking.books;
      });
       this.axios
      .get("http://novel.kele8.cn/rank/5a6844aafc84c2b8efaa6b6e")
      .then((response) => {
        // console.log(response.data.ranking.books);
        this.pramale = response.data.ranking.books;
      });
  },
};
</script>
<style lang="">
</style>