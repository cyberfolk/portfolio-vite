<script>
import { state } from "../state";
import ProjectItem from "./../components/item/ProjectItem.vue";
import JumbotroSection from "./../components/section/JumbotronSection.vue";
import SiteMain from "./../components/SiteMain.vue";
export default {
    name: "ProjectView",
    components: {
        JumbotroSection, SiteMain, ProjectItem,
    },
    data() { return { state, }; },
    mounted() { state.fetchProjects(state.API_URL_BASE + state.API_PAGINATION + state.currentPage); },
};
</script>

<template>
    <JumbotroSection></JumbotroSection>
    <SiteMain>
        <section id="projects_list" class="mb-5 py-3">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                <div class="col" v-for="p in state.projects">
                    <ProjectItem
                        :title="p.title"
                        :cover="state.completePath(p)"
                        :info="p.info"
                        :type="p.type"
                        :technologies="p.technologies"
                        :slug="p.slug" />
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
            <nav class="my-5 text-center">
                <ul class="pagination justify-content-center">
                    <li v-for="link in  state.links" class="page-item shadow" :class="link.active ? 'active' : ''" @click="state.fetchProjects(link.url)">
                        <a class="page-link bg-dark border-0 text-primary" href="#" v-html="link.label"></a>
                    </li>
                </ul>
            </nav>
        </section>
        <!-- /#projects_list -->
    </SiteMain>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>