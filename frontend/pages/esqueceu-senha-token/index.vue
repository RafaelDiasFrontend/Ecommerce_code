<template>
<div class='login-area'>
    <v-container>
        <div class='login-grid'>
            <v-card class="elevation-10 login-card">
                <div class='text-center login-title dark-color pb-1'>Resetar senha</div>
                <v-form action="" v-model="valid" class='login-form' @submit.prevent="register">

                    <v-text-field class='pt-1' label="Token" v-model="form.token" outlined></v-text-field>
                    <!-- Password     -->
                    <v-text-field label="email" outlined :rules="required" v-model="form.email" required></v-text-field>          

                    <v-btn type='submit' :disabled="!valid" class="bg-secondary-color btn-register mt-1">Resetar</v-btn>
                </v-form>
            </v-card>
        </div>
    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            valid: true,
            show1: false,
            show2: false,
            form: {                
                token: '',
                email: ''
            },
            emailRules: [
                v => !!v || 'O email é obrigatório',
                v => /.+@.+\..+/.test(v) || 'O email deve ser válido',
            ],
             passwordConfirmationRule: [
                v => (this.form.password === this.form.rePassword) || 'A senha inserida deve ser igual'
            ],
            required: [
                v => !!v || 'Você deve preencher este campo',               
            ],
        }
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
        },
        async register() {
            this.$swal(
                'Pronto!',
                'Sua senha foi redefinida com sucesso',
                'success'
            );
            await this.$axios.post('tokenValidation', this.form)

            this.$router.push({
                path: this.$route.query.redirect || '/login'
            }).then(response => {
                console.log(response);
            }).catch(function (error) {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
.login-grid {
    max-width: 500px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    margin: auto;
    align-items: center;
    padding-top: 6em;
    padding-bottom: 3em;
}

.login-card {
    padding: 4em 1em;
}

.login-form {
    width: 70%;
    margin: 0 auto;
}

.btn {

    width: 100%;
    padding: 0.8em;
    color: rgb(247, 247, 247);
}
</style>
