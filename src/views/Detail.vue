<template>
  <div v-if="book" class="book">
    <Navigation> 书籍详情 </Navigation>
    <div class="book-detail">
      <div class="imgs">
        <img :src="`http://statics.zhuishushenqi.com${book.cover}`" />
      </div>
      <div class="tite">
        <span>{{ book.title }}</span>
        <p>
          <span>{{ book.author }}</span> | {{ book.majorCate }} |
          {{ book.wordCount }}字
        </p>
      </div>
    </div>
    <div class="bookbut">
      <van-button
        type="danger"
        @click="removeBookrack($route.params.id)"
        v-if="bookrack.find((id) => id == $route.params.id)"
        >移除书架</van-button
      >
      <van-button
        plain
        type="primary"
        v-else
        @click="addBookrack($route.params.id)"
        >加入书架</van-button
      >
      <van-button
        type="danger"
        @click="
          $router.push(`/book/${$route.params.id}/Read`);
          $emit('update:chapter', chapter);
          $emit('update:Caddress', Caddress);
          $emit('update:index', number);
          $emit('update:book', book);
        "
        >开始阅读</van-button
      >
    </div>
    <ul class="late">
      <li>
        <span>追人气</span>
        <p>{{ book.latelyFollower }}</p>
      </li>
      <li>
        <span>读者留存率</span>
        <p>{{ book.retentionRatio }}%</p>
      </li>
      <li>
        <span>日更字数/天</span>
        <p>{{ book.serializeWordCount }}</p>
      </li>
    </ul>
    <div class="longIntro">
      <p :class="{ open: open }">{{ book.longIntro }}</p>
      <van-icon v-if="open" name="arrow-down" @click="shut" />
      <van-icon v-else name="arrow-up" @click="shut" />
    </div>
    <div
      class="bocatalog"
      @click="
        $router.push(`/book/${$route.params.id}/Catalog`);
        $emit('update:chapter', chapter);
      "
    >
      <span>目录</span>
      <span class="right">{{ book.lastChapter }}<van-icon name="arrow" /></span>
    </div>
    <h5>热门书评</h5>
    <BookReview
      v-for="(item, index) in Comment"
      :key="index"
      :item="item"
      :index="index"
    />
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import Navigation from "@/components/Navigation.vue";
import BookReview from "@/components/BookReview.vue";

export default {
  components: { Navigation, BookReview },
  data() {
    return {
      book: null,
      Comment: null,
      open: true,
      chapter: null,
      Caddress:[],
      number:0,
    };
  },
  methods: {
    shut() {
      if (this.open) {
        this.open = false;
      } else {
        this.open = true;
      }
    },
    ...mapMutations(["addBookrack", "removeBookrack"]),
  },
  computed: mapState(["bookrack"]),

  created() {
    this.axios
      .get("http://novel.kele8.cn/book-info/" + this.$route.params.id)
      .then((response) => {
        // console.log(response.data);
        this.book = response.data;
      });
    this.axios
      .get(
        "http://novel.kele8.cn/book/short-reviews?book=" + this.$route.params.id
      )
      .then((response) => {
        // console.log(response.data.docs);
        this.Comment = response.data.docs;
      });
    this.axios
      .get(
        "http://novel.kele8.cn/book-sources?view=summary&book=" +
          this.$route.params.id
      )
      .then((response) => {
        // console.log(response.data[0]._id);
        this.axios
          .get("http://novel.kele8.cn/book-chapters/" + response.data[0]._id)
          .then((res) => {
            // console.log(encodeURIComponent(res.data.chapters[0].link));
            this.chapter = res.data.chapters;
            for (let i = 0; i < this.chapter.length; i++) {
              this.Caddress.push(encodeURIComponent(this.chapter[i].link));
            }
          });
      });
  },
};
</script>

<style lang="less">
.book {
  background-color: white;
}
.book-detail {
  padding: 10px 17px;
  height: 5rem;
  div {
    float: left;
  }
  .imgs {
    img {
      width: 3.75rem;
      height: 5rem;
    }
  }
  .tite {
    margin-left: 4px;
    width: 13.8125rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    p {
      margin: 0;
      font-size: 12px;
      color: #999;
      span {
        color: #b93321;
      }
    }
  }
}
.bookbut {
  text-align: center;
  .van-button--plain {
    border-radius: 0;
    border: 1px solid #b93321;
    color: #b93321;
  }
  .van-button:nth-child(1) {
    margin-right: 0.875rem;
  }
  .van-button:nth-child(2) {
    background-color: #b93321;
    color: white;
    margin-left: 0.875rem;
  }
}
.longIntro {
  position: relative;
  p {
    font-size: 14px;
    margin: 16px;
    &.open {
      height: 60px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
  .van-icon {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
.late {
  display: flex;
  margin: 16px 0;
  border-top: #ececec solid 1px;
  border-bottom: #ececec solid 1px;
  li {
    flex: 1;
    text-align: center;
    padding: 16px 0;
    span {
      font-size: 12px;
      color: #999;
    }
    p {
      margin: 0;
    }
  }
}
.bocatalog {
  padding: 17px 0;
  border-top: #ececec solid 1px;
  border-bottom: #ececec solid 1px;
  .right {
    float: right;
    font-size: 12px;
    color: #999;
  }
}
</style>

