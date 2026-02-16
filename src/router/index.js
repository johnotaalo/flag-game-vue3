import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Game from "@/pages/Game.vue";

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/game', component: Game, name: 'game' }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});