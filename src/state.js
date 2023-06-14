import { reactive } from 'vue'
import axios from "axios";

export const state = reactive({
    loadingProjects: true,
    loadingProject: true,
    API_URL_BASE: "http://127.0.0.1:8000/",
    API_URL_PROJECTS: "api/projects?page=",
    API_URL_PROJECT: "api/projects",
    projects: [],
    links: [], // Used to pagination
    project: null,
    currentPage: 1,

    fetchProjects(url) {
        axios
            .get(url)
            .then(response => {
                this.projects = response.data.projects.data;
                this.links = response.data.projects.links;
                this.loadingProjects = false;
            })
            .catch(error => {
                this.error = error.message
            })
    },

    completePath(project) {
        return this.API_URL_BASE + 'storage/' + project.link_cover
    },

    getProject(slug) {
        const url = this.API_URL_BASE + this.API_URL_PROJECTS + "/" + slug;
        axios
            .get(url)
            .then(response => {
                if (response.data.succes) {
                    this.project = response.data.result;
                } else {

                }
            })
            .catch(error => {
                this.error = error.message
            })
    }
});