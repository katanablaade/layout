import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: () => import('../views/MainPage') },
  {
    name: 'tours',
    path: '/single-page/:id',
    component: () => import('../views/SinglePage'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
