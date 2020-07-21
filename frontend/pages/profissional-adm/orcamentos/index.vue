<template>
<div class="dashboard">    
    <v-container fluid class="w-85 mt-3 center">       
        <BudgetCard :budgets="budgets"/>
    </v-container>

</div>
</template>

<script>
import BudgetCard from '@/components/Cards/BudgetCard'
export default {
    layout: 'proDash',
    components: {
        BudgetCard
    },
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
