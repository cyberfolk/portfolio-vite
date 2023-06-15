<script>
export default {
  name: "SiteHeader",
  components: {},
};
</script>

<template>
  <header id="app_header">

    <nav class="navbar navbar-expand-md navbar-dark sticky-top bg-dark shadow px-5">
      <a class="navbar-brand d-flex align-items-center" href="{{ url('/') }}">
        <img height="40" src="./../assets/image/cyberfolk-logo.png" alt="Personal Logo">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation'">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- navbar-toggler -->

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><router-link class="nav-link text-white" :to="{ 'name': 'home' }" aria-current="page">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link text-white" :to="{ 'name': 'contacts' }" aria-current="page">Contacts</router-link></li>
          <li class="nav-item"><router-link class="nav-link text-white" :to="{ 'name': 'projects' }" aria-current="page">Projects</router-link></li>
          <li class="nav-item"><router-link class="nav-link text-white" :to="{ 'name': 'about' }" aria-current="page">About</router-link></li>
        </ul>
      </div>
      <!-- navbar-collapse -->
    </nav>
  </header>
  <!-- /#app_header -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/app.scss';
</style>
