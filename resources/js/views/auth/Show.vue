<template>
    <div class="container mx-auto flex justify-center items-center flex-column">
        <div class="w-1/3">
            <h1 class="mb-6 text-center text-3xl font-bold">
                Profile
            </h1>
            <div
                class="shadow rounded to w-full border-solid border-t-4 border-blue-500 p-6 my-2"
            >
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                        v-model="user.name"
                        :rules="nameRules"
                        label="Name"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="user.email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>

                    <v-btn
                        :disabled="!valid"
                        color="primary"
                        @click="validate"
                        class="mr-2"
                    >
                        Submit
                    </v-btn>
                </v-form>
            </div>
        </div>
        <div class="w-1/3">
            <h1 class="mb-6 text-center text-3xl font-bold">
                Change Password
            </h1>
            <div
                class="shadow rounded to w-full border-solid border-t-4 border-blue-500 p-6 my-2"
            >
                <v-form
                    ref="formPassword"
                    v-model="validPasswordForm"
                    lazy-validation
                >
                    <v-text-field
                        v-model="currentPassword"
                        :rules="currentPasswordRules"
                        label="Current Password"
                        required
                        type="password"
                        @click:append="
                            currentPasswordShow = !currentPasswordShow
                        "
                    ></v-text-field>

                    <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        required
                        type="password"
                        @click:append="passwordShow = !passwordShow"
                    ></v-text-field>

                    <v-text-field
                        v-model="confirmPassword"
                        label="Confirm Password"
                        :rules="[passwordRules, passwordConfirmationRule]"
                        required
                        type="password"
                        @click:append="
                            confirmPasswordShow = !confirmPasswordShow
                        "
                    ></v-text-field>

                    <v-btn
                        :disabled="!validPasswordForm"
                        color="primary"
                        @click="validatePasswordForm"
                        class="mr-2"
                    >
                        Submit
                    </v-btn>
                </v-form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            alert: "global/alert",
            loading: "global/loading",
            user: "auth/user"
        }),
        passwordConfirmationRule() {
            return () =>
                this.password === this.confirmPassword || "Password must match";
        }
    },

    data: () => ({
        currentPasswordShow: false,
        passwordShow: false,
        confirmPasswordShow: false,
        valid: true,
        validPasswordForm: true,
        email: "",
        name: "",
        nameRules: [v => !!v || "E-mail is required"],
        emailRules: [
            v => !!v || "E-mail is required",
            v => /.+@.+/.test(v) || "E-mail must be valid"
        ],
        password: "",
        confirmPassword: "",
        currentPassword: "",
        passwordRules: [v => !!v || "Password and Confirm password Required"],
        currentPasswordRules: [v => !!v || "Current Password Required"]
    }),
    methods: {
        validatePasswordForm() {
            if (this.$refs.formPassword.validate()) {
                this.$store.dispatch("auth/updateUserPassword", {
                    id: this.user.id,
                    current_password: this.currentPassword,
                    password: this.password,
                    password_confirmation: this.confirmPassword
                });
            }
        },
        validate() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch("auth/updateUser", {
                    id: this.user.id,
                    email: this.user.email,
                    name: this.user.name
                });
            }
        }
    },

    mounted() {
        this.$store.dispatch("auth/getUser");
    }
};
</script>
