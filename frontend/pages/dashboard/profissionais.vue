<template>
<div class="dashboard">    
    <v-container fluid class="w-85 mt-3 center">          
      
         <v-row class='mt-12'>
            <v-col cols='12' lg='2' v-for='profissional in profissionais' :key='profissional.id'>
                <v-card class="pb-5 pa-0" hover>
                    <v-container>
                        <!-- Avatar -->
                        <div class="text-center my-2">
                            <v-icon size="150" color="grey lighten-1">mdi-account-circle</v-icon>
                        </div>
                        
                        <div class="f-flex flex-column">
                            <!-- Name -->
                            <div class="pb-0 text-center primary-color title font-weight-bold font-weight-regular">
                                {{ profissional.name }}
                            </div>
                            <div class="my-2 text-center d-flex align-center justify-center primary-color body-1 subtitle font-weight-regular">
                                <v-icon class='mr-1'>school</v-icon> <div class='ml-1'>{{ profissional.courseInstitution }}</div>
                            </div>
                             <div class="my-2 text-center d-flex align-center justify-center primary-color body-1 subtitle font-weight-medium">
                                 <div class='ml-1'>{{ profissional.state }} - </div>
                                <div class='ml-1'>{{ profissional.city }}</div>
                            </div>
                        </div>                        

                        <div class='text-center'>
                            <nuxt-link
                            :to="{
                               
                                name: 'profissional-adm-perfil-slug',
                                params: {
                                   slug: profissional.slug
                                }
                            }"
                            
                            >Ver Perfil</nuxt-link>                       
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
    layout: 'admin',
    data() {
        return {
            profissionais: [],
        }
    },
    methods: {
        async Perfil () {
            this.$router.push({
                name:'perfil',
                name:'profissional-adm-perfil-slug',             
                    params: {
                        slug: profissional.slug
                    }
            })
        }
    },


    async asyncData({
        app
    }) {
        let profissionais = await app.$axios.$get('profissionals')
        return {
            profissionais: profissionais.data
        }
    }
}
</script>

<style>

</style>
