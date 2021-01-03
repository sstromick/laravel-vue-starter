import axios from "axios";

const AUTH_SUCCESS = (state, user) => {
    state.user = user.user;
    state.token = user.token;
    state.status = "success";
};

const AUTH_USER_UPDATED = (state, user) => {
    state.user = user;
};

const AUTH_ERROR = state => {
    state.status = "error";
};

const AUTH_LOGOUT = state => {
    state.status = null;
    state.token = null;
};

export default {
    AUTH_SUCCESS,
    AUTH_ERROR,
    AUTH_LOGOUT,
    AUTH_USER_UPDATED
};
