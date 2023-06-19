<script>
import home from "./../assets/data/home.json";
import JumbotroSection from "./../components/section/JumbotronSection.vue";
import SiteMain from "./../components/SiteMain.vue";
export default {
    name: "HomeView",
    components: { JumbotroSection, SiteMain, },
    data() {
        return {
            activeImage: 0,
            home: home,
            autoPlay: null,
        };
    },
    methods: {
        next() {
            this.activeImage++;
            if (this.activeImage == this.home.length) {
                this.activeImage = 0;
            }
        },
        prev() {
            this.activeImage--;
            if (this.activeImage < 0) {
                this.activeImage = this.home.length - 1;
            }
        },
        play() {
            this.autoPlay = setInterval(this.next, 3000);
        },
        stop() {
            this.autoPlay = clearInterval(this.autoPlay);
        },
    },
    mounted() { this.play() }
};
</script>

<template>
    <JumbotroSection></JumbotroSection>
    <div id="slider" class="d-flex mb-5">
        <button class="ms-arrow start-0 top-50" @click="prev()">&lsaquo;</button>
        <div class="container" @mouseover="stop()" @mouseleave="play()" style="width: 80%; min-height: 800px; ">
            <h1 class="my-5 ms-text-impact">{{ this.$route.name }}</h1>
            <h1 class="text-white fs-1 mb-4">{{ home[activeImage].title }}</h1>
            <div class="row g-5">
                <div class="col-12 col-lg-6 order-lg-2 mt-lg-n6">
                    <div class="my_card">
                        <img class="w-100" :src="home[activeImage].path" alt="">
                    </div>
                </div>
                <!-- /.col-6 -->
                <div class="col-12 col-lg-6 order-lg-1">
                    <div class="my_card">
                        <p class="fs-3 mb-3">{{ home[activeImage].text1 }}</p>
                        <p class="fs-3 mb-3">{{ home[activeImage].text2 }}</p>
                        <p class="fs-3 mb-4">{{ home[activeImage].text3 }}</p>
                        <router-link class="btn btn-primary text-white w-50 fs-4" :to="{ 'name': 'projects' }">{{ home[activeImage].button }}</router-link>
                    </div>
                </div>
                <!-- /.col-6 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.content -->
        <button class="ms-arrow end-0 top-50" @click="next()">&rsaquo;</button>
    </div>
    <!-- /.slider -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>