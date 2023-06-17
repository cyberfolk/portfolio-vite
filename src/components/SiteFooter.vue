<script>
export default {
  name: "SiteFooter",
};
</script>

<template>
  <footer id="app_footer" class="px-5 py-3 bg-dark px-0">
    <div class="container social pt-5 pb-2">

      <h3 class="text-center text_impact">Seguimi su...</h3>
      <div class="text-center py-4 d-flex justify-content-center gap-5">
        <a href="https://www.linkedin.com" target="_blank" role="button" class="square center_hv">
          <font-awesome-icon icon="fa-brands fa-linkedin-in" size="2x" />
        </a>
        <a href="https://github.com/cyberfolk" target="_blank" role="button" class="square center_hv">
          <font-awesome-icon icon="fa-brands fa-github" size="2x" />
        </a>
      </div>

      <p class="text-center fs-4">Per conoscermi meglio segui i miei profili Linkedin e GitHub.</p>
    </div>
    <hr>

    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <div> Andrea Ferrari | Boolean 2023 | &copy; powered by cyberfolk</div>
      <a class="text-decoration-none" href="https://www.youtube.com/watch?v=ZZ5LpwO-An4">
        <font-awesome-icon icon="fa-solid fa-heart" beat size="2x" />
      </a>
    </div>

  </footer>
  <!-- /#app_footer -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

footer {
  box-shadow: -4px 20px 20px 0px rgba(255, 255, 255, 0.1) inset;
}

.square {
  padding: 0.6rem;
  border-radius: 30%;
  box-shadow: -1px 1px 2px 1px #fff;

  &:hover {
    box-shadow: -2px 2px 4px 0px #fff;
    transform: scale(99%);
  }
}
</style>
