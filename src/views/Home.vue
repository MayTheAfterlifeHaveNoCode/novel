<template>
  <div class="home">
    <PursueBooks :gender="gender" :HotPush="HotPush" />
    <Neck :gender="gender" :book="book" />
    <HomeList :booklists="maleHot" v-if="gender === 'male'">
      男生热门
    </HomeList>
    <HomeList :booklists="feHot" v-else> 女生热门 </HomeList>
    <div
      class="more"
      @click="
        $router.push('/Hot');
        finishEmpty();
        $emit('update:maleHot', { maleFinish, maleHot, gender , feFinish , feHot});
      "
    >
      查看更多>
    </div>
    <HomeList :booklists="maleFinish" v-if="gender === 'male'" :judge="judge">
      男生完本
    </HomeList>
    <HomeList :booklists="feFinish" v-else :judge="judge">
      女生完本
    </HomeList>
    <div
      class="more"
      @click="
        $router.push('/Hot');
        HotEmpty();
        $emit('update:maleHot', { maleFinish, maleHot, gender ,  feHot, feFinish});
      "
    >
      查看更多>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import PursueBooks from "@/components/PursueBooks.vue";
import Neck from "@/components/Neck.vue";
import HomeList from "@/components/HomeList.vue";

export default {
  props: ["HotPush", "book", "judge"],
  components: {
    PursueBooks,
    HomeList,
    Neck,
  },
  data() {
    return {
      gender: "male",
      maleHot: null,
      maleFinish: null,
      feHot:null,
      feFinish:null,
    };
  },
  computed: {
    ...mapState(["rankCategory"]),
  },
  methods: {
    HotEmpty() {
      if (this.maleHot) {
        this.maleHot = null;
      }
      if(this.feHot){
        this.feHot = null;

      }
    },
    finishEmpty() {
      if (this.maleFinish) {
        this.maleFinish = null;
      }
      if (this.feFinish) {
        this.feFinish = null;
      }
    },
  },
  created() {
    
    this.axios
      .get("http://novel.kele8.cn/rank/54d42d92321052167dfb75e3")
      .then((response) => {
        // console.log(response.data.ranking.books);
        this.maleHot = response.data.ranking;
      });
      this.axios
      .get("http://novel.kele8.cn/rank/54d43437d47d13ff21cad58b")
      .then((response) => {
        // console.log(response.data.ranking.books);
        this.feHot = response.data.ranking;
      });
      
    this.axios
      .get("http://novel.kele8.cn/rank/564eb878efe5b8e745508fde")
      .then((response) => {
        this.maleFinish = response.data.ranking;
      });
      this.axios
      .get("http://novel.kele8.cn/rank/564eb8a9cf77e9b25056162d")
      .then((response) => {
        this.feFinish = response.data.ranking;
      });
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.gender = to.query.gender || "male";
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.gender = to.query.gender || "male";
    next();
  },
};
</script>
<style lang="less">
.more {
  text-align: center;
  background: white;
  padding: 0 1rem;
  height: 2.375rem;
  line-height: 2.375rem;
  border-top: 1px solid rgb(207, 203, 203);
  color: #b93321;
  font-size: 12px;
}
.home {
  .van-search {
    margin-top: 5px;
    background-color: rgba(0, 0, 0, 0);
    .van-search__content {
      background-color: white;
    }
    .van-search__action {
      background-color: white;
      padding: 0;
      margin: 0 8px;
    }
  }
  .Searchit {
    padding: 0 5px;
  }
  .bott {
    margin-top: 20px;
    display: flex;
    span {
      text-align: center;
      flex: 1;
      margin-bottom: 20px;
    }
  }
}
</style>