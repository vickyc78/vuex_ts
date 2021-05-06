import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import userPosts from "../views/UserPosts.vue";
import Post from "../views/Post.vue";

Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/users"
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/users",
    name: "Users",
    component: Users
  },
  {
    path: "/userPosts/:userId?",
    name: "User Posts",
    component: userPosts
  },
  {
    path: "/post/:postId?",
    name: "Post",
    component: Post
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
