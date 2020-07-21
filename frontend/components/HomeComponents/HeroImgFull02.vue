<template>
<section id="hero-img" class='intro'>

    <h1 class='d-none'>integrace</h1>
    <div class='grid-slide-text'>
        <div class=" h1-custom primary-color animation-1 width-500">Crie o seu orçamento hoje mesmo!</div>

        <v-btn class='blue btn-custom white--text' dark large @click="dialog = !dialog">
            <span class='btn_custom-text'>Orçamento
            </span>
        </v-btn>
        <v-dialog v-model="dialog" class='dialog-card' width="1000">
            <v-card color='grey lighten-5' class='custom-card'>
                <v-card-title class="white--text gray">
                    <span class='center grey--text lighten-3 mb-5 pb-5 h4-mobile span-custom font-weight-medium'>Escolha o tipo de orçamento que deseja:</span>
                </v-card-title>
                <v-container fluid class="width-95 pt-5">
                    <v-row>
                        <v-col cols="12" md='6' lg="3" v-for="(dataFirst, i) in DashFirstData" :key="i">

                            <v-card hover class="card-padding pa-custom text-center grey lighten-5 d-flex align-center flex-column justify-space-between center mobile-card" flat @click="dialog = !dialog" width="300px">
                                <nuxt-link :to="dataFirst.route">
                                    <v-icon size="60" class='white--text' color='grey darken-2'>{{ dataFirst.icon }}</v-icon>

                                    <v-card-title class='subtitle font-weight-regular grey--text'>
                                        {{ dataFirst.name }}
                                    </v-card-title>
                                </nuxt-link>

                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>

    </div>
    <span class='arrow-div d-mobile'>
        <ArrowScrolldownButton />
    </span>
</section>
</template>

<script>
import ArrowScrolldownButton from '@/components/Buttons/ArrowScrolldownButton'
export default {
    components: {
        ArrowScrolldownButton
    },
    data() {
        return {
            dialog: false,
            DashFirstData: [{
                    icon: 'domain_disabled',
                    name: 'Industrial',
                    route: '/orcamentos/industrial'
                },
                {
                    icon: 'apartment',
                    text: '30',
                    name: 'Predial',
                    route: '/orcamentos/predial'
                },
                {
                    icon: 'house',
                    text: '15',
                    name: 'residencial',
                    route: '/orcamentos/residencial'
                },
                {
                    icon: 'location_city',
                    text: '99',
                    name: 'Arquitetura',
                    route: '/orcamentos/arquitetura'
                },

            ],
        }
    }
}
</script>

<style scoped>
.intro {
    z-index: -99;
    min-height: 100vh;
    margin-top: -60px;
    height: 100vh;
    background-image: linear-gradient(295deg, rgba(28, 35, 46, 0.034) 0%, rgba(61, 92, 124, 0.089) 0%, rgba(44, 26, 54, 0.055) 100%, rgba(151, 119, 211, 0.068) 100%);
    
    /* url('~assets/imagens/integrace_banner.png') */
    background-size: cover;
    background-position: top;
    display: grid;
    grid-template-columns: 1fr;
}

.animation-1 {
    animation-name: moveInLeft;
    animation-duration: 1.9s;
    animation-timing-function: ease-out;
}

.animation-2 {
    animation: moveInRight 1.9s ease-out;
}

.grid-slide-text {
    display: grid;
    justify-content: left;
    align-content: center;
    grid-gap: 2em;
    text-align: left;
    max-width: 900px;
    margin-left: 15%;
    height: 83vh;
    align-items: center;
}

.grid-slide-text {
    display: grid;
    justify-content: left;
    align-content: center;
    grid-gap: 2em;
    text-align: left;
    max-width: 900px;
    margin-left: 15%;
    height: 83vh;
    align-items: center;
}

.btn-custom {
    height: 53px !important;
    border-radius: 100px;
    width: 189px;
    background-color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
}

.h1-custom {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    letter-spacing: 0.068em !important;
    font-size: 2.40rem;
    line-height: 1.53;
    margin-top: 2.2em;
    color: var(--primary-color) !important;
}

.span-custom {
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}
.arrow-div {
    display: grid;
    justify-content: center;
    align-content: center;
}

.custom-color {
    color: rgb(212, 212, 212);
}

.width-500 {
    max-width: 550px;
}

/* Desktop */
@media only screen and (max-width: 1370px) {
    .p-custom {
        font-size: 1rem;
        line-height: 0.6;
        font-weight: 400;
    }

    .h1-custom {
        font-size: 1.5rem;
    }

    .btn-custom {
        height: 49px !important;
        font-size: 12px;
        width: 140px;
    }
}

/* large Desktop */
@media only screen and (max-width: 2600px) {
    .intro {
        /* background-image: url('~assets/imagens/integrace_banner-large.png'); */
        background-position: center;
        background-size: cover;
    }
}

@media only screen and (max-width: 900px) {
    .h1-custom {
        font-size: 1.4rem;
    }

    .width-500 {
        max-width: 270px;
    }
}

/* Mobile */
@media screen and (max-width: 500px) {
    .intro {
        background-image: url('~assets/imagens/integrace_banner-mobile.png');
        background-position: center;
        background-size: cover;
    }

    .btn-custom {
        width: 105px !important;
        height: 39px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        margin-top: 7px !important;
    }

    .btn_custom-text {
        font-size: 0.60rem !important;
      
    }
.span-custom {
    font-size: 0.75rem!important;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--secondary-color)!important;
}
    .grid-slide-text {
        display: grid;
        justify-content: center;
        align-content: end;
        grid-gap: 0;
        text-align: center !important;
        max-width: 420px;
        margin-left: 0;
        height: 84vh;
        align-items: center;
    }

    .h1-custom {
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        font-size: 1.39rem;
        text-align: center !important;
    } 

    .mobile-card {
        width: 220px !important;
    }

}
</style>
