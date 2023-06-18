<script>
export default {
  name: "SiteHeader",
}
</script>

<template>
  <header id="app_header">

    <nav class="navbar navbar-expand-md navbar-dark sticky-top bg-dark shadow px-5">
      <a class="navbar-brand" href="{{ url('/') }}">
        <img height="35" src="./../assets/image/cyberfolk-logo.png" alt="Personal Logo" class="pt-1">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" @click="visible = !visible">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- navbar-toggler -->

      <div class="ps-4 navbar-collapse collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item" style="width: 80px">
            <router-link class="nav-link text-white" active-class="active" :to="{ 'name': 'home' }" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item" style="width: 135px">
            <router-link class="nav-link text-white" active-class="active" :to="{ 'name': 'contacts' }">Contacts</router-link>
          </li>
          <li class="nav-item" style="width: 130px">
            <router-link class="nav-link text-white" active-class="active" :to="{ 'name': 'projects' }">Projects</router-link>
          </li>
          <li class="nav-item" style="width: 85px">
            <router-link class="nav-link text-white" active-class="active" :to="{ 'name': 'about' }">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- navbar-collapse -->
  </header>
  <!-- /#app_header -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/utilities' as *;

nav {
  z-index: 1; //Set just to make the fa-xmark-circle go above the navigation bar

  .nav-item {
    text-align: center;

    .nav-link:hover {
      color: $primary !important;
    }

    .active {
      @extend .text_impact;
      font-size: larger;
      animation: activate 0.05s linear;
    }

    @keyframes activate {
      0% {
        font-size: medium;
      }

      100% {
        font-size: larger;
      }
    }
  }
}
</style>
