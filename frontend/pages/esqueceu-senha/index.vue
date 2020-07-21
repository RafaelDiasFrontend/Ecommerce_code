<template>
  <div class='login-area'>
      <v-container>
          <div class='login-grid'>
              <v-card class="elevation-10 login-card">
                  <div class='text-center login-title dark-color pb-1'>Digite o seu email</div>
                  <v-form action="" v-model="valid" class='login-form' @submit.prevent="register">
                      <!-- Email -->
                      <v-text-field class='pt-1' label="email" v-model="form.email" outlined :rules="emailRules" placeholder="contato@integrace.com.br"></v-text-field>
                      <!-- Entrar -->
                      <v-btn type='submit' :disabled="!valid" class="bg-secondary-color btn-register mt-1">Recuperar</v-btn>
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
            form: {
                email: ''
            },
            emailRules: [
                v => !!v || 'O email é obrigatório',
                v => /.+@.+\..+/.test(v) || 'O email deve ser válido',
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
              'Foi enviado um email com o um token',
              'success'
              ); 
            await this.$axios.post('rememberPass', this.form)
         
            
            this.$router.push({
                path: this.$route.query.redirect || '/esqueceu-senha-token'
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
