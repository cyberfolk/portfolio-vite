<script>
export default {
    name: "SingleProjectView",
};

</script>

<template>
    <h1>SingleProject View</h1>
    {{ $route.params.slug }}
</template>

<style lang="scss" scoped>
@use '../assets/scss/app.scss';
</style>
