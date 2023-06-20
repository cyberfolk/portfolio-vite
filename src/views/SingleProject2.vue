<script>
import SiteMain from "./../components/SiteMain.vue";
import { state } from '../state';
export default {
    name: "SingleProject2",
    components: {
        SiteMain,
    },
    data() {
        return {
            state,
            image_modal: false,
        };
    },
    mounted() {
        state.getProject(this.$route.params.slug);
    },
}
</script>

<template>
    <SiteMain>
        <div class="py-5" v-if="state.project">
            <!-- Image Modal -->
            <div class="wrapper d-flex justify-content-center align-items-center" :class="image_modal ? 'd-inline-flex' : 'd-none'">
                <div class="ms-modal">
                    <button class="btn close-btn" @click="image_modal = !image_modal"> <font-awesome-icon icon="fa-solid fa-x" class="fa-2x p-2" /> </button>
                    <div class="ms-modal-img-wrapper"> <img :src="state.completePath(state.project)" :alt="state.project.title" class="ms-modal-img" loading="lazy"> </div>
                </div>
            </div>

            <!-- Main Content -->
            <section class="container">
                <div class="row row-cols-1 row-cols-xl-2">
                    <div class="col background shadow d-flex justify-content-center align-items-center" :style="'background-image: url(' + state.completePath(state.project) + ');'" v-if="state.completePath(state.project) !== null" @click="image_modal = !image_modal">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="zoom-icon fa-2x ms-text-dark" />
                    </div>
                    <div class="col h-100">
                        <div class="px-3 py-3">
                            <h1 class="display-5 text-center ms-text-light mb-3" id="title"> {{ state.project.title }} </h1>
                            <div class="d-flex justify-content-between align-items-center gap-3 pb-2">
                                <div class="d-flex justify-content-start align-items-baseline gap-3">
                                    <div class="text-center ms-text-light fs-5 mb-2" id="type"> {{ state.project?.type?.name }} </div>
                                </div>
                                <div class="d-flex gap-2">
                                    <div class="badge rounded-pill ms-bg#0C0C20 fw-light px-4 py-2" v-for="technology in state.project.technologies"> {{ technology.name }} </div>
                                </div>
                            </div>
                            <p class="ms-text-light fw-light" id="info"> {{ state.project?.info }} </p>
                            <div class="d-flex flex-column justify-content-between align-items-start gap-1">
                                <div class="ms-text-light fw-light"> Anno di sviluppo <span class="fs-5 ms-3" id="year"> {{ state.project.init }} </span> </div>
                                <div class="ms-text-light fw-light">Sviluppatore <span class="fs-5 ms-3" id="author"> Admin </span> </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center py-4" v-if="state.project.link">
                                <a class="btn btn-darkless px-5 py-3" :href="state.project.link" type="button" id="repository" v-if="state.project.link"> Guarda la Repository </a>
                                <a class="btn btn-darkless px-5 py-3" :href="state.project.link" type="button" id="website" v-if="state.project.link"> Guarda il sito </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="vh-100 vw-100 ms-bg-tertiary d-flex justify-content-center align-items-center" v-else>
            <h1 class="ms-text-light">Caricamento in corso...</h1>

        </div>
    </SiteMain>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;

    height: 100vh;
    width: 100vw;

    background-color: rgba(#0C0C20, .6);

    .ms-modal {
        height: 90vh;
        width: 90vW;
        display: flex;
        justify-content: center;
        align-items: center;

        .close-btn {
            background-color: #0C0C20;
            color: #dc3545;

            position: fixed;
            top: 2rem;
            right: calc(50% - 33px);
            z-index: 550;
            border-radius: .25rem;

            &:hover {
                background-color: $primary;
                color: $light;
            }
        }

        @media screen and (min-width: 768px) {
            height: 74vh;
            width: 76vw;

            .close-btn {
                top: 7rem;
            }
        }

        .ms-modal-img-wrapper {
            /*             height: 100%;
            width: 100%; */
            overflow: auto;
            text-align: center;

            .ms-modal-img {
                z-index: 540;
                /* zoom: .5; */
                object-fit: cover;
            }
        }
    }
}

.background {
    min-height: 400px;
    max-height: 40vh;

    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #0c0c0F;
    border: 1px solid #0C0C20;
    filter: brightness(80%);
    transition: .25s all ease-in-out;

    &:hover {
        filter: brightness(100%);

        .zoom-icon {
            visibility: visible;
        }
    }

    .zoom-icon {
        color: #0C0C20;
        visibility: hidden;
        transition: .25s all ease-in-out;
    }
}
</style>