
<script>
import { state } from "../state";
import SiteMain from "./../components/SiteMain.vue";
export default {
    name: "SingleProject",
    components: {
        SiteMain,
    },
    data() {
        return { state, };
    },
    mounted() {
        state.getProject(this.$route.params.slug);
    },
};
</script>

<template>
    <SiteMain>
        <!-- <h1 class="align-self-center">{{ $route.params.slug }}</h1> -->
        <div v-if="state.project" class="row g-5">
            <div class="col-6">
                <div class="card">
                    <div v-if="state.project" class="card">
                        <img class="card-img-top" :src="state.completePath(state.project)" alt="Card image cap" />
                        <div class="card-body">
                            <h2 class="mb-2">Repo: {{ state.project.link }}</h2>
                            <h3 class="mb-2">Date: {{ state.project.init }}</h3>
                            <h4 class="mb-2">
                                Type:
                                <div v-if="state.project.type" class="badge">{{ state.project.type.name }}</div>
                                <div v-else>N/A</div>
                            </h4>
                            <div v-if="state.project.technologies" class="d-flex align-items-center mb-2">
                                <h4>Technologies:</h4>
                                <ul v-for="technology in state.project.technologies">
                                    <li class="badge"> {{ technology.name }} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card"></div>
            </div>
        </div>
    </SiteMain>
</template> 

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

h2,
h3,
h4 {
    margin: 0;
}

.card {
    background-color: rgba($color: #e9e9e9, $alpha: 0.2);
    border: 0;
    color: white;
}

.badge {
    background-color: rgb(0, 102, 255);
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: 0.5rem;

    li {
        background-color: red !important;
    }
}
</style>