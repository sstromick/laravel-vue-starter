<template>
    <v-app>
        <nav-bar></nav-bar>

        <v-main class="my-3">
            <v-content
                transition="slide-x-transition"
                style="padding-top:60px;"
            >
                <div
                    v-if="loading == true"
                    style="position:absolute; top:0; left:0; bottom:0; right:0; z-index:2; background:#fafafa; height:100%; overflow:hidden; width:100%"
                    id="loading"
                >
                    <v-flex>
                        <v-progress-circular
                            :size="50"
                            color="primary"
                            indeterminate
                            style="display:block; margin:35vh auto 0"
                        ></v-progress-circular>
                    </v-flex>
                </div>
                <span v-if="alert.visible">
                    <v-snackbar
                        v-model="alert.visible"
                        v-if="alert.type == 'success' && alert.message"
                        bottom
                        :timeout="3000"
                    >
                        {{ alert.message }}
                        <v-btn dark @click="alert.visible = false">
                            Close
                        </v-btn>
                    </v-snackbar>
                </span>
                <v-container v-if="alert.visible && alert.type == 'error'" pt-0>
                    <v-flex
                        class="justify-center"
                        v-if="
                            Array.isArray(alert.message) ||
                                typeof alert.message === 'object'
                        "
                    >
                        <v-alert
                            v-model="alert.visible"
                            :type="alert.type"
                            dismissible
                            v-for="(message, index) in alert.message"
                            :key="index"
                        >
                            {{ message }}
                        </v-alert>
                    </v-flex>
                    <v-flex class="justify-center" v-else>
                        <v-alert
                            v-model="alert.visible"
                            :type="alert.type"
                            dismissible
                        >
                            test-{{ alert.message }}
                        </v-alert>
                    </v-flex>
                </v-container>
            </v-content>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import NavBar from "../components/NavBar";
import { mapGetters } from "vuex";

export default {
    name: "App",

    components: {
        NavBar
    },

    data: () => ({
        //
    }),
    computed: {
        ...mapGetters({
            alert: "global/alert",
            loading: "global/loading"
        })
    }
};
</script>
