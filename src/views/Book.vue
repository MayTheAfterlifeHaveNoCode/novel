<template lang="">
  <div>
    <router-view
    @update:chapter="chapter = $event"
    @update:Caddress="Caddress = $event" 
    @update:index="index = $event" 
    @update:book="$emit('update:book', $event)"
    :chapter="chapter" 
    :Caddress="Caddress" 
    :book="book"
    :index="index"></router-view>
  </div>
</template>
<script>
export default {
  props:["book"],
  data() {
    return {
      chapter: null,
      Caddress: null,
      index: null,
    };
  },
};
</script>
<style lang="">
</style>