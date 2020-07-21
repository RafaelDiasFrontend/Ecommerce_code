<template>
<v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app class='bg-primary-color' :class="{ darkColor: themeDark }" dark>
        <div class='text-center white--text pt-12'>
            <v-icon size="120" dark>mdi-account-circle</v-icon>
            <div class='h3 white--text py-1 letter-spacing-2 font-weight-bold'>{{ user.name }}</div>
            <v-tooltip class='white' bottom>
                <template v-slot:activator="{ on }">
                    <div class='text-center'>
                        <v-icon class='secondary-color py-1' v-on="on">emoji_events</v-icon>
                    </div>
                </template>
                <div class='text-center'>
                    <div class='text-center'>Entregue projetos<br>e suba de patente</div>
                </div>
            </v-tooltip>
        </div>

        <v-list dense>
            <!-- <a :href="slugs"></a> -->
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
        <v-list-item @click.prevent="signOut" class='logout-bottom'>
            <v-list-item-action>
                <v-icon>logout</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>
                    Sair
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>        
          
             <div class='theme-color-change'>            
                <v-list-item>  
                <v-list-item-action>
                    <v-switch color='secondary' v-model='themePrimary' @change="themeDark = !themeDark" class="pa-0 ma-0"></v-switch>   
                </v-list-item-action>
                  <v-list-item-content>
                <v-list-item-title>
                    Default
                </v-list-item-title>
                  </v-list-item-content>                  
                </v-list-item>   
                      <v-list-item>  
                <v-list-item-action>
                    <v-switch color='secondary' v-model='themeDark' @change="themePrimary = !themePrimary " class="pa-0 ma-0"></v-switch>   
                </v-list-item-action>
                  <v-list-item-content>
                <v-list-item-title>
                    Dark
                </v-list-item-title>
                  </v-list-item-content>                             
                </v-list-item> 
                <nuxt-link to="como-ser-premium">    
                    <v-list-item>  
                        <v-list-item-action>
                        <v-switch disabled color='secondary'></v-switch> 
                        </v-list-item-action>
                        <v-list-item-content>
                        <v-list-item-title>
                        Premium
                        </v-list-item-title>
                        </v-list-item-content>                  
                    </v-list-item> 
                </nuxt-link>      
                 </div>          
    </v-navigation-drawer>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app class='bg-primary-color' dark :class="{ darkColor: themeDark}">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
            <div class="hidden-sm-and-down font-weight-bold grey--text text--lighten-3 letter-spacing-2 text-initial pr-2">Dash</div>
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
     
        <li>
            <div class="hidden-sm-and-down font-weight-regular grey--text text--lighten-3 letter-spacing-2 text-initial pr-2"> {{ user.ability }}</div>
        </li> 

         <li>
            <v-menu
            offset-y
            bottom          
            transition="scale-transition"
            >
            <template v-slot:activator="{ on }">
                <v-btn          
                icon
                dark
                v-on="on"
                >
                <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>
              <v-list dense class='h3'>              
                <v-list-item-group color="primary">
                    <!-- Nome -->
                    <v-list-item>
                    <v-list-item-icon>
                        <v-icon>face</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="user.name"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                    <!-- Edit Profile -->
                    <nuxt-link to="profissional-adm/perfil">
                          <v-list-item>
                    <v-list-item-icon>
                        <v-icon>edit</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Perfil</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                      </nuxt-link>            
                  
                </v-list-item-group>
                </v-list>
            </v-menu>           
    </li>
    <li class='pr-5 pl-1'>
        <v-badge 
        :content="messages"
        :value="messages"
        color='secondary'
        overlap
      >
        <v-icon>notification_important</v-icon>
      </v-badge>
    </li>
            </ul>
        </template>
    </v-app-bar>
    <v-content class='bg-content'>
        <Nuxt />
    </v-content>
    <v-btn bottom class='mb-5' style='background: #363855;' dark fab fixed right @click="dialog = !dialog" :class='{ darkColor: themeDark }'>

        <v-icon class='white--text'>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" class='dialog-card' width="900">
        <v-card color='grey lighten-5' class='custom-card'>
            <v-card-title class="white--text gray">
                <div class='text-center headline center grey--text lighten-3 mb-5 pb-5'>Ação rápida</div>
            </v-card-title>
            <v-container fluid class="width-95 pt-5">
                <v-row>
                    <v-col cols="12" xs="12" sm='6' md='6' lg="4" v-for="(dataFirst, i) in DashFirstData" :key="i" class='center'>
                        <v-card hover class="card-padding pa-custom text-center grey lighten-5 d-flex flex-column justify-space-between align-center" flat @click="dialog = !dialog" width="300px">
                            <nuxt-link :to="dataFirst.route">
                                <v-icon size="60" class='white--text' color='grey darken-2'>{{ dataFirst.icon }}</v-icon>
                                <v-card-title class='font-weight-medium grey--text'>
                                    {{ dataFirst.name }}
                                </v-card-title>
                            </nuxt-link>

                        </v-card>
                    </v-col>
                    <v-col>

                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
    <v-dialog v-model="welcome" class='dialog-card' width="900">
        <v-card color='grey lighten-5' class='custom-card d-flex flex-column align-content-around'>
            <div class='center'>
                <img class='welcome-img' src="~/assets/imagens/integrace_professional-welcome.png" alt='users'>
            </div>
            <v-card-title class="white--text gray center">
                <h2 class='text-center mt-4 h2'>Olá, {{ user.name }}</h2>
            </v-card-title>
            <v-container>
                <p class='font-weight-regular pa-5 gray text-center p'>{{ welcomeMessage }}</p>
            </v-container>
            <v-card-actions>
                <v-btn class='center mt-5 btn-custom white--text' dark large @click="welcome = !welcome">Navegar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-app>
</template>

<script>
export default {
    
    middleware: 'auth',  
    
    props: {
        source: String,
    },
    created() {
        this.slugs = '/profissional-adm/perfil/' + this.$store.getters['auth/user'].slug
    },
    methods: {
        async signOut() {
            await this.$auth.logout()
        },       
       
    },
    data: () => ({
         menu: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],       
    
        messages: 11,
        dialog: false,
        themePrimary: true, 
        themeDark: false,   
             
        themePrimary:  true,
        welcome: true,
        welcomeMessage: 'Olá seja bem vindo ao seu painel de controle! ',      
        drawer: null,
        slugs: '',
     


        DashFirstData: [{
                icon: 'face',
                text: '99',
                name: 'Perfil',
                route: '/profissional-adm/perfil'
            },
            {
                icon: 'assignment',
                text: '99',
                name: 'Orcamentos',
                route: '/profissional-adm/perfil'
            },
            {
                icon: 'assignment',
                text: '99',
                name: 'Orcamentos',
                route: '/profissional-adm/perfil'
            },

        ],
        items: [{
                icon: 'dashboard',
                text: 'Principal',
                name: 'Currículo',
                route: '/profissional-adm'
            },

            {
                icon: 'face',
                text: 'perfil',
                name: 'Perfil',
                //Aqui embaixo
                route: '/profissional-adm/perfil/'
            },
              {
                icon: 'assignment',
                text: 'Orcamentos',
                name: 'Orcamentos',
                route: '/profissional-adm/orcamentos'
            },

            {
                icon: 'settings',
                text: 'Configurações',
                route: "/profissional-adm/configuracoes"
            },
            {
                icon: 'mdi-message',
                text: 'Responder orcamentos',
                route: "/dashboard/responder-mensagens"
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
.theme-color-change {  
    padding-top: 8.6em;
}
.darkColor {
    background-color: #161616!important;
}
.lightColor {
    background-color: #c9c9c9!important;
}
.inspire {
    background-color: #6a737d !important;
}
.bg-content {
    background-color: #f1f2f7;
}
.width-95 {
    max-width: 95%;
}
.custom-padding {
    padding: 5em 1em !important;
}
.custom-card {
    padding: 3.8em 0 5.2em 0em;
}
.pa-custom {
    padding: 1.6em 1em;
}
</style>
