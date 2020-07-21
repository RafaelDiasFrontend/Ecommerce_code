<template>
<section id='is-simple-to-begin'>
    <div class='is-simple-grid'>
        <div class='text-center about-title pb-custom'>É simples começar</div>
        <v-container class='default-width'>
            <v-row class='d-flex align-center default-width center py-5'>

                <!-- Col 1 -->
                <v-col cols='12' md='4' class='text-center d-flex flex-column'>
                    <span class='h2 py-2'>1</span>
                    <h3 class='h3 primary-color font-weight-bold'>Orçamento</h3>
                    <span class='py-3 gray'>Orçamentos gratuitos, no menor tempo, no menor prazo , menor preço e melhor qualidade</span>
                </v-col>
                <!-- Col 2 -->
                <v-col cols='12' md='4' class='text-center d-flex flex-column'>
                    <span class='primary-colort h2 py-2'>2</span>
                    <h3 class='h3 primary-color font-weight-bold'>Profissional</h3>
                    <span class='py-3 gray'>Profissionais capacitados, terão prioridades e vantagens para execução de orçamentos</span>
                </v-col>
                <!-- Col 3 -->
                <v-col cols='12' md='4' class='text-center d-flex flex-column'>
                    <span class='primary-colort h2 py-2'>3</span>
                    <h3 class='h3 primary-color font-weight-bold'>Empresas Parceiras</h3>
                    <span class='py-3 gray'>Empresas parceiras no ramo da engenharia e arquitetura, para execução de obras.</span>
                </v-col>
            </v-row>

            <div class='register-free d-flex flex-column'>
                <span class='text-center h2-title mb-custom pb-2'>Registre sua conta hoje mesmo é gratis</span>
                <span class='text-center h4 gray mb-custom pb-5'>Crie uma conta para começar a usar a plataforma.</span>
                <v-btn class='center btn-custom bg-secondary-color btn-width mt-5' dark large @click="dialog = !dialog">Registrar
                </v-btn>
                <v-dialog v-model="dialog" class='dialog-card' width="900">
                    <v-card color='grey lighten-5' class='custom-card'>
                        <v-card-title class="white--text gray">
                            <span class='center grey--text lighten-3 mb-5 pb-5 headline font-weight-light letter-spacing-4'>Você é um:</span>
                        </v-card-title>
                        <v-container fluid class="width-95 pt-5">
                            <v-row>
                                <v-col cols="12" xs="12" sm='6' md='6' lg="3" v-for="(dataFirst, i) in DashFirstData" :key="i" class='center'>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-card hover class="card-padding pa-custom text-center grey lighten-5 d-flex flex-column justify-space-between align-center" flat @click="dialog = !dialog" width="300px" v-on="on">
                                                <nuxt-link :to="dataFirst.route">
                                                    <v-icon size="60" class='white--text' color='grey darken-2'>{{ dataFirst.icon }}</v-icon>

                                                    <v-card-title class='font-weight-medium grey--text'>
                                                        {{ dataFirst.name }}
                                                    </v-card-title>
                                                </nuxt-link>

                                            </v-card>
                                        </template>
                                        <span>{{ dataFirst.tooltip }}</span>
                                    </v-tooltip>

                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-dialog>
            </div>

        </v-container>        
    </div>
      <div class='arrow-div d-mobile'>
        <ArrowScrolldownButtonIsSimpleToBegin />
    </div>   
</section>
</template>

<script>
import ArrowScrolldownButtonIsSimpleToBegin from '@/components/Buttons/ArrowScrolldownButtonIsSimpleToBegin'
export default {
    components: { ArrowScrolldownButtonIsSimpleToBegin },
    data() {
        return {
            dialog: false,
            DashFirstData: [{
                    icon: 'people',
                    name: 'Usuário',
                    route: '/registro',
                    tooltip: 'Crie um orçamento para personalizar sua pagina de Usuário'
                },
                {
                    icon: 'person',
                    text: '30',
                    name: 'Profissional',
                    route: '/registro/profissionais',
                    tooltip: 'Cadastre-se como um novo profissional Engenheiro ou Arquiteto'
                },
                {
                    icon: 'business',
                    text: '15',
                    name: 'Empresa',
                    route: '/registro/empresas',
                    tooltip: 'Cadastre-se como Empresa Parceira na execução das Obras'
                },
            ],
        }
    }
}
</script>

<style scoped>
#is-simple-to-begin {
    background: #ffffff;
    padding: 6.2em 0;
    display: grid;
}

.p {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
}

.pb-custom {
    padding-bottom: 2em;
}
.btn-width {
    width: 350px;
}
  

.register-free {
    padding: 8.4em 0;
}
.arrow-div {
    display: grid;
    justify-content: center;
    align-items: center;
    padding-top: 1.3em;
}

@media only screen and (max-width: 1380px) { 
#is-simple-to-begin {
    background: #ffffff;
    padding: 2.3em 0 0 0;
    display: grid;
}}
</style>
