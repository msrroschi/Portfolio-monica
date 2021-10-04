import Vue from "vue";
import VueRouter from "vue-router";
import Work from "../views/Work.vue";
import Contact from "../views/Contact.vue";
import Project from "../views/Project.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/",
    name: "About me",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/project/:projectName",
    name: "Project",
    component: Project,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
