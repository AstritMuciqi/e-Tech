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
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/listing",
    name: "Listing",
    

    component: () =>
      import(/* webpackChunkName: "listing" */ "../views/Listing.vue"),
  },
  {
    path: "/view/:id",
    name: "View",
    component: () => import(/* webpackChunkName: "view" */ "../views/View.vue"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },

  // {
  //   path: "/listing",
  //   name: "Listing",

  //   component: () =>
  //     import(/* webpackChunkName: "listing" */ "../views/Listing.vue"),
  // },
  {
    path: "/admin",
    name: "Dashboard",
    children:[
      {
        path: "/admin/products",
        name: "Products",
    
        component: () =>
          import(/* webpackChunkName: "create" */ "../views/admin/Products.vue"),
          meta: {
            component: true,
          },
      },
      {
        path: "/admin/addProduct",
        name: "AddProduct",
    
        component: () =>
          import(/* webpackChunkName: "create" */ "../views/admin/AddProduct.vue"),
          meta: {
            component: true,
          },
      },
      {
        path: "/admin/editProduct/:id",
        name: "EditProduct",
    
        component: () =>
          import(/* webpackChunkName: "create" */ "../views/admin/EditProduct.vue"),
          meta: {
            component: true,
          },
      },
    ],
    component: () =>
      import(/* webpackChunkName: "create" */ "../views/admin/Dashboard.vue"),
      meta: {
        component: true,
      },
  },



  {
    path: "/admin/view/:id",
    name: "View",

    component: () =>
      import(/* webpackChunkName: "create" */ "../views/admin/View.vue"),
      meta: {
        component: true,
      },
  },

  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
