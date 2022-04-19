import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog'
import SinglePost from './pages/SinglePost'
import ErrorPage from './pages/ErrorPage';

const routes = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },

        {
            path : '/chi-siamo',
            name: 'about',
            component: About,
        },
        {
            path: '/contatti',
            name: 'contact',
            component: Contact,
        },
        {
            path : '/blog',
            name: 'blog',
            component: Blog,
        },
        {
            path: '/blog/:slug',
            name: 'single-post',
            component: SinglePost,
        },
        {
            path: '/*',
            name: 'errorPage',
            component: ErrorPage
        }
    ]
});

export default routes;