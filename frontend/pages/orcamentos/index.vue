<template>
<div>
    <v-container fluid class='df-width'>
        <v-row>
            <!-- <v-col cols='12' md='2' v-for='orcamento in orcamentos' :key="orcamento.id">
                <div class='bg-primary-color d-flex align-center justify-center py-8 white--text'>Titulo</div>
                <v-card hover class='pt-4'>
                    <ul class='pa-0 pt-2 pb-6'>
                        <li class='gray text-center'>{{orcamento.name}}</li>
                        <li class='gray text-center'>{{orcamento.phone}}</li>
                        <li class='gray text-center'>{{orcamento.email}}</li>
                    </ul>
                </v-card>
            </v-col> -->
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            orcamentos: [],
        }
    },

    // async asyncData({
    //     app
    // }) {
    //     let orcamentos = await app.$axios.$get('budgets')
    //     return {
    //         orcamentos: orcamentos.data
    //     }

    // }
}
</script>

<style>

</style>
