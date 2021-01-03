"use strict";

import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL =
    process.env.VUE_APP_API_URL || process.env.apiUrl || "";

let _axios = axios.create({
    withCredentials: true
});

_axios.interceptors.request.use(request => {
    request.headers.common["Accept"] = "application/json";
    request.headers.common["Content-Type"] = "application/json";
    request.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token");
    return request;
});

_axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {
            sessionStorage.removeItem("user");
            window.location.reload();
        }

        return Promise.reject(error);
    }
);

Plugin.install = function(Vue) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        }
    });
};

Vue.use(Plugin);

export default Plugin;
