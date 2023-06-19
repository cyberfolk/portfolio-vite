<script>
export default {
  name: "SiteMain",
};

</script>

<template>
  <main id="app_main" class="m-5">
    <div class="container my-5">
      <h1 class="my-5 ms-text-impact">{{ this.$route.name }}</h1>
      <slot></slot>
    </div>
    <!-- /.container -->
  </main>
  <!-- /#app_main -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>