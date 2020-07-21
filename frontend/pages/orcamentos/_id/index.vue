<template>
<div>
   {{ name }}
    <v-container class='df-width'>
        <v-row>
            <v-col cols='12' md='12'>
                <v-card hover class='text-center py-12'>
                    <h2 class='about-title'>
                        Criado por
                    </h2>
                    <nuxt-link :to="{}">
                        <ul>

                        </ul>
                        <h3 class='p'>{{ email }}</h3>
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
        let orcamentos = await app.$axios.$get(`budgets/${params.id}`)

        return {
            orcamentos: orcamentos
        }
    }
}
</script>

<style>

</style>
