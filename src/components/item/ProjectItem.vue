<script>
export default {
    name: "ProjectItem",
    props: {
        title: String,
        cover: String,
        description: String,
    },

};
</script>
<template>
    <div class="card position-relative">
        <img v-if="cover" :src="cover" class="card-img" :alt="title" />
        <div class="card-body h-100 w-100 text-center">
            <h5 class="card-title mb-0">{{ title }}</h5>
            <!-- /.ms_title -->
            <p class="card-text ms_description">{{ description }}</p>
            <!-- /.ms_description -->
            <!-- <router-link class="nav-link" :to="{ name: 'single-project', param: { 'slug': post.slug } }">Read More</router-link> -->
        </div>
        <!-- /.body -->
    </div>
    <!-- /.card -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/app.scss';

.card {
    position: relative;
    aspect-ratio: 1.33;

    .card-img {
        position: relative;
        z-index: 2;
        height: 100%;
        object-fit: cover;
    }

    .card-body {
        position: absolute;
        z-index: 1;
        overflow-y: auto;

        /*         color: $light;
 */
        /* width */
        &::-webkit-scrollbar {
            width: 20px;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            border-radius: 40px;
            box-shadow: inset 0 0 20px 20px black;
            border: solid 6px transparent;
        }


        .ms_description {
            font-style: italic;
            font-size: 0.8rem;
            text-align: justify
        }
    }
}

.card:hover .card-img {
    filter: brightness(0.2);
}

.card:hover .card-body {
    z-index: 2;
}
</style>
