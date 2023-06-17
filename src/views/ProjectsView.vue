<script>
import JumbotroSection from "./../components/section/JumbotronSection.vue";
import SiteMain from "./../components/SiteMain.vue";
import ProjectsList from "./../components/section/ProjectsList.vue";
export default {
    name: "ProjectView",
    components: {
        ProjectsList,
        JumbotroSection,
        SiteMain,
    }
};

</script>

<template>
    <JumbotroSection></JumbotroSection>
    <SiteMain>
        <ProjectsList />
    </SiteMain>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>