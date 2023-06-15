<script>
export default {
    name: "ProjectItem",
    props: {
        title: String,
        cover: String,
        description: String,
        type: Object,
        slug: String,
    },
    methods: {
        getBG(type) {
            switch (type) {
                case 'full-stack': return 'bg-success';
                case 'back-end': return 'bg-warning';
                case 'front-end': return 'bg-danger';
            }
        }
    }

};
</script>
<template>
    <div class="card position-relative">
        <img v-if="cover" :src="cover" class="card-img-top" :alt="title" />
        <div v-if="type" class="badge position-absolute top-0 end-0 mt-1 me-1" :class="getBG(type.name)">{{ type.name }}</div>
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description.slice(0, 150) + '...' }}</p>
        </div>
        <!-- /.body -->
        <div class="card-footer text-primary text-center">
            <router-link class="nav-link" :to="{ name: 'single-project', params: { slug: slug } }">Read More</router-link>
        </div>
    </div>
    <!-- /.card -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/app.scss';

.card {
    aspect-ratio: 1.33;

    .card-img {
        height: 100%;
        object-fit: cover;
    }

    .card-body {
        height: 200px;
    }
}
</style>
