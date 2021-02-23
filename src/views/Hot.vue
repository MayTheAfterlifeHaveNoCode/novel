<template lang="">
    <div>
     <Navigation v-if="gender === 'male' && maleHot" :maleHot="maleHot"> 男生热门 </Navigation>
     <Navigation v-if="gender === 'female' && maleHot" :maleHot="feHot"> 女生热门 </Navigation>
      <Navigation v-if="gender === 'male' && maleFinish " :maleFinish="maleFinish"> 男生完本 </Navigation>
     <Navigation v-if="gender === 'female' && feFinish" :maleFinish="feFinish"> 女生完本 </Navigation>
     <ul v-if="gender === 'male' && maleHot">
         <ListItem 
          v-for="item in maleHot.books"
            :key="item._id"
            :item="item"
         />
     </ul>
     <ul v-if="gender === 'female' && feHot">
         <ListItem 
          v-for="item in feHot.books"
            :key="item._id"
            :item="item"
         />
     </ul>
     <ul v-if="gender === 'male' && maleFinish">
         <ListItem 
          v-for="item in maleFinish.books"
            :key="item._id"
            :item="item"
         />
     </ul>
     <ul v-if="gender === 'female' && feFinish">
         <ListItem 
          v-for="item in feFinish.books"
            :key="item._id"
            :item="item"
         />
     </ul>
    </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import ListItem from "@/components/ListItem.vue";
export default {
  props: ["maleHot","gender","maleFinish" , "feHot" , "feFinish"],
  components: { ListItem, Navigation },
};
</script>
<style lang="">
</style>