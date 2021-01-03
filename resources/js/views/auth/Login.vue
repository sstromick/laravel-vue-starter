<template>
    <div class="container mx-auto flex justify-center items-center">
        <div class="w-1/3">
            <h1 class="mb-6 text-center text-3xl font-bold">
                Login to our Website
            </h1>
            <div
                class="shadow rounded to w-full border-solid border-t-4 border-blue-500 p-6 my-2"
            >
                <v-form
                    ref="form"
                    v-model="valid"
                    v-on:submit.prevent="submit"
                    lazy-validation
                >
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

                    <div class="flex justify-between items-center">
                        <v-btn
                            :disabled="!valid"
                            @click="submit"
                            color="primary"
                            class="mr-2"
                        >
                            Login
                        </v-btn>

                        <router-link
                            lass="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right"
                            :to="{ name: 'ForgotPassword' }"
                            >Forgot Password
                        </router-link>
                    </div>
                </v-form>
            </div>
            <div class="text-center mt-4">
                <p class="text-grey-dark text-sm">
                    Don't have an account?
                    <router-link
                        class="no-underline text-blue font-bold"
                        :to="{ name: 'Register' }"
                    >
                        Create an Account</router-link
                    >.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        email: "",
        emailRules: [
            v => !!v || "E-mail is required",
            v => /.+@.+/.test(v) || "E-mail must be valid"
        ],
        password: "",
        confirmPassword: "",
        passwordRules: [v => !!v || "Password and Confirm password Required"]
    }),
    methods: {
        async submit() {
            if (this.$refs.form.validate()) {
                await this.$store.dispatch("auth/login", {
                    email: this.email,
                    password: this.password
                });
            }
        }
    }
};
</script>
