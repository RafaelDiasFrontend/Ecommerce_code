<template>
    <div class="dashboard">  
    <v-container class="w-95 mt-3 d-flex center">                  
        <v-row>
      <v-col       
        cols="12"
        xs="12"
        sm='6'
        md='6'
        lg="3"       
        v-for="(dataFirst, i) in DashFirstData" 
        :key="i"  
      >
        <v-card
          
          class="pa-5 text-center d-flex justify-space-between align-center"
         flat
                                    
        >      
          <v-icon size="42">{{ dataFirst.icon }}</v-icon>
          <span class='headline font-weight-bold gray'> {{ dataFirst.text}}</span>       
        </v-card>
      </v-col>
    </v-row>
        </v-container>    
        
          
    </div>
</template>
<script>

export default {
    layout: 'usersDash', 
    data(){
      return {
      profissionais: [],
       DashFirstData: [
        { icon: '', text: '0' },
        { icon: '', text: '0' },
        { icon: '', text: '0' },
        { icon: 'assignment', text: '1' },
      ],    
      }
    },
      async asyncData({
        app
    }) {
        let profissionais = await app.$axios.$get('profissionalRegister')
        return {
            profissionais: profissionais.data
        }
    }     
}
</script>

<style>
 .h1-custom {   
    font-family: var(--primary-font); 
    color: var(--primary-color); 
    font-size: 2.5rem;
    font-weight: 800;    
    letter-spacing: 0.03em;  
  }
  .h3-custom {
    font-family: var(--primary-font); 
    color: var(--primary-color); 
    font-size: 1.2rem;
    font-weight: 600;    
    letter-spacing: 0.03em;    
  }
</style>
