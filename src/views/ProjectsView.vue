<script>
import ProjectsList from "./../components/section/ProjectsList.vue";
export default {
    name: "ProjectView",
    components: {
        ProjectsList,
    }
};

</script>

<template>
    <div id="view_project">
        <div class="container my-5">
            <h1 class="my-5 f_skratch">Pojects</h1>
            <ProjectsList />
        </div>
        <!-- /.container -->
    </div>
    <!-- /#view_project -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>