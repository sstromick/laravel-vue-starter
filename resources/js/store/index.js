import Vue from "vue";
import Vuex from "vuex";
import authModule from "./modules/auth";
import globalModule from "./modules/global";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.APP_URL;

export default new Vuex.Store({
    modules: {
        auth: authModule,
        global: globalModule
    }
});
