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
    <SiteMain>
        <div id="slider" class="d-flex ">
            <button class="ms_arrow start-0" @click="prev()">&lsaquo;</button>
            <button class="ms_arrow end-0" @click="next()">&rsaquo;</button>
            <div @mouseover="stop()" @mouseleave="play()">
                <div class="row g-5">
                    <div class="col-6 px-2">
                        <div class="card bg-transparent border-0">
                            <div class="card-body">
                                <h1 class="text-white fs-1 mx-0">{{ home[activeImage].title }}</h1>
                                <p class="card-text fs-3">{{ home[activeImage].text }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- /.col-6 -->
                    <div class="col-6">
                        <div class="card bg-transparent border-0">
                            <img class="card-img-top" :src="home[activeImage].path" alt="">
                        </div>
                    </div>
                    <!-- /.col-6 -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.content -->
        </div>
        <!-- /.slider -->
    </SiteMain>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>