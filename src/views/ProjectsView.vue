<script>
import JumbotroSection from "./../components/section/JumbotronSection.vue";
import ProjectsList from "./../components/section/ProjectsList.vue";
export default {
    name: "ProjectView",
    components: {
        ProjectsList,
        JumbotroSection,
    }
};

</script>

<template>
    <JumbotroSection></JumbotroSection>
    <section id="project_view">
        <div class="container my-5">
            <h1 class="my-5 text_impact">Projects</h1>
            <ProjectsList />
        </div>
        <!-- /.container -->
    </section>
    <!-- /#project_view -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>