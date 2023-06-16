<script>
import jumbotron from "./../../assets/data/jumbotron.json";
export default {
    name: "JumbotronSection",
    components: {},
    data() {
        return {
            jumbotron: jumbotron,
        };
    },
    props: {
        page: String,
    },
};
</script>

<template>
    <section id="jumbotron" class="text-center pb-3 bg-primary">
        <div class="d-flex justify-content-center align-items-center lh-1 font-monospace pt-3">
            <div class="rotate_2 text_darkless" style="font-size: 150px;">&#60; </div>
            <div class="rotate_2">
                <h1> <span class='f_skratch text_darkless'> {{ jumbotron[this.page].dark1 }} </span>
                    {{ jumbotron[this.page].light1 }}
                </h1>
                <h1>
                    {{ jumbotron[this.page].light2 }}
                    <span class='f_skratch text_darkless'> {{ jumbotron[this.page].dark2 }} </span>
                </h1>
            </div>
            <div class="rotate_2 text_darkless pb-5" style="font-size: 150px;">/&#62; </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
</style>