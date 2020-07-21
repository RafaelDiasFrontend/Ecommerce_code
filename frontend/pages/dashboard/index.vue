<template>
    <div class="dashboard">
  <!-- GRID --> 
    <v-container fluid class="w-85 mt-3 center">
        <v-row class='mx-auto'>
            <v-col cols="12" xs="12" sm='6' md='6' lg="3" v-for="item in totals" :key="item.id">
                <!-- Info 01 -->
                <v-card hover class="py-2 pa-5 text-center d-flex justify-space-between align-center" flat>
                    <div class="d-flex flex-column">
                        <div class='d-flex flex-column align-start'>
                            <v-icon size='44' color='grey' class='py-2'>{{ item.icon }}</v-icon>
                            <div class="font-weight-medium h3 grey--text">{{ item.text }}</div>
                        </div>
                    </div>

                    <span class='font-weight-bold display-1 grey--text'>{{ item.value }}</span>
                </v-card>
            </v-col>   
        
       
        <v-col cols='12' sm='12'>               
           <BudgetCard :budgets="budgets"/>
        </v-col> 

        <v-col cols='12' sm='12'>               
           <BusinessCard :companies="companies"/>
        </v-col> 
          <v-col cols='12' sm='12'>               
           <ProfessionalCard :professionals="professionals"/>
        </v-col> 
        </v-row> 
 

     
  </v-container>
 
    </div>
</template>

<script>
import BusinessCard from '@/components/Cards/BusinessCard'
import ProfessionalCard from '@/components/Cards/ProfessionalCard'
import BudgetCard from  '@/components/Cards/BudgetCard'
export default {
    components: {
        BusinessCard,
        ProfessionalCard,
        BudgetCard
    }, 
  layout: 'admin',
  data() {
    return { 
        
      dialog: false,      
      totals: [],  
      companies: [],  
      professionals: [],
      budgets: [],  
      loginCount: 0,      
    }
  },    

    async asyncData ({ app }) {
      let totals = await app.$axios.$get('totals')
      let companiesTotal = await app.$axios.$get('companies')
      let professionalsTotal = await app.$axios.$get('profissionals')
      let budgetsTotal = await app.$axios.$get('budgets')
      return {
        totals: totals,
        companies: companiesTotal.data,
        professionals: professionalsTotal.data,
        budgets: budgetsTotal.data 
      }
      
    },
    
    
  }


</script>

<style scoped>
.important-info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 20px;
}
.list-grid{
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 20px;
}
</style>