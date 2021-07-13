import { createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress';
import Home from '../views/Home.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/adduser',
        name: 'CreateUser',
        component: () => import ('../components/CreateUserComponent.vue'),
    },
    {
        path: '/editUser/',
        name: 'EditUser',
        component: () => import ('../components/EditUserComponent.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start();
    }
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;