<template>
  <div class="Asubclass" v-if="Subcategory">
    <Navigation> {{ $route.params.name }} </Navigation>
    <div class="Grandchildren">
      <ul v-if="gender == 'male'">
        <li @click="Grandchildren = ''" :class="{ colo: Grandchildren == '' }">
          全部
        </li>
        <li>
          <div v-for="(item, index) in Subcategory.male" :key="index">
            <div v-if="item.major == $route.params.name">
              <span
                v-for="(ite, inde) in item.mins"
                :key="inde"
                @click="Grandchildren = ite"
                :class="{ colo: Grandchildren == ite }"
                >{{ ite }}</span
              >
            </div>
          </div>
        </li>
      </ul>
      <ul v-else-if="gender == 'female'">
        <li @click="Grandchildren = ''" :class="{ colo: Grandchildren == '' }">
          全部
        </li>
        <li>
          <div v-for="(item, index) in Subcategory.female" :key="index">
            <div v-if="item.major == $route.params.name">
              <span
                v-for="(ite, inde) in item.mins"
                :key="inde"
                :class="{ colo: Grandchildren == ite }"
                @click="Grandchildren = ite"
                >{{ ite }}</span
              >
            </div>
          </div>
        </li>
      </ul>
      <ul v-else>
        <li @click="Grandchildren = ''" :class="{ colo: Grandchildren == '' }">
          全部
        </li>
        <li>
          <div v-for="(item, index) in Subcategory.press" :key="index">
            <div v-if="item.major == $route.params.name">
              <span
                v-for="(ite, inde) in item.mins"
                :key="inde"
                :class="{ colo: Grandchildren == ite }"
                @click="Grandchildren = ite"
                >{{ ite }}</span
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="books">
      <ListItem v-for="item in TotalScore" :key="item._id" :item="item" />
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import ListItem from "@/components/ListItem.vue";
export default {
  props: ["gender"],
  components: {
    Navigation,
    ListItem,
  },
  data() {
    return {
      Subcategory: null,
      Grandchildren: "",
      TotalScore: null,
    };
  },
  created() {
    this.axios.get("http://novel.kele8.cn/sub-categories").then((response) => {
      // console.log(response);
      this.Subcategory = response.data;
    });
    this.axios
      .get(
        "http://novel.kele8.cn/category-info?gender=" +
          this.gender +
          "&type=hot&major=" +
          this.$route.params.name +
          "&minor=&start=0&limit=20"
      )
      .then((response) => {
        // console.log(response.data.books, this.Grandchildren);
        this.TotalScore = response.data.books;
      });
  },
  watch: {
    Grandchildren() {
      this.axios
        .get(
          "http://novel.kele8.cn/category-info?gender=" +
            this.gender +
            "&type=hot&major=" +
            this.$route.params.name +
            "&minor=" +
            this.Grandchildren +
            "&start=0&limit=20"
        )
        .then((response) => {
          // console.log(response.data.books, this.Grandchildren);
          this.TotalScore = response.data.books;
        });
    },
  },
};
</script>
<style lang="less">
.Asubclass {
  .Grandchildren {
    ul {
      padding: 0 0 10px 0;
      white-space: nowrap;
      overflow: hidden;
      overflow-x: scroll;
      overflow-y: hidden;
      li {
        display: inline-block;
        padding: 0 0 0 10px;
        div {
          span {
            padding: 0 10px;
            &.colo {
              color: red;
            }
          }
        }
        &.colo {
          color: red;
        }
      }
    }
  }
}
</style>