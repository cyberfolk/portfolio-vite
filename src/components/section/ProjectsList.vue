<script>
import { state } from "../../state";
import ProjectItem from "../item/ProjectItem.vue";
export default {
    name: "ProjectsList",
    components: { ProjectItem },
    data() {
        return { state, };
    },
    mounted() {
        state.fetchProjects(state.API_URL_BASE + state.API_URL_PROJECTS + state.currentPage);
    },
};
</script>

<template>
    <section id="projects_list">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
            <div class="col" v-for="p in state.projects">
                <ProjectItem
                    :title="p.title"
                    :cover="state.completePath(p)"
                    :description="p.description"
                    :type="p.type"
                    :slug="p.slug" />
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->

        <nav class="mt-5 mb-4">
            <ul class="pagination">
                <li class="page-item" v-for="link in  state.links" :class="link.active ? 'active' : ''" @click="state.fetchProjects(link.url)">
                    <a class="page-link" href="#" v-html="link.label"></a>
                </li>
            </ul>
        </nav>

    </section>
    <!-- /#projects_list -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/app.scss';
</style>
