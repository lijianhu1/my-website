import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/backstage/pages/Index.vue';
import Login from '@/views/backstage/pages/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: 'resume',
      name: 'resume',
      component: () => import('@/views/backstage/pages/Resume.vue'),
    }, {
      path: 'blog',
      name: 'blog',
      component: () => import('@/views/backstage/pages/Blog.vue'),
    }, {
      path: '/',
      redirect: 'resume'
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '*',
    redirect: '/home'
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
