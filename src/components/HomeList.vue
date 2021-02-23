<template>
  <div class="List" v-if="booklists">
    <h3><slot></slot></h3>
    <ListItem
      v-for="item in booklists.books.slice(0 , 4)"
      :key="item._id"
      :item="item"
    />
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
export default {
  props: ["booklists"],
  components: {
    ListItem,
  },
};
</script>
<style lang="less">
.List {
  background: white;
  margin-top: 1.125rem;
  padding-top: .1rem;
  h3 {
    border-left: 3px solid red;
  }
}
</style>