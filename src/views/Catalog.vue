<template >
  <div class="Catalog">
    <Navigation> 书籍目录 </Navigation>

    <ul>
      <li><h3>目录</h3></li>
      <li
        v-for="(item, index) in chapter"
        :key="index"
        @click="
          $router.push(`/book/${$route.params.id}/Read`);
          $emit('update:Caddress', Caddress);
          $emit('update:index', index);
        "
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: { Navigation },
  props: ["chapter"],
  data() {
    return {
      Caddress: [],
    };
  },
  created() {
    for (let i = 0; i < this.chapter.length; i++) {
      this.Caddress.push(encodeURIComponent(this.chapter[i].link));
    }
  },
};
</script>
<style lang="less">
.Catalog {
  ul {
    li {
      width: 100%;
      height: 41px;
      line-height: 41px;
      border-bottom: 1px solid #f8f8f8;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      h3 {
        margin: 0;
      }
    }
  }
}
</style>