<template>
<div class='register-area'>
    <v-container>
        <div class='register-grid'>
            <v-card class="elevation-10 login-card">
                <div class='text-center login-title dark-color pb-2'>Cadastrar Profissional</div>
                <v-form ref="form" v-model="valid" lazy-validationaction class='register-form mt-2' @submit.prevent="register">
                    <v-row class='d-flex'>
                         <!-- NOME -->
                        <v-col cols="12" xs="12" sm='6' md='6' lg="6" class='py-form'>                           
                            <v-text-field 
                            v-model="form.name" 
                            label="Nome completo" 
                            outlined 
                            required                              
                            >
                            </v-text-field>
                        </v-col>
                        <!-- Email -->
                        <v-col cols="12" xs="12" sm='6' md='6' lg="6" class='py-form'>
                            <v-text-field 
                            label="Email" 
                            outlined 
                            v-model="form.email" 
                            :rules="emailRules" 
                            required
                            >
                            </v-text-field>
                        </v-col>
                        <!-- Data de nascimento -->
                        <v-col cols="12" xs="12" sm='6' md='6' lg="6" class='py-form'>
                            <v-text-field
                            v-model="form.birthday" 
                            label="Data de Nascimento" 
                            outlined 
                            required 
                            v-mask="birthdayMask" 
                            placeholder="XX/XX/XXXX"
                            :rules="required"
                            ></v-text-field>
                        </v-col>
                        <!-- Estado -->
                        <v-col cols="12" xs="12" sm='6' md='6' lg="6" class='py-form'>
                            <v-text-field 
                            v-model="form.state" 
                            label="Estado"
                            outlined
                            required
                            :rules="required"
                            ></v-text-field>
                        </v-col>
                        <!-- Cidade -->
                        <v-col cols="12" xs="12" sm='6' md='6' lg="6" class='py-form'>
                            <v-text-field 
                            v-model="form.city" 
                            label="Cidade" 
                            outlined 
                            required
                            :rules="required"
                            >
                            </v-text-field>
                        </v-col>
                        <!-- CREA -->
                        <v-col cols="12" xs="12" sm='6' md='6' lg="6" class='py-form'>
                            <v-text-field 
                            v-model="form.crea" 
                            label="CREA/CAU" 
                            outlined 
                            required
                            :rules="required"
                            >
                            </v-text-field>
                        </v-col>                
                        <v-col cols="12" xs="12" sm='12' md='12' lg="12" class='py-form'>
                            <v-text-field 
                            label="Sua pagina personalizada" 
                            v-model="form.slug" 
                            required 
                            hint="www.integrace.com/profissionais/nome-do-profissional" 
                            persistent-hint 
                            outlined 
                            :rules="required"
                            placeholder="nome-da-página"
                            >
                            </v-text-field>
                        </v-col>
                        <!-- Password     -->
                        <v-col cols="12" xs="12" sm='6' md='6' lg="6" class='py-form'>                        
                            <v-text-field 
                            label="Senha"
                            outlined
                            :rules="required"
                            :type="show1 ? 'text' : 'password'"
                            :append-icon="show1 ? 'visibility' : 'visibility_off'" 
                            @click:append="show1 = !show1"
                            v-model="form.password" 
                            required
                            >
                            </v-text-field>
                        </v-col>
                         <!-- REPEAT PASSWORD -->
                        <v-col cols="12" xs="12" sm='6' md='6' lg="6" class='py-form'>                           
                            <v-text-field 
                            label="Confirmação de senha" 
                            outlined 
                            v-model="form.rePassword" 
                            required 
                            :rules="passwordConfirmationRule" 
                            :type="show2 ? 'text' : 'password'" 
                            :append-icon="show2 ? 'visibility' : 'visibility_off'" 
                            @click:append="show2 = !show2">
                            </v-text-field>
                        </v-col>                        
                         <TermsPrivacy />   
                        
                        
                        <v-col cols="12" xs="12" sm='12' md='12' class='py-0 my-0'>     
                            <v-btn 
                            type="submit"                           
                            class="bg-secondary-color btn-register mt-1" 
                            :disabled="!valid" 
                            @click="validate"
                            required                           
                            >Registrar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card>
        </div>
    </v-container>
</div>
</template>

<script>
import TermsPrivacy from '@/components/Helpers/TermsPrivacy'
import {
    mask
} from 'vue-the-mask'
export default {
    components: {
        TermsPrivacy
    },
    directives: {
        mask
    },
    data() {
        return {
            valid: true,
            show1: false,
            show2: false,
            form: {
                name: '',
                email: '',
                birthday: '',
                state: '',
                city: '',
                crea: '',
                slug: '',
                password: '',
                rePassword: '',

            },
            specialties: ['Especializacão-1', 'Especializacão-2', 'Especializacão-3', 'Especializacão-4'],
            //  mascaras         
            birthdayMask: '##/##/####',
            required: [
                v => !!v || 'Você deve preencher este campo',               
            ],
            emailRules: [
                v => !!v || 'O email é obrigatório',
                v => /.+@.+\..+/.test(v) || 'O email deve ser válido',
            ],
            passwordConfirmationRule: [
                v => !!v || 'Você deve preencher o campo senha',     
                v => (this.form.password === this.form.rePassword) || 'A senha inserida deve ser igual'
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
            await this.$axios.post('profissionalRegister', this.form)
            await this.$auth.login({
                data: {
                    email: this.form.email,
                    password: this.form.password
                }
            })
            this.$router.push({
                path: this.$route.query.redirect || '/profissional-adm'
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
.py-form {
    padding-top: 7px;
    padding-bottom: 7px;
}
</style>
