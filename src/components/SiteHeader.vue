<script>
export default {
  name: "SiteHeader",
  components: {},
};
</script>

<template>
  <header id="app_header">
    <nav class="nav justify-content-center bg-dark shadow ">
      <router-link class="nav-link" :to="{ 'name': 'home' }" aria-current="page">Home</router-link>
      <router-link class="nav-link" :to="{ 'name': 'about' }" aria-current="page">About</router-link>
      <router-link class="nav-link" :to="{ 'name': 'contacts' }" aria-current="page">Contacts</router-link>
    </nav>
  </header>
  <!-- /#app_header -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/app.scss';
</style>
