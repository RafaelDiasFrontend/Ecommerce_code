<template>
<div class="carousel-wrapper">
    <h2 class='font-weight-medium primary-color text-center h2 title-padding'>Empresas Capacitadas</h2>
    <client-only>
        <slick :options="slickOptions">
            <div v-for="profissional in profissionais" :key="profissional" class="img-wrapper">

                <v-card class="ma-2" hover>
                    <v-container>
                        <v-img class="white--text d-flex align-center center" width="150px" src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png">
                        </v-img>
                    </v-container>
                    <v-card-subtitle class="pb-0 text-center gray font-weight-regular">{{ profissional.pin }}</v-card-subtitle>
                    <v-card-text class="text--primary">
                        <h3 class='gray body-1 pt-1 text-center font-weight-medium'>Nome do Profissional</h3>
                        <h4 class='body-2 text-center primary-color font-weight-regular'>Especialidade do profissional</h4>
                    </v-card-text>
                    <v-container>
                        <v-btn color="white" text class='center btn primary'>
                            Ver Perfil
                        </v-btn>
                    </v-container>
                </v-card>
            </div>
        </slick>
    </client-only>
</div>
</template>

<script>
export default {

    data() {
        return {
            slickOptions: {
                'arows': true,
                'dots': true,
                'focusOnSelect': true,
                'infinite': true,
                'speed': 500,
                'autoplay': true,
                'slidesToShow': 5,
                'touchThreshold': 5,
                "responsive": [{
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "initialSlide": 1,
                            "dots": false
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "dots": false
                        }
                    }
                ]
            },
            profissionais: [{
                    name: 'Nome da empresa',
                    pin: 'Ouro',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'Jorge',
                    pin: 'Bronze',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'Jeniffer',
                    pin: 'prata',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'freddy',
                    pin: 'Ouro',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'Jorge',
                    pin: 'Bronze',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'freddy',
                    pin: 'prata',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'freddy',
                    pin: 'Ouro',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'Jorge',
                    pin: 'Bronze',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'freddy',
                    pin: 'prata',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'freddy',
                    pin: 'Ouro',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'Jorge',
                    pin: 'Bronze',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'freddy',
                    pin: 'prata',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'freddy',
                    pin: 'Ouro',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'Jorge',
                    pin: 'Bronze',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'freddy',
                    pin: 'prata',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'freddy',
                    pin: 'Ouro',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'Jorge',
                    pin: 'Bronze',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'freddy',
                    pin: 'prata',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'freddy',
                    pin: 'Ouro',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'Jorge',
                    pin: 'Bronze',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'freddy',
                    pin: 'prata',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'freddy',
                    pin: 'Ouro',
                    especialidade: 'Engenharia Mecanica'
                },
            ]
        }
    }
}
</script>

<style>
.carousel-wrapper {
    padding: 40px;
    max-width: 1420px;
    margin: 0 auto;
}

.img-wrapper img {
    margin: auto;
    width: 200px;
    height: 100px;
    background-color: red;
}
</style>
