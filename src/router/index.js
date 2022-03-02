import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import { onAuthStateChanged, getAuth } from "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: () =>
  //     import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () =>
  //     import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  // },
  // {
  //   path: "/list-users",
  //   name: "ListUsers",
  //   meta: {
  //     isAdmin: true,
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "list-users" */ "../views/ListUsers.vue"),
  // },
  {
    path: "/listing",
    name: "Listing",
    // meta: {
    //   isAuthenticated: true,
    // },
    component: () =>
      import(/* webpackChunkName: "listing" */ "../views/Listing.vue"),
  },
  {
    path: "/create",
    name: "Create",
    // meta: {
    //   isAuthenticated: true,
    // },
    component: () =>
      import(/* webpackChunkName: "create" */ "../views/Create.vue"),
  },
  {
    path: "/view/:id",
    name: "View",
    // meta: {
    //   isAuthenticated: true,
    // },
    component: () => import(/* webpackChunkName: "view" */ "../views/View.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   onAuthStateChanged(getAuth(), async (user) => {
//     if (to.matched.some((record) => record.meta.isAuthenticated && !user)) {
//       next("/login");
//     } else if (to.matched.some((record) => record.meta.isAdmin)) {
//       const tokenResult = await getAuth().currentUser.getIdTokenResult();
//       if (!tokenResult.claims.admin) {
//         next("/listing");
//       } else {
//         next();
//       }
//     } else {
//       next();
//     }
//   });
// });

export default router;
