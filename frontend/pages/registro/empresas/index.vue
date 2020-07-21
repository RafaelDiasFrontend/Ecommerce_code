<template>
  <div class="register-area">
    <v-container>
      <div class="register-grid">
        <v-card class="elevation-10 login-card">
          <div class="text-center login-title dark-color pb-2">Cadastrar Empresa</div>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validationaction
            class="register-form mt-2"
            @submit.prevent="register"
          >
            <v-row class="d-flex">
              <v-col cols="12" xs="12" sm="6" md="6" lg="6" class="py-form">
                <!-- NOME -->
                <v-text-field v-model="form.name" label="Nome" outlined required></v-text-field>
              </v-col>
              <!-- FANTASY NAME -->
              <v-col cols="12" xs="12" sm="6" md="6" lg="6" class="py-form">
                <v-text-field v-model="form.fantasyName" label="Nome da empresa" outlined required></v-text-field>
              </v-col>
              <!-- Email -->
              <v-col cols="12" xs="12" sm="6" md="6" lg="6" class="py-form">
                <v-text-field
                  label="Email"
                  outlined
                  v-model="form.email"
                  :rules="emailRules"
                  required
                ></v-text-field>
              </v-col>
              <!-- Estado -->
              <v-col cols="12" xs="12" sm="6" md="6" lg="6" class="py-form">
                <v-text-field v-model="form.state" label="Estado" outlined></v-text-field>
              </v-col>
              <!-- Data de nascimento -->
              <v-col cols="12" xs="12" sm="6" md="6" lg="6" class="py-form">
                <v-text-field v-model="form.city" label="Cidade" outlined required></v-text-field>
              </v-col>
              <!-- Estado -->
              <v-col cols="12" xs="12" sm="6" md="6" lg="6" class="py-form">
                <v-text-field
                  v-model="form.cnpj"
                  label="CNPJ"
                  outlined
                  required
                  placeholder="XX.XXX.XXX/XXXX-XX"
                  v-mask="cnpjMask"
                ></v-text-field>
              </v-col>
              <!-- Cidade -->
              <v-col cols="12" xs="12" sm="6" md="6" lg="6" class="py-form">
                <v-text-field
                  v-model="form.phone"
                  label="Telefone"
                  outlined
                  required
                  placeholder="(XX) XXXXX-XXXX"
                  v-mask="phoneMask"
                ></v-text-field>
              </v-col>
              <!-- CEP -->
              <v-col cols="12" lg="6" xs="12" class="py-form">
                <v-text-field
                  ref="zip"
                  v-mask="['#####-###']"
                  v-model="form.zip"
                  :rules="[() => !!form.zip || 'Campo obrigatório']"
                  label="CEP"
                  required
                  outlined
                  placeholder="XXXXX-XXX"
                ></v-text-field>
              </v-col>
              <!-- SLUG -->
              <v-col cols="12" xs="12" sm="6" md="6" lg="12" class="py-form">
                <v-text-field
                  label="Sua pagina personalizada"
                  v-model="form.slug"
                  required
                  hint="www.integrace.com/profissionais/nome-da-empresa"
                  persistent-hint
                  outlined
                  placeholder="nome-da-empresa"
                ></v-text-field>
              </v-col>
              <!-- Password -->
              <v-col cols="12" xs="12" sm="6" md="6" lg="6" class="py-form">
                <v-text-field
                  label="Senha"
                  outlined
                  :type="show1 ? 'text' : 'password'"
                  :append-icon="show1 ? 'visibility' : 'visibility_off'"
                  @click:append="show1 = !show1"
                  v-model="form.password"
                  required
                ></v-text-field>
              </v-col>
              <!-- Re-Password -->
              <v-col cols="12" xs="12" sm="6" md="6" lg="6" class="py-form">
                <v-text-field
                  label="Confirmação de senha"
                  outlined
                  v-model="form.rePassword"
                  required
                  :rules="passwordConfirmationRule"
                  :type="show2 ? 'text' : 'password'"
                  :append-icon="show2 ? 'visibility' : 'visibility_off'"
                  @click:append="show2 = !show2"
                ></v-text-field>
              </v-col>

              <TermsPrivacy />
              <v-col cols="12" xs="12" sm="12" class="py-0 my-0">
                <v-btn
                  type="submit"
                  class="bg-secondary-color btn-register mt-1"
                  :disabled="!valid"
                  @click="validate"
                >Registrar</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </div>
    </v-container>
  </div>
</template>


<script>
import TermsPrivacy from "@/components/Helpers/TermsPrivacy";
import { mask } from "vue-the-mask";
export default {
  components: {
    TermsPrivacy
  },

  directives: { mask },
  data() {
    return {
      valid: true,
      show1: false,
      show2: false,
      form: {
        name: "",
        fantasyName: "",
        email: "",
        state: "",
        city: "",
        cnpj: "",
        phone: "",
        zip: "",
        slug: "",
        password: "",
        rePassword: ""
      },
      //  mascaras
      cpfMask: "###.###.###-##",
      cnpjMask: "##.###.###/####-##",
      birthdayMask: "##/##/####",
      phoneMask: "(##) #####-####",

      emailRules: [
        v => !!v || "O email é obrigatório",
        v => /.+@.+\..+/.test(v) || "O email deve ser válido"
      ],
      passwordConfirmationRule: [
        v =>
          this.form.password === this.form.rePassword ||
          "A senha inserida deve ser igual"
      ]
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    async register() {
      await this.$axios.post("companyRegister", this.form);
      await this.$auth.login({
        data: {
          email: this.form.email,
          password: this.form.password
        }
      });

      this.$router
        .push({
          path: this.$route.query.redirect || "/empresa-adm"
        })
        .then(response => {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>



<style scoped>
.py-form {
  padding-top: 7px;
  padding-bottom: 7px;
}
</style>





