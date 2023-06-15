
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
    <div class="container" v-if="state.project">
        <h1>{{ state.project.title }}</h1>
        <h3>SingleProject View</h3>
        {{ this.$route.params.slug }}
    </div>
</template> 

<style lang="scss" scoped>
@use '../assets/scss/app.scss';
</style>