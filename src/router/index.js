import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Project from '../views/Project.vue'
import ProjectsList from '../views/ProjectsList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/project/:slug',
    name: 'Project',
    component: Project
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
