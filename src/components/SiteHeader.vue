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
        <img height="35" src="./../assets/image/cyberfolk-logo.png" alt="Personal Logo" class="pt-1">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation'">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- navbar-toggler -->

      <div class="ps-5 collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav gap-2">
          <li class="nav-item"><router-link class="nav-link text-white" active-class="active" :to="{ 'name': 'home' }" aria-current="page">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link text-white" active-class="active" :to="{ 'name': 'contacts' }" aria-current="page">Contacts</router-link></li>
          <li class="nav-item"><router-link class="nav-link text-white" active-class="active" :to="{ 'name': 'projects' }" aria-current="page">Projects</router-link></li>
          <li class="nav-item"><router-link class="nav-link text-white" active-class="active" :to="{ 'name': 'about' }" aria-current="page">About</router-link></li>
        </ul>
      </div>
      <!-- navbar-collapse -->
    </nav>
  </header>
  <!-- /#app_header -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

nav {
  z-index: 1; //Set just to make the fa-xmark-circle go above the navigation bar
}

.nav-link:hover {
  color: $primary !important;
}

.active {
  transform: rotate(-2deg);
  color: $primary !important;
  font-size: larger;
  font-family: 'Skratch Punk', sans-serif;
}
</style>
