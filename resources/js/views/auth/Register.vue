<template>
    <div class="container mx-auto flex justify-center items-center">
        <div class="w-1/3">
            <h1 class="mb-6 text-center text-3xl font-bold">
                Register for our Website
            </h1>
            <div
                class="shadow rounded to w-full border-solid border-t-4 border-blue-500 p-6 my-2"
            >
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Name"
                        required
                    ></v-text-field>

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
                        :rules="[passwordRules, passwordConfirmationRule]"
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
                        Register
                    </v-btn>
                </v-form>
            </div>
            <div class="text-center mt-4">
                <p class="text-grey-dark text-sm">
                    Already have an account?
                    <router-link
                        class="no-underline text-blue font-bold"
                        :to="{ name: 'Login' }"
                    >
                        Login</router-link
                    >.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        passwordConfirmationRule() {
            return () =>
                this.password === this.confirmPassword || "Password must match";
        }
    },

    data: () => ({
        passwordShow: false,
        confirmPasswordShow: false,
        valid: true,
        email: "",
        name: "",
        nameRules: [v => !!v || "E-mail is required"],
        emailRules: [
            v => !!v || "E-mail is required",
            v => /.+@.+/.test(v) || "E-mail must be valid"
        ],
        password: "",
        confirmPassword: "",
        passwordRules: [v => !!v || "Password and Confirm password Required"]
    }),
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch("auth/register", {
                    email: this.email,
                    name: this.name,
                    password: this.password
                });
            }
        }
    }
};
</script>
