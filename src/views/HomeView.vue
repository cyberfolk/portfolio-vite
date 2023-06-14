<script>
import { state } from "../state.js";
import ProjectsList from "./../components/section/ProjectsList.vue";
export default {
    name: "HomeView",
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
    <div id="view_home" class="m-5">
        <h1>Home View</h1>
        <ProjectsList :projects="state.projects" />
    </div>
    <!-- /#view_home -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/app.scss';
</style>
