<template>
<div class='budget-page'>
    <v-container class='budget-container df-width'>     
           <v-form ref="form" v-model="valid" class='orcamento-form mt-10' @submit.prevent="submitBudget">                         
                    <v-stepper v-model="e6" vertical class='elevation-11'>
                        <v-stepper-header>
                            <v-stepper-step editable :complete="e6 > 1" step="1" class='h4'>
                                Orçamento
                            </v-stepper-step>                       
                           
                            <v-divider></v-divider>
                            <v-stepper-step editable :complete="e6 > 2" step="2" class='h4'>Dados de acesso</v-stepper-step>                           
                        </v-stepper-header>
                        <v-stepper-content step="1">
                            <div>
                                <v-container>                                    
                                    <v-row class='mt-2'>                                        
                                         <!-- Nome-->
                                        <v-col cols='12' lg='3' xs='12'>
                                            <v-text-field 
                                            class='pa-0 py-0'                                           
                                            required
                                            label="Nome" 
                                            v-model="form.name"
                                            outlined 
                                            placeholder='Nome Completo'                                 
                                            >
                                            </v-text-field>
                                        </v-col>
                                         <!-- Email -->
                                        <v-col cols='12' lg='3' xs='12'>                                           
                                            <v-text-field 
                                            :rules="emailRules"
                                            class='pa-0 py-0'
                                            label="Email"
                                            v-model="form.email"
                                            outlined 
                                            placeholder='exemplo@integrace.com.br'>
                                            </v-text-field>
                                        </v-col>  
                                        <!-- Telefone -->
                                        <v-col cols='12' lg='3' xs='12'>
                                            <v-text-field 
                                            class='pa-0 py-0'
                                            label="Telefone" 
                                            :rules="mandatory" 
                                            v-model="form.phone"
                                            placeholder="(XX) XXXXX-XXXX"
                                            v-mask='phoneMask'
                                            outlined>
                                            </v-text-field>
                                        </v-col>                       
                                        <!-- CEP -->
                                        <v-col cols='12' lg='3' xs='12'>
                                            <v-text-field
                                            class='pa-0 py-0'
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
                                         <v-col lg='12' md='12'>
                                            <div class='gray pl-1'>Área de Especialidade</div>   
                                        </v-col> 
                                        <v-col cols='12' lg='6' xs='12'>
                                            <v-select 
                                            label="Especialidade de Engenharia" 
                                            :items="specialtyAreaItems" 
                                            v-model="form.specialtyArea1" 
                                            max-height="auto" 
                                            autocomplete
                                            outlined 
                                            class='pa-0 py-0'
                                            required>
                                            </v-select>
                                        </v-col>
                                        <v-col cols='12' lg='6' xs='12'>
                                            <v-select 
                                            label="Tipo de serviço" 
                                            :items="servicesTypeItems" 
                                            v-model="form.servicesType1" 
                                            max-height="auto" 
                                            autocomplete
                                            outlined 
                                            class='pa-0 py-0'
                                             required>
                                            </v-select>
                                        </v-col> 
                                                                                                             
                                    <v-col cols='12' lg='1' xs='12' class='pt-6'>                           
                                         <v-checkbox                                        
                                        class='py-0 my-0'                                        
                                        v-model="enabled3"                                       
                                        hide-details
                                        outlined                                                                        
                                        ></v-checkbox>
                                      </v-col> 
                                       <v-col cols='12' lg='5' xs='12'>
                                            <v-select 
                                            label="Especialidade de Engenharia" 
                                             :items="specialtyAreaItems" 
                                            v-model="form.specialtyArea2"  
                                            max-height="auto" 
                                            autocomplete 
                                            outlined 
                                            class='pa-0 py-0'
                                            :disabled="!enabled3"
                                            >
                                            </v-select>
                                        </v-col>
                                        <v-col cols='12' lg='6' xs='12'>
                                            <v-select
                                            label="Tipo de serviço"
                                            :items="servicesTypeItems" 
                                            v-model="form.servicesType2" 
                                            max-height="auto"
                                            autocomplete 
                                            outlined
                                            class='pa-0 py-0'
                                            :disabled="!enabled3"
                                            >
                                            </v-select>
                                        </v-col> 
                                            <v-col cols='12' lg='1' xs='12' class='pt-6'>                               
                                         <v-checkbox                                        
                                        class='py-0 my-0'                                        
                                        v-model="enabled4"                                       
                                        hide-details
                                        outlined                                                                        
                                        ></v-checkbox>
                                      </v-col> 
                                       <v-col cols='12' lg='5' xs='12'>
                                            <v-select 
                                            label="Especialidade de Engenharia" 
                                            :items="specialtyAreaItems" 
                                            v-model="form.specialtyArea3"   
                                            max-height="auto" 
                                            autocomplete 
                                            outlined 
                                            class='pa-0 py-0'
                                            :disabled="!enabled4"
                                            >
                                            </v-select>
                                        </v-col>
                                        <v-col cols='12' lg='6' xs='12'>
                                            <v-select 
                                            label="Tipo de serviço" 
                                            :items="servicesTypeItems" 
                                            v-model="form.servicesType3" 
                                            max-height="auto"
                                            autocomplete 
                                            outlined 
                                            class='pa-0 py-0'
                                            :disabled="!enabled4"
                                            >
                                            </v-select>
                                        </v-col>           
                                    
                                         <v-col cols='12' lg='12'>
                                        <v-textarea 
                                            outlined 
                                            class='' 
                                            name="input-7-4"
                                            label="Detallhes"                                           
                                            v-model="form.message"
                                            value=""                                           
                                            auto-grow
                                            >
                                            </v-textarea>
                                       </v-col>
                                        
                                        <v-col cols='12' xs='12' sm='8' md='9' lg='10' class='my-0 py-0'>  
                                            <TermsPrivacy />
                                        </v-col>    
                                        <v-col cols='12' xs='12' sm='4' md='3' lg='2' class='my-0 pl-custom py-0'>                     
                                         <v-btn type="submit" right class='btn-end white--text' color='primary' :disabled="!valid" @click="e6 = 2">Avançar
                                            <v-scroll-x-transition>
                                                <v-icon v-show="valid" type="submit" size='18' right color="white">mdi-checkbox-marked-circle</v-icon>
                                            </v-scroll-x-transition>
                                         </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                              </div> 
                        </v-stepper-content>
                        

                        <v-stepper-content step="2">
                               <div class="mb-12">
                                <v-container>
                                 <v-row>  
                                    <v-col cols='12' lg='12'>   
                                        <div class='h3-custom center d-flex align-center'>
                                        <v-icon  size='35' left color="green lighten-2" class='pr-2'>mdi-checkbox-marked-circle</v-icon>
                                        Parabens o seu orcamento foi criado com sucesso!
                                        </div>   
                                        <div class='d-flex flex-column py-5'>
                                            <div class='d-flex align-center '>  
                                                <h3 class='h4 py-1 gray'>Nº orçamento: </h3> 
                                                <span class='h3 py-1 gray pl-5'>0000001</span>   
                                            </div>
                                             <div class='d-flex align-center '>  
                                                <h3 class='h4 py-1 gray'>Login:</h3>                                                
                                                <span class='h3 py-1 gray pl-5'>{{ form.email }}</span> 
                                            </div>
                                             <div class='d-flex align-center '>  
                                                <h3 class='h4 py-1 gray'>Senha:</h3>                                                
                                                <span class='h3 py-1 gray pl-5'>{{ form.name + form.phone.substring(11) }}</span> 
                                            </div>                           
                                        </div>                                                                
                                </v-col> 
                                                       
                                                       
                                <!-- <v-col cols='12' lg='12'>
                                    <h2 class='h4 gray pb-6'>Adicionar imagens ao orçamento</h2>                                                           
                                    <input 
                                    class='d-none'
                                    type="file" 
                                    @change="onFileChanged"
                                    ref="fileInput"
                                    multiple
                                    >
                                    <v-btn 
                                    color='primary' 
                                    @click="$refs.fileInput.click()">
                                    Carregar
                                    </v-btn>                                                         
                                </v-col> -->
                                    <v-col cols='12' lg='8'>               
                                    
                                    </v-col>

                                <v-col cols='12' md='12' lg='10' class='my-0 py-0'>                               
                                </v-col>    
                                <v-col cols='12' md='12' lg='2' class='mt-7 pl-custom py-0'>                           
                                    <v-btn 
                                    right
                                    class='btn-end white--text'
                                    color='primary'
                                    :disabled="!valid"
                                    @click="RedirectLogin"
                                    >Salvar                                  
                                    </v-btn>                          
                                </v-col>
                                 </v-row>
                                </v-container>
                            </div>                          
                        </v-stepper-content>                    
                    </v-stepper>                
            </v-form>    
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
            e6: 1,
            enabled: null,
            enabled2: null,
            enabled3: null,
            enabled4: null,
            enabled5: null,
            url: null,     
            password: null,   
            form: {
                name: '',
                phone: '',
                email: null,        
                state: '',
                city: '',
                zip: '',
                address: '',    
                addressNumber: '',
                addressComp: '',
                addressRef: '',
                budgetEstimatedPost: '',
                cpf: '',
                cnpj: '',                
                specialtyArea1: '',
                servicesType1: '',
                specialtyArea2: '',
                servicesType2: '',
                specialtyArea3: '',
                servicesType3: '',
                specialtyArea4: '',
                servicesType4: '',          
                message: '',     
                type: 'residencial',      
            },
            
            
            servicesTypeItems: [
                'ASSESSORIA',
                'ASSISTÊNCIA TÉCNICA',
                'AVALIAÇÃO',
                'CONSULTORIA',
                'FISCALIZAÇÃO DE OBRAS',
                'GERENCIAMENTO DE PROJETOS',
                'INSPEÇÃO',
                'INSTALAÇÃO',
                'MANUTENÇÃO',
                'OBRA',
                'PERICIA',
                'PLANEJAMENTO DE OBRAS',
                'PROJETO',
                'SERVIÇOS EM GERAIS',
                'SUPERVISÃO',
                'VISTORIA',
                'OUTROS',
            ],
            specialtyAreaItems: [
              'Engenheiro Acústico',
              'Engenheiro Aeroespacial',
                'Engenheiro Aeronáutico',
                'Engenheiro Agrícola',
                'Engenheiro Agrimensor',
                'Engenheiro Agrimensor e Cartógrafo',
                'Engenheiro Agrônomo',
                'Engenheiro Ambiental',
                'Engenheiro Automotivo',
                'Engenheiro Biomédico',
                'Engenheiro Cartógrafo',
                'Engenheiro Civil',
                'Engenheiro de Alimentos',
                'Engenheiro de Aqüicultura',
                'Engenheiro de Bioprocessos e Biotecnologia',
                'Engenheiro de Computação',
                'Engenheiro de Comunicações',
                'Engenheiro de Controle e Automação',
                'Engenheiro de Energia',
                'Engenheiro de Exploração e Produção de Petróleo',
                'Engenheiro de Fortificação e Construção',
                'Engenheiro de Geodésia',
                'Engenheiro de Infra-Estrutura Aeronáutica',
                'Engenheiro de Materiais',
                'Engenheiro de Minas',
                'Engenheiro de Pesca',
                'Engenheiro de Petróleo',
                'Engenheiro de Plástico',
                'Engenheiro de Produção',
                'Engenheiro de Saúde e Segurança',
                'Engenheiro de Segurança do Trabalho',
                'Engenheiro de Software',
                'Engenheiro de Telecomunicações',
                'Engenheiro de Transportes',
                'Engenheiro Eletricista',
                'Engenheiro Eletricista - Eletrônica',
                'Engenheiro em Eletrônica',
                'Engenheiro em Eletrotécnica',
                'Engenheiro Florestal',
                'Engenheiro Geógrafo',
                'Engenheiro Hídrico',
                'Engenheiro Mecânico',
                'Engenheiro Metalurgista',
                'Engenheiro Militar',
                'Engenheiro Naval',
                'Engenheiro Nuclear',
                'Engenheiro Químico',
                'Engenheiro Sanitarista',
                'Engenheiro Sanitarista e Ambiental',
                'Engenheiro Têxtil',
                'Engenheiro Topógrafo',
                'Outros'                
            ],

          
            budgetEstimated: ['R$0 à R$1000', 'R$1000 à R$5000', 'R$5000 à R$10000', 'Acima de R$10000', ],

            phoneMask: '(##) #####-####',
            cpfMask: '###.###.###-##',
            cnpjMask: '##.###.###/####-##',
            inputRules: [
                value => !value || value.size < 3000000 || 'As imagens devem contar menos de 3 MB!',
            ],
              nameRules: [   
                v => !!v || 'O nome é obrigatório',     
                v => v.length <= 20 || 'O campo Nome não pode conter mais de 20 caracteres',
            ],  
             mandatory: [
                v => !!v || 'Campo Obrigatório',                
            ],           
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
        // async onFileChanged (event){
        //     let frmData = new FormData();
        //     let files = event.target.files;

        //     for(var i; i < files.length; i++)
        //     {
        //         this.url.push(URL.createObjectURL(files[i]))    
        //     }
        //     this.url = URL.createObjectURL(files[0]);


        //     for(var i = 0; i < files.length; i++)
        //     {
        //         frmData.append('img' + i, files[i]);          
        //     }
        //     await this.$axios.post('industrialBudgetUpload', frmData)
        //     .then(function(data){
        //         console.log(data)
                
        //     }).catch(function(error){
        //         console.log(error)
        //     })
        // },

        async RedirectLogin() {  
            await this.$auth.loginWith('local', {
                data: { 
                    email: this.form.email,
                    password: this.form.name + this.form.phone.substring(11)
                }
            })

            this.$router.push({
                path: this.$route.query.redirect  || '/user-adm'
            })
        },


         async submitBudget() {
            await this.$axios.post('budgets', this.form)
            .then(function(data){
                console.log(data);
                this.password = this.form.name + this.form.phone.substring(11);
               
            }).catch(function(error){
                console.log(error)
            })
        }
    }
}



</script>

<style scoped>
.budget-page {
    margin-top: -62px!important;
    background: #f2f5f9;

}
 .budget-container{    
     padding: 5.5em 0;      
      }

.login-grid {         
    margin: auto;
    align-items: center;
    padding-top: 6em;
    padding-bottom: 3em;
}

.login-card {
    padding: 3.4em 1em;
    width: 1200px;

}

.orcamento-form {
    width: 80%;
    margin: 0 auto;
}

.btn {
    width: 100%;
    padding: 0.8em;
    color: #fff;
}

.btn:hover {
    width: 100%;
    padding: 0.8em;
    background: rgba(22, 19, 43, 0.856) !important;
    stroke-width: 5;
    stroke-dasharray: 15, 310;
    stroke-dashoffset: 48;
    transition: all 1.55s cubic-bezier(0.19, 1, 0.22, 1);
}
.btn-end{
    right: 4%;   
    background: var(--primary-color);

}
.h3-custom {
    font-size: 1.5rem;
    font-weight: 500;
    font-family: var(--primary-font);
    color: var(--success);
}
  

.pl-custom {
    padding-left: 30px;
}
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}
.preview {
    max-width: 150px;
    max-height: 150px;
}
@media only screen and (max-width: 900px) {
.pl-custom {
    padding-left: 25px;
}
.h3-custom {
    font-size: 1.18rem;   
    line-height: 1.4;
}

}
@media only screen and (max-width: 740px) {
.orcamento-form {
    width: 100%;
    margin: 0 auto;
}
.h4{
    font-size: 0.80rem;
}}
</style>
