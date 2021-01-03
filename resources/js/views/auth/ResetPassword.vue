<template>
    <div class="container mx-auto flex justify-center items-center">
        <div class="w-1/3">
            <h1 class="mb-6 text-center text-3xl font-bold">
                Reset Password
            </h1>
            <div
                class="shadow rounded to w-full border-solid border-t-4 border-blue-500 p-6 my-2"
            >
                <v-form ref="form" v-model="valid" lazy-validation>
                    <!-- Password Reset Token -->
                    <input type="hidden" v-model="token" name="token" />

                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
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
                        :rules="passwordRules"
                        required
                        type="password"
                        @click:append="
                            confirmPasswordShow = !confirmPasswordShow
                        "
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
    </div>
</template>

<script>
export default {
    data: () => ({
        passwordShow: false,
        confirmPasswordShow: false,
        valid: true,
        token: "",
        email: "",
        emailRules: [
            v => !!v || "E-mail is required",
            v => /.+@.+/.test(v) || "E-mail must be valid"
        ],
        password: "",
        confirmPassword: "",
        passwordRules: [v => !!v || "Password and Confirm password Required"]
    }),

    mounted() {
        this.token = this.$route.query.token;
    },

    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch("auth/resetPassword", {
                    token: this.token,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.confirmPassword
                });
            }
        }
    }
};
</script>
