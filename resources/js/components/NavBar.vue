<template>
    <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                transition="scale-transition"
                width="40"
            />

            <v-img
                alt="Vuetify Name"
                class="shrink mt-1 hidden-sm-and-down"
                contain
                min-width="100"
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                width="100"
            />
        </div>

        <v-spacer></v-spacer>

        <v-btn v-if="!isLoggedIn" :to="{ name: 'Login' }" text>
            <span class="mr-2">Login</span>
        </v-btn>
        <v-btn v-if="isLoggedIn" @click="logout()" text>
            <span class="mr-2">Logout</span>
        </v-btn>
        <v-btn v-if="isLoggedIn" @click="profile()" text>
            <span class="mr-2">Profile</span>
        </v-btn>
        <v-btn v-if="!isLoggedIn" :to="{ name: 'Register' }" text>
            <span class="mr-2">Register</span>
        </v-btn>
    </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            isLoggedIn: "auth/isLoggedIn"
        })
    },

    methods: {
        profile() {
            this.$router.push({ name: "UserProfile" });
        },
        logout() {
            this.$store.dispatch("auth/logout");
        }
    }
};
</script>
