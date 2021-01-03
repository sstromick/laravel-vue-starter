import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Welcome",
        component: () =>
            import(/* webpackChunkName: "Welcome" */ "../views/App.vue")
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import(
                /* webpackChunkName: "register" */ "../views/auth/Register.vue"
            )
    },
    {
        path: "/forgotpassword",
        name: "ForgotPassword",
        component: () =>
            import(
                /* webpackChunkName: "forgotpassword" */ "../views/auth/ForgotPassword.vue"
            )
    },
    {
        path: "/resetpassword",
        name: "ResetPassword",
        component: () =>
            import(
                /* webpackChunkName: "resetpassword" */ "../views/auth/ResetPassword.vue"
            )
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/auth/Login.vue")
    },
    {
        path: "/user/profile",
        name: "UserProfile",
        meta: {
            requiresAuth: true
        },
        component: () =>
            import(/* webpackChunkName: "profile" */ "../views/auth/Show.vue")
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        meta: {
            requiresAuth: true
        },
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/Dashboard.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    store.commit("global/RESET_STATE");
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters["auth/isLoggedIn"]) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router;
