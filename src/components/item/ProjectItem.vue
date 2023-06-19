<script>
export default {
    name: "ProjectItem",
    props: {
        title: String,
        cover: String,
        description: String,
        type: Object,
        technologies: Array,
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
    <div class="card position-relative border-0 ms-shadow-white">
        <img v-if="cover" :src="cover" class="card-img" :alt="title" />
        <div v-if="type" class="badge position-absolute top-0 end-0 mt-2 me-2" :class="getBG(type.name)">{{ type.name }}</div>
        <h3 class="card-title position-absolute text-center w-100 mt-4">{{ title }}</h3>
        <div class="card-body position-absolute bottom-0">
            <div v-if="technologies">
                <span v-for="t in technologies" class="badge bg_darkless me-1">{{ t.name }}</span>
            </div>
            <p class="card-text px-1 mt-1 d-none">
                {{ description.slice(0, 150) + '...' }}
                <router-link class="nav-link d-inline text-primary fw-bold" :to="{ name: 'single-project', params: { slug: slug } }">Read More</router-link>
            </p>
        </div>
        <!-- /.body -->
    </div>
    <!-- /.card -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.card {
    aspect-ratio: 1.33;

    .card-img {
        height: 100%;
        object-fit: cover;
    }
}

.card:hover .card-img {
    filter: brightness(0.8);
}

.card:hover .card-text {
    display: block !important;
}
</style>
