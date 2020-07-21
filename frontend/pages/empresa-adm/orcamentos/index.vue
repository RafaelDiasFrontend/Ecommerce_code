<template>
<div class="dashboard">    
    <v-container fluid class="w-85 mt-3 center">       
         <v-row>
            <v-col cols='12' md='6' lg='4' xl='3' v-for='budget in budgets' :key='budget.id'>
                <v-card class="box" hover>
                    <v-container>
                        <!-- Avatar -->
                        <!-- <div class="text-center my-2">
                            <v-icon size="150" color="grey lighten-1">mdi-account-circle</v-icon>
                        </div> -->                        
                        <div class="f-flex  flex-column">
                            <!-- Name -->
                            <div class="pb-0 card-title text-left no-wrap primary-color font-weight-bold font-weight-regular">
                               {{ budget.name }}
                            </div>
                          
                             <ul class="my-2 h4 left py-1 align-center">                                
                                <li class='card-subtitle'>{{ budget.type }}</li>                                                     
                                <li class='card-subtitle-2 my-1'>{{ budget.specialtyArea1 }}</li>
                                <li class='card-subtitle-2  secondary-color text-lowercase'>{{ budget.servicesType1 }}</li>
                                 <li class='card-created-at mt-1'>{{ budget.created_at }}</li>   
                            </ul>
                        </div>                        

                        <div class='text-left mt-3 font-weight-bold'>
                            <nuxt-link
                            class='card-link text-center'
                             :to="{                               
                                name: 'profissional-adm-orcamentos-id',
                                params: {
                                     id: budget.Id
                                }
                            }"
                            
                            >Ver Detalhes</nuxt-link>                       
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
    layout: 'proDash',
    data() {
        return {
            budgets: [],
        }
    },
    methods: {
        async Orcamento () {
            this.$router.push({
                name:'orcamentos',
                name:'profissional-adm-orcamentos-id',
                path:'profissional-adm-orcamentos-id',             
                    params: {
                        id: budget.id
                    }
            })
        }
    },


    async asyncData({
        app,       
    }) {
        let response= await app.$axios.$get('budgets')
        return {
            budgets: response.data
        }
    }
}
</script>

<style scoped>
.card-title {
    font-family: var(--primary-font);
    font-size: 1rem!important;
    font-weight: 700;
    letter-spacing: 0.30px;
    
}
.card-subtitle {
    font-family: var(--primary-font);
    font-size: 0.88rem!important;
    font-weight: 700;
    letter-spacing: 0.30px;
   color: rgba(129, 129, 129, 0.795);
}
.card-subtitle-2 {
    font-family: var(--primary-font);
    font-size: 0.78rem!important;
    font-weight: 500;
    letter-spacing: 0.30px;
   color: rgba(167, 165, 165, 0.795);
}
.card-created-at {
    font-family: var(--primary-font);
    font-size: 0.80rem!important;
    font-weight: 500;
    letter-spacing: 0.30px;
    color: rgba(167, 165, 165, 0.795);
}
.card-link {
    font-family: var(--primary-font);
    font-size: 0.78rem!important;
    font-weight: 700;   
    color: rgba(49, 49, 49, 0.795);
}
</style>
