<script>
import ProjectItem from "../item/ProjectItem.vue";
export default {
    name: "ProjectsList",
    components: { ProjectItem, },
    props: { projects: Array, },
};
</script>
<template>
    <section id="projects_list">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-3">
            <div class="col" v-for="p in projects">
                <ProjectItem
                    :title="p.title"
                    :cover="p.link_cover"
                    :overview="p.description" />
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </section>
    <!-- /#projects_list -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/app.scss';
</style>
