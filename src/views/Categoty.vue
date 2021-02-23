<template lang="">
  <div>
    <router-view :gender="gender"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return { gender: null };
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
<style lang="">
</style>