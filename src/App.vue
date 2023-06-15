<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
import LinesItem from "./components/item/LinesItem.vue";
export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
    LinesItem,
  },
}
</script>

<template>
  <SiteHeader></SiteHeader>
  <LinesItem></LinesItem>
  <router-view></router-view>
  <SiteFooter></SiteFooter>
</template>

<style lang="scss">
@use './assets/scss/partials/variables' as *;
</style>
