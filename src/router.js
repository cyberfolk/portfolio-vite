import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue"
import AboutView from "./views/AboutView.vue"
import ContactsView from "./views/ContactsView.vue"
import SingleProject from "./views/SingleProject.vue"
import NotFound from "./views/NotFound.vue";
import ProjectsView from "./views/ProjectsView.vue";

/**
 * !  WARNING
 * If you change the route name you have to change the related field 
 * in this file: vite-boolfolio/src/assets/data/jumbotron.json
 */

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes: [
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView
        },
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
    ]
})
export { router }
