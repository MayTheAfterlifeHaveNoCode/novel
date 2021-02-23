<template>
  <div class="Ranking">
    <Navigation> 排行榜 </Navigation>
    <ul class="tabbar">
      <li :class="{ active: type == 'epub' }">
        <span @click="$router.push('/ranking?type=epub')">出版</span>
      </li>
      <li :class="{ active: type == 'female' }">
        <span @click="$router.push('/ranking?type=female')">女频</span>
      </li>
      <li :class="{ active: type == 'male' }">
        <span @click="$router.push('/ranking?type=male')">男频</span>
      </li>
    </ul>

    <div class="tab-content">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(cat, index) in rankCategory[type]"
          :key="index"
          :title="cat.shortTitle"
        />
      </van-sidebar>

      <ul class="right">
        <van-skeleton title avatar :row="3" :loading="loading">
          <template v-if="ranking">
            <ListItem
              v-for="book in ranking.books"
              :key="book._id"
              :item="book"
            />
          </template>
        </van-skeleton>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Navigation from "@/components/Navigation.vue";
import ListItem from "@/components/ListItem.vue";
export default {
  components: {
    Navigation,
    ListItem,
  },
  data() {
    return {
      loading: false,
      categoties: null,
      type: "epub",
      activeKey: 0,
      ranking: null,
    };
  },
  computed: {
    ...mapState(["rankCategory"]),
  },
  methods: {
    getRanking: function (id) {
      this.loading = true;
      this.axios.get("http://novel.kele8.cn/rank/" + id).then((response) => {
        // console.log(response);
        // console.log(id);
        this.ranking = response.data.ranking;
        this.loading = false;
      });
    },
    getLists: function () {
      this.getRanking(this.rankCategory[this.type][this.activeKey]._id);
    },
    typeEpub: function () {
      // if(this.$router)
    },
  },
  created() {
    this.getLists();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.type = to.query.type || "male";
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.type = to.query.type || "male";
    next();
  },
  watch: {
    type: function () {
      this.activeKey = 0;
      this.getLists();
    },
    activeKey: function () {
      this.getLists();
    },
  },
};
</script>

<style lang="less">
.tabbar {
  display: flex;
  li {
    flex: 1;
    text-align: center;
    line-height: 40px;
    background-color: white;
    &.active {
      color: red;
    }
  }
}
.tab-content {
  display: flex;
  .van-sidebar {
    height: calc(100vh - 40px);
    overflow-y: scroll;
  }
  .right {
    flex: 1;
    height: calc(100vh - 40px);
    overflow-y: scroll;
  }
}
</style>