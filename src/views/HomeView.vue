<script>
import home from "./../assets/data/home.json";
import JumbotroSection from "./../components/section/JumbotronSection.vue";
export default {
    name: "HomeView",
    components: { JumbotroSection },
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
    <section id="home_view">
        <div id="slider" class="d-flex">
            <button class="ms_arrow" style="width: 10%;" @click="prev()">&lsaquo;</button>
            <div class=" text-center" style="width: 80%;" @mouseover="stop()" @mouseleave="play()">
                <h5 class=" m-4">{{ home[activeImage].name }}</h5>
                <p class="pb-4">{{ home[activeImage].text }}</p>
            </div>
            <!-- /.content -->
            <button class="ms_arrow" style="width: 10%;" @click="next()">&rsaquo;</button>
        </div>
        <!-- /.slider -->
    </section>
    <!-- /#home_view -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>