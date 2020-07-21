<template>
    <div class="dashboard">  
    <v-container class="width-95 grey lighten-5 mt-3 d-flex center">                  
        <v-row>                     
            <v-col cols='12' lg='2' v-for='company in companies' :key='company.id'>
                <v-card class="py-5 pa-0" hover>
                    <v-container >
                        <v-img                        
                        class="white--text d-flex align-center center"
                        width="100px"

                        src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
                        >     
                        </v-img>    
                          
                        <v-card-subtitle class="pb-0 text-center gray font-weight-regular">
                             <v-rating
                            align="center"
                            class="mt-1"
                            :value="5"
                            color="secondary"
                            dense
                            half-increments
                            readonly
                            size="16"
                            >
                        </v-rating> 
                        <h3 class='primary-color title font-weight-bold'>{{ company.fantasyName }}</h3>                           
                           </v-card-subtitle>
                            <div>
                            <h3 class='gray body-2 pb-2 text-center'>{{ company.state }}</h3>    
                            <h4 class='gray body-2 pb-2 text-center'>{{company.city }}</h4>    
                            <div class='text-center'>       
                                <v-chip
                                class="ma-0 body-2"
                                color="grey"
                                text-color="white"
                                >
                                Premium
                                <v-icon right>mdi-star</v-icon>
                                </v-chip>   
                                <v-chip
                                class="ma-2"                               
                                color="grey"
                                text-color="white"                               
                                >      
                                Confirmado
                                <v-icon right>check_circle</v-icon>
                                </v-chip>    
                            </div>

                           
                            <h5 class='gray body-1 pt-1 text-center font-weight-regular'>Menos de % km de você</h5>
                            </div>              
                            <div class='text-center'>
                                <a href="">Ver perfil</a>                            
                            </div>                             
                    </v-container>    
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
      companies: [],    
      }
    },
      async asyncData({
        app
    }) {
        let companies = await app.$axios.$get('companyRegister')
        return {            
        companies: companies.data
        }
    }     
}
</script>

<style>

</style>
