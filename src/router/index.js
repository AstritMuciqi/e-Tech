import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/useability",
    name: "Useability",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Useability.vue")
  },
  {
    path: "/notfound",
    name: "ErrorPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ErrorPage.vue")
  },
  {
    path: "/contact",
    name: "ContactForm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactForm.vue")
  },
  {
    path: "/listing",
    name: "Listing",

    component: () =>
      import(/* webpackChunkName: "listing" */ "../views/Listing.vue")
  },
  {
    path: "/cart",
    name: "ShoppingCart",

    component: () =>
      import(/* webpackChunkName: "listing" */ "../views/ShoppingCart.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
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
    path: "/view/:id",
    name: "View",
    component: () => import(/* webpackChunkName: "view" */ "../views/View.vue")
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "view" */ "../views/Checkout.vue")
  },
  {
    path: "/complete",
    name: "CompletedOrder",
    component: () =>
      import(/* webpackChunkName: "view" */ "../views/CompletedOrder.vue")
  },
  {
    path: "/orderdetails/:id",
    name: "OrderDetails",
    component: () =>
      import(/* webpackChunkName: "view" */ "../views/OrderDetails.vue")
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
    children: [
      {
        path: "/admin/products",
        name: "Products",
        component: () =>
          import(
            /* webpackChunkName: "create" */ "../views/admin/Products.vue"
          ),
        meta: {
          component: true
        }
      },
      {
        path: "/admin/contacts",
        name: "Contacts",
        component: () =>
          import(
            /* webpackChunkName: "create" */ "../views/admin/Contacts.vue"
          ),
        meta: {
          component: true
        }
      },
      {
        path: "/admin/orders",
        name: "Orders",
        component: () =>
          import(/* webpackChunkName: "create" */ "../views/admin/Orders.vue"),
        meta: {
          component: true
        }
      },
      {
        path: "/admin/addProduct",
        name: "AddProduct",

        component: () =>
          import(
            /* webpackChunkName: "create" */ "../views/admin/AddProduct.vue"
          ),
        meta: {
          component: true
        }
      },
      {
        path: "/admin/editProduct/:id",
        name: "EditProduct",

        component: () =>
          import(
            /* webpackChunkName: "create" */ "../views/admin/EditProduct.vue"
          ),
        meta: {
          component: true
        }
      },
      {
        path: "/admin/brands",
        name: "Brands",
        component: () =>
          import(/* webpackChunkName: "create" */ "../views/admin/Brands.vue"),
        meta: {
          component: true
        }
      },
      {
        path: "/admin/addBrand",
        name: "AddBrand",

        component: () =>
          import(
            /* webpackChunkName: "create" */ "../views/admin/AddBrand.vue"
          ),
        meta: {
          component: true
        }
      },
      {
        path: "/admin/editBrand/:id",
        name: "EditBrand",

        component: () =>
          import(
            /* webpackChunkName: "create" */ "../views/admin/EditBrand.vue"
          ),
        meta: {
          component: true
        }
      }
    ],
    component: () =>
      import(/* webpackChunkName: "create" */ "../views/admin/Dashboard.vue"),
    meta: {
      component: true
    }
  },

  {
    path: "/admin/view/:id",
    name: "View",

    component: () =>
      import(/* webpackChunkName: "create" */ "../views/admin/View.vue"),
    meta: {
      component: true
    }
  },
  {
    path: "*",
    name: "ErrorPage",

    component: () =>
      import(/* webpackChunkName: "create" */ "../views/ErrorPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  }
});

export default router;
