<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
import AnimatedLines from "./components/item/AnimatedLines.vue";
export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
    AnimatedLines,
  },
}
</script>

<template>
  <SiteHeader></SiteHeader>
  <AnimatedLines></AnimatedLines>
  <router-view></router-view>
  <SiteFooter></SiteFooter>
</template>

<style lang="scss">
@use './assets/scss/partials/variables' as *;
</style>
