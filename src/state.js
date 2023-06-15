import { reactive } from 'vue'
import { router } from './router';
import axios from "axios";

export const state = reactive({
    loading_pagination: true,
    loading_project: true,
    API_URL_BASE: "http://127.0.0.1:8000/",
    API_PAGINATION: "api/projects?page=",
    API_PROJECT: "api/projects/",
    projects: [],
    links: [], // Used to pagination
    project: null,
    currentPage: 1,

    fetchProjects(url) { // Require full path because pagination works with full path
        axios
            .get(url)
            .then(response => {
                this.projects = response.data.projects.data;
                this.links = response.data.projects.links;
                this.loading_pagination = false;
            })
            .catch(error => {
                this.error = error.message
            })
    },

    completePath(project) {
        return this.API_URL_BASE + 'storage/' + project.link_cover
    },

    getProject(endUrl) {
        const url = this.API_URL_BASE + this.API_PROJECT + endUrl
        console.log(router);
        axios
            .get(url)
            .then(response => {
                if (response.data.succes) {
                    this.project = response.data.result;
                    this.loading_project = false;
                } else {
                    console.log('success false');
                    console.log(router.path);
                    router.push({
                        name: 'NotFound',
                        // preserve current path and remove the first char to avoid the target URL starting with `//`
                    })
                }
            })
            .catch(error => {
                this.error = error.message
            })
    }
});