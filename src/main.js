import App from './App.vue'
import './assets/scss/app.scss'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
import { router } from './router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faGithubAlt } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faGithubAlt, faTelegram)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')