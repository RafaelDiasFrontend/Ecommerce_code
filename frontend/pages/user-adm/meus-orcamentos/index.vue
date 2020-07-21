<template>
<div>
    {{ orcamentos }}
    <v-container class='df-width'>
        <v-row>
            <v-col cols='12' md='3'>
                <v-card hover class='text-center py-12'>
                    <h2 class='about-title'>
                        Criado por
                    </h2>
                    <nuxt-link :to="{}">
                        <h3 class='p'>Rafael Dias</h3>
                    </nuxt-link>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            orcamentos: null
        }
    },
    async asyncData ({app, params}) {
        let orcamentos = await app.$axios.$get(`industrialBudget/${params.id}`)

        return {
            orcamentos: orcamentos
        }
    }
}
</script>

<style>

</style>
