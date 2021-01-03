<template>
    <div class="container mx-auto flex justify-center items-center">
        <div class="w-1/3">
            <h1 class="mb-6 text-center text-3xl font-bold">
                Forgot Your Password?
            </h1>
            <p>
                No problem. Just let us know your email address and we will
                email you a password reset link that will allow you to choose a
                new one.
            </p>
            <div
                class="shadow rounded to w-full border-solid border-t-4 border-blue-500 p-6 my-2"
            >
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                        v-model="email"
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
                        Email Password Reset Link
                    </v-btn>
                </v-form>
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
        ]
    }),
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch("auth/forgotPassword", {
                    email: this.email
                });
            }
        }
    }
};
</script>
