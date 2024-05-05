import { createApp } from 'vue'
import './scss/style.scss'
import Home from './components/pages/Home.vue'
import ManageCards from './components/pages/ManageCards.vue'
import StudyCards from './components/pages/StudyCards.vue'

import Test from './components/pages/Test.vue'
import * as VueRouter from 'vue-router'


import App from './App.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/ManageCards', component: ManageCards },
    { path: '/StudyCards', component: StudyCards },
    { path: '/Test', component: Test },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
