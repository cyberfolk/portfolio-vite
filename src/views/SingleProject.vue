
<script>
import { state } from "../state";
export default {
    name: "SingleProject",
    data() {
        return { state, };
    },
    mounted() {
        state.getProject(this.$route.params.slug);
    },
};
</script>

<template>
    <div id="view_project">
        <div class="container" v-if="state.project">
            <h1 class="my-5 f_skratch">{{ state.project.title }}</h1>
            <h3>SingleProject View</h3>
        </div>
        <!-- /.container -->
    </div>
    <!-- /#view_project -->
</template> 

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>