import router from "../router";

export default {
    getUrl(context, url, type) {
        axios
            .get(url)
            .then(response => {
                context.commit(type, response.data.data);
                context.commit("global/LOADING_COMPLETED", true, {
                    root: true
                });
            })
            .catch(error => {
                context.commit(
                    "global/ALERT_UPDATED",
                    {
                        visible: true,
                        message: error.response.data.error,
                        type: "error"
                    },
                    { root: true }
                );
            });
    },

    postUrl(context, url, payload, type, redirect, alert) {
        axios
            .post(url, payload)
            .then(response => {
                if (type) context.commit(type, response.data);

                if (redirect) {
                    if (redirect.params == "id") {
                        redirect.params = { id: response.data.data.id };
                    }
                    if (redirect.params == "event_shift_id") {
                        redirect.params = {
                            id: response.data.data.event_id,
                            shift_id: response.data.data.shift_id
                        };
                    }
                    router.push({
                        name: redirect.name,
                        params: redirect.params
                    });
                }

                context.commit("global/LOADING_COMPLETED", true, {
                    root: true
                });

                if (alert != false) {
                    context.commit(
                        "global/ALERT_UPDATED",
                        {
                            visible: true,
                            message: response.data.message,
                            type: "success"
                        },
                        { root: true }
                    );
                } else {
                    context.commit("global/RESET_STATE");
                }
            })
            .catch(error => {
                if (error.response.data.errors) {
                    context.commit(
                        "global/ALERT_UPDATED",
                        {
                            visible: true,
                            message: error.response.data.errors,
                            type: "error"
                        },
                        { root: true }
                    );
                } else if (error.response.data.message) {
                    context.commit(
                        "global/ALERT_UPDATED",
                        {
                            visible: true,
                            message: error.response.data.message,
                            type: "error"
                        },
                        { root: true }
                    );
                }
            });
    },

    patchUrl(context, url, payload, type, alert) {
        axios
            .patch(url, payload)
            .then(response => {
                context.commit(type, response.data.data);
                if (alert != false) {
                    context.commit(
                        "global/ALERT_UPDATED",
                        {
                            visible: true,
                            message: response.data.message,
                            type: "success"
                        },
                        { root: true }
                    );
                }
                context.commit("global/LOADING_COMPLETED", true, {
                    root: true
                });
            })
            .catch(error => {
                if (error.response.data.message) {
                    context.commit(
                        "global/ALERT_UPDATED",
                        {
                            visible: true,
                            message: error.response.data.message,
                            type: "error"
                        },
                        { root: true }
                    );
                } else {
                    context.commit(
                        "global/ALERT_UPDATED",
                        {
                            visible: true,
                            message: error.response.data.error,
                            type: "error"
                        },
                        { root: true }
                    );
                }
            });
    },

    deleteUrl(context, url, type, redirect) {
        axios
            .delete(url)
            .then(response => {
                context.commit(type, response.data.data);
                context.commit(
                    "global/ALERT_UPDATED",
                    {
                        visible: true,
                        message: response.data.message,
                        type: "success"
                    },
                    { root: true }
                );
                context.commit("global/LOADING_COMPLETED", true, {
                    root: true
                });
            })
            .catch(error => {
                context.commit(
                    "global/ALERT_UPDATED",
                    {
                        visible: true,
                        message: error.response.data.error,
                        type: "error"
                    },
                    { root: true }
                );
            });

        if (redirect) {
            if (redirect.params == "id") {
                redirect.params = { id: response.data.data.id };
            }
            router.push({
                name: redirect.name,
                params: redirect.params
            });
        }
    },

    authPostUrl(context, url, payload, redirect, alert) {
        axios
            .post(url, payload)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + response.data.token;
                context.commit("AUTH_SUCCESS", response.data);

                if (redirect) {
                    router.push({
                        name: redirect.name
                    });
                }

                context.commit("global/LOADING_COMPLETED", true, {
                    root: true
                });

                if (alert != false) {
                    context.commit(
                        "global/ALERT_UPDATED",
                        {
                            visible: true,
                            message: response.data.message,
                            type: "success"
                        },
                        { root: true }
                    );
                } else {
                    context.commit("global/RESET_STATE");
                }
            })
            .catch(error => {
                localStorage.removeItem("token");
                context.commit("AUTH_ERROR");
                if (error.response.data.errors) {
                    context.commit(
                        "global/ALERT_UPDATED",
                        {
                            visible: true,
                            message: error.response.data.errors,
                            type: "error"
                        },
                        { root: true }
                    );
                } else if (error.response.data.message) {
                    context.commit(
                        "global/ALERT_UPDATED",
                        {
                            visible: true,
                            message: error.response.data.message,
                            type: "error"
                        },
                        { root: true }
                    );
                }
            });
    },

    logout(context, url, redirect, alert) {
        axios
            .delete(url)
            .then(response => {
                if (redirect) {
                    router.push({
                        name: redirect.name
                    });
                }
                delete axios.defaults.headers.common["Authorization"];
                context.commit("global/LOADING_COMPLETED", true, {
                    root: true
                });

                if (alert != false) {
                    context.commit(
                        "global/ALERT_UPDATED",
                        {
                            visible: true,
                            message: response.data.message,
                            type: "success"
                        },
                        { root: true }
                    );
                } else {
                    context.commit("global/RESET_STATE");
                }
            })
            .catch(error => {
                console.log(error);
            });
    },

    sanctumCookie(context, url) {
        axios
            .get(url)
            .then(response => {
                context.commit("global/LOADING_COMPLETED", true, {
                    root: true
                });
            })
            .catch(error => {
                context.commit(
                    "global/ALERT_UPDATED",
                    {
                        visible: true,
                        message: error.response.data.error,
                        type: "error"
                    },
                    { root: true }
                );
            });
    }
};
