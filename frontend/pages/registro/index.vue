<template>  
  <div class='login-area primary-bg-gradient'>
    <v-container>    
      <div class='login-grid'>  
        <v-card class="elevation-3 login-card" >                         
        <h2 class='text-center headline font-weight-medium pb-5'>Registrar</h2>              
          <form action="" class='login-form mt-2' @submit.prevent="register">  
          <!-- Name -->
            <v-text-field
            class='pa-0'
            label="Nome"
            v-model="form.name"             
            outlined 
            ></v-text-field>  
          <!-- Email -->
            <v-text-field
            class='pa-0'
            label="email"
            v-model="form.email"             
            outlined 
            ></v-text-field>  
            <!-- Password -->
            <v-text-field
            label="senha"
            class='pa-0'
            type="password"     
            v-model="form.password"      
            
            outlined     
            ></v-text-field> 
             <!-- Submit -->
            <button class="primary btn mt-1">Registrar</button>
            <div class='pt-2'>
              <nuxt-link to='login' class='caption gray mt-2'>Já tem uma conta?</nuxt-link> 
            </div>         
          </form>                         
        </v-card>
      </div>       
    </v-container>
  </div>    
</template>

<script>

  export default {    
    data() {
      return {
         form: {
          name: '',
          email: '',
          password: ''
       }
      }
    },
    methods: {      
        async register () {
          await this.$axios.post('register', this.form)
        
          await this.$auth.login({
             data: {
               email: this.form.email,
               password: this.form.password
             }
           })

          this.$router.push({
            path: this.$route.query.redirect  || '/dashboard'
          })
        }
      }
    }
  
</script>

<style scoped>
.login-area{
  display: grid;
  height: 100vh;
  background: var(--primary-bg-gradient);

}
.login-grid {   
  max-width: 500px;
  height: 100%;
  display: grid; 
  grid-template-columns: 1fr;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  padding-top: 3em;
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
    color: #fff;
  }
   .btn:hover {
    width: 100%;
    padding: 0.8em;
    background: rgb(19, 90, 182)!important;
    stroke-width: 5;
    stroke-dasharray: 15, 310;
    stroke-dashoffset: 48;
    transition: all 1.55s cubic-bezier(0.19, 1, 0.22, 1);
  }
  





</style>