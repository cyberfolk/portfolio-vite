<script>
import JumbotroSection from "./../components/section/JumbotronSection.vue";
export default {
    name: "AboutView",
    components: {
        JumbotroSection,
    }
};

</script>

<template>
    <JumbotroSection :page="'about'"></JumbotroSection>
    <section id="about_view">
        <div class="container my-5">
            <h1 class="my-5 f_skratch rotate_2">About</h1>
            <div class="row mb-5 py-3 g-5">
                <div class="col-6">
                    <div class="pe-5">
                        <h1 class="mb-2">Hello choom.</h1>
                        <h1 class="mb-4">My name is Andrea Ferrari.</h1>
                        <p class="fs-3 mb-2">I'm glad you got here. Thank you.</p>
                        <p class="fs-3 mb-3">This is my first work on a full-stack project alone, and this is my front-end application </p>
                        <p class="fs-3 mb-3">For the back-end side i have chosen the <strong>php/laravel</strong> which allows me to interact with the database via CRUD operations and to communicate with the frontend via API. </p>
                        <p class="fs-3 mb-2">For the front-end side i have chosen the <strong>VueJS</strong> technology to have an approach based on components </p>
                    </div>
                </div>
                <div class="col-6">
                    <img class="w-100 rounded shadow" src="../assets/image/about.gif" alt="">
                </div>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </section>
    <!-- /#about_view -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

img {
    height: 100%;
    object-fit: cover;
}
</style>
