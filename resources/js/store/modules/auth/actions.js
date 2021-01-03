import api from "../../../api";

const getUser = async (context, payload) => {
    api.getUrl(context, "/api/v1/user", "AUTH_USER_UPDATED");
};

const login = async (context, payload) => {
    //api.sanctumCookie(context, "/sanctum/csrf-cookie");
    api.authPostUrl(context, "/api/v1/login", payload, {
        name: "Dashboard"
    });
};

const register = async (context, payload) => {
    //api.sanctumCookie(context, "/sanctum/csrf-cookie");
    api.authPostUrl(context, "/api/v1/register", payload, {
        name: "Dashboard"
    });
};

const updateUser = async (context, payload) => {
    api.patchUrl(
        context,
        "/api/v1/user/" + payload.id,
        payload,
        "AUTH_USER_UPDATED"
    );
};

const updateUserPassword = async (context, payload) => {
    api.patchUrl(
        context,
        "/api/v1/userPassword/" + payload.id,
        payload,
        "AUTH_USER_UPDATED"
    );
};

const forgotPassword = async (context, payload) => {
    api.postUrl(context, "/api/v1/forgot-password", payload);
};

const resetPassword = async (context, payload) => {
    api.authPostUrl(context, "/api/v1/reset-password", payload, {
        name: "Dashboard"
    });
};

const logout = context => {
    localStorage.removeItem("token");
    context.commit("AUTH_LOGOUT");
    api.logout(context, "/api/v1/logout", {
        name: "Login"
    });
};

export default {
    login,
    logout,
    register,
    forgotPassword,
    resetPassword,
    getUser,
    updateUser,
    updateUserPassword
};
