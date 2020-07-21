<template>
    <div class="dashboard">
  <!-- GRID -->   
  <v-container fluid class="width-95  grey lighten-5 mt-3">      
       <v-form 
           ref="form"
           v-model="valid"
           lazy-validationaction
           class='login-form mt-2'
           @submit.prevent="register">          
         
          <v-row class='d-flex justify-space-around'>
            
          <v-col cols="12" xs="12" sm='6' md='6' lg="3">
         <!-- NOME -->
            <v-text-field                   
            v-model="form.fullName"   
            label="Nome completo"                    
            outlined          
            required      
            ></v-text-field> 
        </v-col> 
         <!-- Email -->
         <v-col cols="12" xs="12" sm='6' md='6' lg="3">        
          <v-text-field            
            label="Email"                            
            outlined 
            v-model="form.email"                
            :rules="emailRules"
            required                     
            ></v-text-field>    
        </v-col>           
        <!-- CPF -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">       
          <v-text-field                   
            v-model="form.cpf"   
            label="CPF"                    
            outlined   
            v-mask="cpfMask"
            placeholder="###.###.##-##"           
            ></v-text-field> 
        </v-col>   
        <!-- Data de nascimento -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">     
          <v-text-field                   
          v-model="form.birthday"   
          label="Data de Nascimento"                    
          outlined  
          v-mask="birthdayMask"        
          placeholder="##/##/####"                  
          ></v-text-field> 
        </v-col> 
         <!-- Estado -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">     
          <v-text-field                   
          v-model="form.state"   
          label="Estado"                    
          outlined         
                   
          ></v-text-field> 
        </v-col> 
        <!-- Cidade -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">     
          <v-text-field                   
          v-model="form.city"   
          label="Cidade"                    
          outlined          
          required            
          ></v-text-field> 
        </v-col>    
        <!-- CNPJ -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">     
          <v-text-field                   
          v-model="form.cnpj"   
          label="CNPJ"                    
          outlined  
          required        
          placeholder="##.###.###/####-##"
          v-mask='cnpjMask'            
          ></v-text-field> 
        </v-col>
        <!-- CREA -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">     
          <v-text-field                   
          v-model="form.crea"   
          label="CREA"                    
          outlined          
          required            
          ></v-text-field> 
        </v-col>  
         <v-col cols="12" xs="12" sm='6' md='6' lg="3">  
          <v-select
          :items="specialties"
          placeholder="Especialidade"
          outlined
          v-model='form.specialties'
        ></v-select>
        </v-col>
           <v-col cols="12" xs="12" sm='6' md='6' lg="3">    
            <v-text-field           
            label="Sua pagina personalizada"                   
            v-model="form.slug"
            required 
            hint="www.integrace.com/profissionais/nome-do-profissional"
            persistent-hint 
            outlined
            placeholder="nome-da-página"                 
            ></v-text-field>   
        </v-col>
        <!-- Password     -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">        
         <!-- PASSWORD -->
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
          <v-col cols="12" xs="12" sm='6' md='6' lg="3">

        <!-- REPEAT PASSWORD -->
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
            
   </v-row> 
            <button 
              class="primary btn mt-1"            
              :disabled="!valid"                       
              @click="validate"            
            >Registrar
            </button>  
        </v-form>
     </v-container>            
            </div>       
        
                        

  
  
</template>

<script>
import {mask} from 'vue-the-mask'
export default {
  
  directives: {mask},
  layout: 'admin',    
 data(){
      return {          
        valid: true,
        show1: false,
        show2: false,
         form: {
          fullName: '',
          email: '',
          cpf: '',
          birthday: '',
          state: '',
          city: '',
          cnpj: '',
          crea: '',
          razaoSocial: '',
          nomeFantasia: '',
          password: '',
          rePassword: '',
          slug: '',
       },
       specialties: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      //  mascaras
       cpfMask: '###.###.###-##',   
       cnpjMask: '##.###.###/####-##',
       birthdayMask: '##/##/####',      
       
  

       
      emailRules: [
        v => !!v || 'O email é obrigatório',
        v => /.+@.+\..+/.test(v) || 'O email deve ser válido',
      ],
      passwordConfirmationRule: [
         v =>  (this.form.password === this.form.rePassword) || 'A senha inserida deve ser igual'
      ]      
    }
    },
     methods: {   
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },   
        async register () {
          await this.$axios.post('profissionalRegister', this.form)        
        }
      }
    }  
</script>


<style>
  .btn {    
    padding: 0.8em 1.9em;    
    color: #fff;
  }
   .btn:hover {  
    background: rgb(19, 90, 182)!important;
    stroke-width: 5;
    stroke-dasharray: 15, 310;
    stroke-dashoffset: 48;
    transition: all 1.55s cubic-bezier(0.19, 1, 0.22, 1);
  }
</style>