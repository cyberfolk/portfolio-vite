<script>
export default {
    name: "NotFound",
}
</script>

<template>
    <div class="container text-center">
        <h1>404</h1>
        <span>Project not found</span>
        <router-link :to="{ 'name': 'home' }" class="d-block">&LeftArrow; Go back to projects</router-link>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/app.scss';
</style>
