<script>
export default {
  name: "SiteFooter",
  components: {},
};
</script>

<template>
  <footer id="app_footer" class="p-5 py-3 bg-dark fixed-bottom">
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <div> Andrea Ferrari | Boolean 2023 | &copy; powered by cyberfolk</div>
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex align-content-center gap-4">
        <li>
          <a href="https://t.me/Remigio377">
            <font-awesome-icon icon="fa-brands fa-telegram" size="lg" />
          </a>
        </li>
        <li>
          <a href="https://github.com/cyberfolk">
            <font-awesome-icon icon="fa-brands fa-github-alt" size="xl" />
          </a>
        </li>
      </ul>
    </div>

  </footer>
  <!-- /#app_footer -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.a:hover {
  color: $primary !important;
}

.a {
  font-size: larger;
}
</style>
