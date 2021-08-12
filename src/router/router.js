import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import routes from './routes.js';

var router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;