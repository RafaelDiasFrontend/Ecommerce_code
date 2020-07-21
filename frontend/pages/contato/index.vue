<template>  
  <div class='login-area'>
    <v-container>    
      <div class='login-grid'>  
        <v-card class="elevation-10 login-card" >                         
        <h2 class='text-center headline font-weight-medium mb-5 pb-5'>Entre em contato</h2>              
          <v-form 
            ref="form"         
            class='login-form mt-2'
            @submit.prevent="submitContact"          
          >   
          <!-- Nome -->
            <v-text-field
            class='pa-0'
            label="Nome"
            v-model="form.name"
             
            outlined 
            ></v-text-field>  
            <!-- Email -->
              <v-text-field
            class='pa-0'
            label="Email"
            v-model="form.email"             
            outlined 
            ></v-text-field> 
            <!-- senha -->
            <v-text-field
            label="Assunto"
            class='pa-0'             
            v-model="form.subject"  
            outlined
                
            ></v-text-field> 
              <v-text-field
            class='pa-0'
            label="Nome"
            v-model="form.phone"
            placeholder="(XX) XXXXX-XXXX"
            v-mask='phoneMask'    
             outlined       
           
            ></v-text-field>  
               <v-textarea
                outlined
                filled                
                class='pa-0'
                name="input-7-4"
                label="Mensagem"
                v-model="form.message"
                value=""
                auto-grow
                ></v-textarea>
             <!-- Entrar -->
            <v-btn type='submit' large class="primary btn">Enviar</v-btn>                
          </v-form>                         
        </v-card>
      </div>       
    </v-container>
  </div>    
</template>

<script>
import {mask} from 'vue-the-mask'
 

  export default {   
    directives: {mask}, 
     
    data() {
      return {
         form: {
          name: '',
          email: '',
          phone:'',
          subject: '',
          message: '',
       },
         
       phoneMask: '(##) #####-####',
      }
    },

    methods: {      
      async submitContact () {
          await this.$axios.post('contactForm', this.form)               
    }
  },
  
}
  
</script>

<style scoped>
.contatc-page{
  display: grid; 
  background: var(--primary-bg-gradient)!important; 
  margin-top: -60px;
  
}

.login-grid {   
  max-width: 500px;
  height: 100%;
  display: grid; 
  grid-template-columns: 1fr;
  justify-content: center;
  margin:  auto;
  align-items: center;
  padding-top: 6em;
  padding-bottom: 3em;  
}
.login-card {
  padding: 3.4em 1em; 
}
  .login-form {   
   width: 70%;
   margin: 0 auto;        
  }

  .btn {
    width: 100%;
    padding: 1em;
    color: #fff;
    border-radius: 3px;
  }
   .btn:hover {
    width: 100%;
    padding: 0.8em;   
    stroke-width: 5;
    stroke-dasharray: 15, 310;
    stroke-dashoffset: 48;
    transition: all 1.55s cubic-bezier(0.19, 1, 0.22, 1);
  }
 
</style>