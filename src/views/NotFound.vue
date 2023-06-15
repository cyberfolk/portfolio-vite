<script>
export default {
    name: "NotFound",
}
</script>

<template>
    <div id="view_404">
        <div class="container text-center">
            <h1 class="text-center align-middle py-5 position-fixed start-50 top-50 translate-middle f_skratch">404 | NOT FOUND</h1>
            <span>Project not found</span>
            <router-link :to="{ 'name': 'home' }" class="d-block">&LeftArrow; Go back to projects</router-link>
        </div>
        <!-- /.container -->
    </div>
    <!-- /#view_404 -->
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>
