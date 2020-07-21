<template>
    <v-container class='df-width'>
        
        <v-row v-for='profissional in profissionais' :key="profissional">
            <v-col cols='12' md='3'>
                  
                <v-card  class='py-5'>
                 
                        <!-- <img
                            src=""
                            alt="John"
                        > -->
                        <ul class='ma-0 pa-0 text-center'>
                            <li class='text-center'>
                                <v-icon color="grey lighten-2" center size='150'>
                                    mdi-account-circle
                                </v-icon>
                            </li>                            
                            <li class='h2 primary-color'>
                                {{ profissional.name }}
                            </li>
                            <li>
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
                            </li>   
                             <li>
                               
                            </li>                              
                        </ul> 
                    </v-card>                     
                </v-col>
                     <v-col ofsset="1" cols='12' md='8'>
                         <v-card>
                             <ul class='text-left'>
                                 <li class='primary-color about-title text-initial'>{{ profissional.name}}</li>
                                 <li class='primary-color about-title text-initial'>{{ profissional.specialty }}</li>
                             </ul>
                            
                         </v-card>
                     </v-col>      
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            profissionais: null,
            profissional: []

        }
    },
    async asyncData({
        app,
        params
    }) {
        let response = await app.$axios.$get(`profissionalRegister/${params.slug}`)

        return {
            profissionais: response.data

        }
    }
}
</script>

<style scoped>
.v-card {
    border-radius: 12px!important;
}


</style>
