import { createApp } from 'vue'
import './scss/style.scss'
import Home from './components/pages/Home.vue'
import ManageDecks from './components/pages/ManageDecks.vue'
import ModifyDeck from './components/elements/ModifyDeck.vue'
import StudyCards from './components/pages/StudyCards.vue'

import Test from './components/elements/WarningBox.vue'
import * as VueRouter from 'vue-router'


import App from './App.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/ManageDecks', component: ManageDecks },
    { path: '/StudyCards', component: StudyCards },
    { path: '/ModifyDeck', component: ModifyDeck }, //testing
    { path: '/Test', component: Test }, //testing
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
