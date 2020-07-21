<template>
<section class="carousel-wrapper">   
    <client-only>
        <slick :options="slickOptions">
            <div v-for="profissional in profissionais" :key="profissional.id" class="img-wrapper mt-slick">

                <v-card class="ma-2 professional-box">
                    <v-container class='testimonials-card-grid'>
                        <div class='testimonials-card-header'>
                            <v-icon size="32" class='quotation-marks'>format_quote</v-icon>
                        </div>
                        <div class='testimonials-card-body'>
                            <p class='quote-title regular-1 grey--text p-small pl-1'>{{profissional.quote}}</p>
                        </div>
                        <div class='testimonials-card-footer d-flex justify-space-between align-center mb-1'>
                            <span class='h4 gray font-weight-bold'>{{ profissional.name }}</span>
                            <v-avatar>
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                            </v-avatar> 
                        </div>
                    </v-container>
                </v-card>
            </div>
        </slick>
    </client-only>
</section>
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
                'speed': 1200,
                'autoplay': true,
                'slidesToShow': 4,
                'touchThreshold': 4,
                "responsive": [{
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
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
                    name: 'Ana',
                    quote: 'Site Clean, fácil de usar, rápido e funcional. Ansiosa para iniciar novos projetos. Parabéns!!',
                    especialidade: 'Engenharia Mecanica'
                },                 
                {
                    name: 'Jorge',
                    quote: 'Fiquei surpreso com o resultado da Integrace. Em uma semana praticamente, fiz de serviços o que meu escritório fazia em um MÊS.',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'Jorge',
                    quote: 'Fiquei surpreso com o resultado da Integrace. Em uma semana praticamente, fiz de serviços o que meu escritório fazia em um MÊS.',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'Jorge',
                    quote: 'Fiquei surpreso com o resultado da Integrace. Em uma semana praticamente, fiz de serviços o que meu escritório fazia em um MÊS.',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'Jorge',
                    quote: 'Fiquei surpreso com o resultado da Integrace. Em uma semana praticamente, fiz de serviços o que meu escritório fazia em um MÊS.',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'Rafael Dias',
                    quote: 'Integrace foi um prazer fechar negócio com vocês!',
                    especialidade: 'Engenharia Mecanica'
                },
                {
                    name: 'Osvaldo',
                    quote: 'Site muito rápido e clean parabens!',
                    especialidade: 'Engenharia Mecanica'
                },               

            ]
        }
    }
}
</script>

<style>
.carousel-wrapper {
    padding: 0em 0;  
    margin: 0 auto;
  
}

.img-wrapper img {
    margin: auto;
    width: 40px;
    height: auto;
    background-color: red;
}
.professional-box {
     border-radius: 14px;
    background-color: #fff;
    box-shadow: 0 0 40px 0 rgba(94,92,154,.06);
    

}
.mt-slick {
    margin-top: 0em;
 
}

.quotation-marks {
    transform: rotateY(3.142rad);
}

.quote-title {
    font-size: 0.94rem;
    line-height: 1.4;
}

.testimonials-card-grid {
    display: grid;
    grid-template-rows: 30px 120px 30px;
    padding: 1em;
    grid-row-gap: 5px;
    margin-left: 0.4em;
    
}
.professional
.testimonials-card-header {
    display: flex;
    align-items: center;
}

.testimonials-card-body {
    display: flex;
    align-items: center !important;
}

.testimonials-card-footer {
    align-items: center !important;
}



</style>
