<template>  
  <div class='login-area'>
    <v-container>    
      <div class='login-grid'>  
        <v-card class="elevation-10 login-card" >                         
         <div class='text-center login-title dark-color pb-2'>Login</div>            
          <v-form action="" class='login-form mt-2' @submit.prevent="signin">   
          <!-- Email -->
            <v-text-field
            class='pt-4'
            label="email"
            v-model="form.email"            
            outlined 
            ></v-text-field>          
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
             <!-- Entrar -->
            <v-btn type='submit' class="bg-primary-color white--text btn-register mt-1">Login</v-btn>
            <div class='pt-2 d-flex justify-space-between'>
              <nuxt-link to="/esqueceu-senha" class='caption gray mt-2'>Esqueceu a sua senha?</nuxt-link>
              <nuxt-link to="/registro" class='caption gray mt-2'>Criar uma conta</nuxt-link> 
            </div>         
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
        show1: false,
         form: {
          email: '',
          password: ''          
       },      
      }
    },
    methods: {      
        async signin () {
         await this.$auth.loginWith('local', {
            data: this.form            
          })     

          this.$router.replace({ 
            name: 'index'
          })
        }
          //  Permissions
          // if(this.user.ability === 'PROFISSIONAL') {
          //     this.$router.push({
          //     path: this.$route.query.redirect  || '/profissional-adm'
          //   })
          // }       
          // if
          //    (this.user.ability === 'ADM') {
          //     this.$router.push({
          //     path: this.$route.query.redirect  || '/dashboard'
          //   })
          // }
          //   if
          //    (this.user.ability === 'EMPRESA') {
          //     this.$router.push({
          //     path: this.$route.query.redirect  || '/empresa-adm'
          //   })
          // }
          // if
          //    (this.user.ability === 'USUARIO') {
          //     this.$router.push({
          //     path: this.$route.query.redirect  || '/user-adm'
          //   })
          // }
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
  margin:  auto;
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