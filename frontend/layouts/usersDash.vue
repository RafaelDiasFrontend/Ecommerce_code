<template>
<v-app id="inspire" flat>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app tile color='primary' dark>
        <v-list dense>
            <template v-for="item in items" router :to="item.route">
                <v-row v-if="item.heading" :key="item.heading" align="center">
                    <v-col cols="6">
                        <v-subheader v-if="item.heading">
                            {{ item.heading }}
                        </v-subheader>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <a href="#!" class="body-2 black--text">EDIT</a>
                    </v-col>
                </v-row>
                <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
                    <template v-slot:activator>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                    <v-list-item v-for="(child, i) in item.children" :key="i" link router :to="child.route">
                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ child.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item v-else :key="item.text" router :to="item.route" link>
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color='primary' dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
            <span class="hidden-sm-and-down font-weight-bold letter-spacing-1">Dashboard</span>
        </v-toolbar-title>

        <!-- <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Pesquisar"
        class="hidden-sm-and-down"
      /> -->
        <v-spacer />
        <template v-if="authenticated">
            <ul class='d-flex align-center font-weight-bold'>
                <li class='mr-3' style='white-space: nowrap;'>
                    <v-icon size='18' color='green'>fiber_manual_record</v-icon>
                </li>
                 <li class='mr-4' style='white-space: nowrap;'>{{ user.name }}</li>
                <li class='mr-4 text-lowercase' style='white-space: nowrap;'>{{ user.ability }}</li>
                <li class='mr-4' style='white-space: nowrap;'><a style="color: #fff;" href="" @click.prevent="signOut">sair</a></li>
                <li>
                    <v-btn icon large>
                        <v-icon color="grey lighten-2" large>
                            mdi-account-circle
                        </v-icon>
                    </v-btn>
                </li>
               
            </ul>
        </template>
    </v-app-bar>
    <v-content>
        <Nuxt />
    </v-content>
    <v-btn bottom class='mb-5' style='background: #363855;' dark fab fixed right @click="dialog = !dialog">

        <v-icon class='white--text'>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" class='dialog-card' width="800">
        <v-card color='grey lighten-5' class='custom-card'>
            <v-card-title class="white--text gray">
                <span class='center font-weight-bold primary-color h2'>Criar</span>
            </v-card-title>
            <v-container fluid class="width-95 pt-5">
                <v-row>
                    <v-col cols="12" xs="12" sm='6' md='6' lg="6" v-for="(dataFirst, i) in DashFirstData" :key="i" class='center'>
                      <v-card
                        hover
                        class="card-padding pa-custom text-center grey lighten-5 d-flex flex-column justify-space-between align-center"
                        flat    
                        @click="dialog = !dialog"   
                        width="300px"                                 
                        >  
                            <nuxt-link :to="dataFirst.route">
                                <v-icon size="90" class='white--text' color='primary'>{{ dataFirst.icon }}</v-icon>
                                <v-card-title class='font-weight-medium grey--text'>
                                    {{ dataFirst.name }}
                                </v-card-title> 
                            </nuxt-link>

                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>

    <template v-if="user.loginCount == '1'">
        <v-dialog v-model="welcome" class='dialog-card' width="900">
            <v-card color='grey lighten-5' class='custom-card d-flex flex-column align-content-around'>
                <div class='center'>
                    <img class='welcome-img' src="~/assets/imagens/integrace_user-welcome.png" alt='users'>
                </div>
                <v-card-title class="white--text gray center">
                    <h2 class='text-center mt-4 h2'>Olá, {{ user.name }}</h2>
                </v-card-title>             
                    <v-container>
                        <p class='font-weight-regular pa-5 gray text-center p'>Você solicitou um orçamento na área <b class='primary-color'>Engenharia Elétrica</b> a, abaixo temos um time de profissionais da sua especialidade selecionada, eles estão mais próximo da sua região, escolha o melhor profissional para lhe atender. Em caso de duvida do profissional, clique no botão automático, que será selecionado profissionais automaticamente. Colocar ate 6 profissionais.
                        </p>
                    </v-container>               
                <v-card-actions>
                    <v-btn class='center mt-5 btn-custom white--text' dark large @click="welcome = !welcome">Explorar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </template>

</v-app>
</template>

<script>
export default {
    // middleware: 'auth',
    props: {
        source: String,
    },
    methods: {
        async signOut() {
            await this.$auth.logout()
        }
    },
    data: () => ({
        dialog: false,
        welcome: true,
        drawer: null,
        DashFirstData: [{
                icon: 'assignment',
                text: '99',
                name: 'Orçamento',
                route: '/user-adm/orcamentos'
            },

        ],
        items: [{
                icon: 'dashboard',
                text: 'Principal',
                name: 'Principal',
                route: '/user-adm'
            },
            {
                icon: 'assignment',
                text: 'Meus Orçamentos',
                name: 'Orçamento',
                route: '/user-adm/meus-orcamentos'
            },
            {
                icon: 'person',
                text: 'Profissionais',
                route: '/user-adm/profissionais'
            },
            {
                icon: 'business',
                text: 'Empresa',
                route: '/user-adm/empresas'
            },

            {
                icon: 'settings',
                text: 'Configurações',
                route: "/user-adm/configuracoes"
            },
            {
                icon: 'mdi-message',
                text: 'Responder Mensagens',
                route: "/user-adm/responder-mensagens"
            },
            {
                icon: 'mdi-cellphone-link',
                text: 'Ir para o App',
                route: "/"
            },
        ],
    }),
}
</script>

<style>
.width-95 {
    max-width: 95%;
}

.custom-padding {
    padding: 5em 1em !important;
}

.custom-card {
    padding: 3em 3em;
}

.pa-custom {
    padding: 1.6em 1em;
}

.logo-default {
    padding-top: 5px;
    width: 135px;
    height: auto;
}

</style>
