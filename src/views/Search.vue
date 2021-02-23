<template lang="">
    <div class="search" v-if="HotPush">
       <Navigation>
           搜索
       </Navigation>
       <van-search
          v-model="something"
          show-action
          placeholder="请输入搜索内容"
        >
          <template #action>
            <div @click="trues=true">搜索</div>
          </template>
        </van-search>
        <div v-if="!something" class="divffs">
            <h3>热门推荐</h3>
            <ul class="HotPush">
              <li v-for="(item , index) in HotPush" :key="index" @click="something = item.titem;trues=true; his()">{{item.titem}}</li>
            </ul>
            <div class="namede">
              <h3>搜索历史</h3>
              <span @click="dele()"><van-icon name="delete-o" />清除历史</span>
            </div>
            <ul class="hist">
              <li v-for="(item , index) in history" :key="index" @click="his()">
                <span @click="something = item; trues=true">{{item}}</span></li>
            </ul>
        </div>
        <div v-if="something != '' && trues == false" class="recommend">
          <ul>
            <li v-for="(item , index) in recommend" :key="index" @click="something = item.title; trues=true">{{item.title}}</li>
          </ul>
        </div>
        <div v-if="trues && something != ''">
          <ListItem
            v-for="item in recommend"
            :key="item._id"
            :item="item"
          />
        </div>
    </div>
</template>
<script>
import ListItem from "@/components/ListItem.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  props: ["HotPush"],
  components: {
    Navigation,
    ListItem,
  },
  data() {
    return {
      something: "",
      trues: false,
      recommend: null,
      history: [],
    };
  },
  methods: {
    his() {
      if (this.history.indexOf(this.something) == -1) {
        this.history.push(this.something);
      }
    },
    dele: function () {
      this.history = "";
    },
  },
  watch: {
    something() {
      if (this.something != "") {
        this.axios
          .get("http://novel.kele8.cn/search?keyword=" + this.something)
          .then((response) => {
            // console.log(response);
            this.recommend = response.data.books;
          });
      }
    },
  },
};
</script>
<style lang="less">
.search {
  min-height: 568px;
  height: 100%;
  background-color: white;
  h3 {
    color: #6b6b6b;
  }
  .divffs {
    .HotPush {
      height: 120px;
      li {
        float: left;
        color: #9b9ba3;
        background-color: #efeff4;
        border-radius: 20px;
        margin: 10px;
        padding: 0 10px;
      }
    }
  }
  .recommend {
    ul {
      li {
        margin: 10px;
      }
    }
  }
  .hist {
    li {
      margin: 0 10px;
      padding: 10px 0;
      border-bottom: 1px solid #f6f6f3;
      span {
        color: #9b9ba3;
        &.delete {
          float: right;
        }
      }
    }
  }
  .namede {
    margin-top: 20px;
    h3 {
      display: inline-block;
      margin: 0;
    }
    span {
      float: right;
      color: #9b9ba3;
    }
  }
}
</style>