import { reactive } from 'vue'
import axios from "axios";

export const state = reactive({
    loadingProjects: true,
    loadingProject: true,
    API_URL_BASE: "http://127.0.0.1:8000/",
    API_URL_PROJECTS: "api/projects",
    API_URL_PROJECT: "api/projects",
    projects: [],
    project: null,

    getProjects() {
        const url = this.API_URL_BASE + this.API_URL_PROJECTS;
        axios
            .get(url)
            .then(response => {
                this.projects = response.data.projects;
                this.loadingProjects = false;
                console.log(this.projects);
            })
            .catch(error => {
                this.error = error.message
            })
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