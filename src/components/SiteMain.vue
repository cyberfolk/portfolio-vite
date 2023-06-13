<script>
import { state } from "../state.js";
import ProjectsList from "./section/ProjectsList.vue";
export default {
  name: "SiteMain",
  components: {
    ProjectsList,
  },
  data() {
    return { state, };
  },
  mounted() {
    state.getProjects();
  },
};

</script>

<template>
  <main id="app_main" class="m-5">
    <ProjectsList :projects="state.projects" />
  </main>
  <!-- /#app_main -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/app.scss';
</style>
