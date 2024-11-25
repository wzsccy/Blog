import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import BlogList from '../pages/BlogList.vue';
import BlogPost from '../pages/BlogPost.vue';
import About from '../pages/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/blogs', component: BlogList },
  { path: '/blogs/:id', component: BlogPost },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

