import Vue from "vue";

import router from "./router";
import vuetify from "./plugins/vuetify";
import "./plugins/moment";
import store from "./store";
import "./plugins/axios";

//Main pages
import App from "./views/App.vue";

const app = new Vue({
    router,
    vuetify,
    store,
    render: h => h(App),
    el: "#app"
});
