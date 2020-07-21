<template>
<section id="mission" class='mg-mission'>
    <div class='text-center about-title pb-5'>O que acreditamos?</div>
    <v-container class='df-width mt-5'>
        <v-row>
            <v-col cols="12" sm="12" md="4" class='text-center'>
                <v-container class='plans-card'>
                    <img class='mission-img' src="~/assets/imagens/mission.png" alt='integrace_plataforma'>

                    <div class='primary-color h3-custom pt-5'>Missão</div>
                    <p class='p-custom py-5 gray pb-5'>A Integrace tem como missão prestar o melhor serviço de Engenharia e Arquitetura para seu cliente, buscando a excelência nos resultados em um menor tempo de execução de serviço e maior satisfação do cliente.
                    </p>
                </v-container>
            </v-col>
            <v-col cols="12" sm="12" md="4" class='text-center'>
                <v-container class='plans-card'>
                    <img class='mission-img' src="~/assets/imagens/vision.png" alt='integrace_plataforma'>
                    <div class='primary-color h3-custom pt-5'>Visão</div>
                    <p class='p-custom py-5 gray pb-5'>Ser uma Startup reconhecida como centro de excelência, no crescimento de profissionais
                        em todas as áreas de Engenharia e Arquitetura, assim ajudar no crescimento profissional e a desenvolver Parcerias com empresas.
                    </p>
                </v-container>
            </v-col>
            <v-col cols="12" sm="12" md="4" class='text-center'>
                <v-container class='plans-card'>
                    <img class='mission-img' src="~/assets/imagens/values.png" alt='integrace_plataforma'>
                    <div class='primary-color h3-custom pt-5'>Valores</div>
                    <p class='p-custom py-5 gray pb-5'>Nosso relacionamento com clientes, profissionais e empresas devem ser transparentes, com respeito, com ética, com moral, com foco, com compromisso, com respeito e sempre baseados na confiança entre as partes.
                    </p>
                </v-container>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols='12' md='12' class='text-center py-5 gray h4-custom'>
                <blockquote class='plans-card'>Menos é mais. Ser simples requer tempo e esforço. - <strong>Jeff Bullas
                    </strong>
                </blockquote>
            </v-col>
        </v-row>
    </v-container>
    <div class='arrow-div d-mobile'>
        <ArrowScrolldownButtonMission />
    </div>
</section>
</template>

<script>
import ArrowScrolldownButtonMission from '@/components/buttons/ArrowScrolldownButtonMission'
export default {
    components: {
        ArrowScrolldownButtonMission
    }

}
</script>

<style scoped>
.mission-img {
    width: 258px;
    height: auto;
}

.mg-mission {
    padding: 6.2em 0;
}

.h3-custom {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
}

.h4-custom {
    font-family: var(--primary-font);
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
}

.p-custom {
    text-align-last: center;
    font-size: 1.09rem;
    line-height: 1.80em;
    font-weight: 400;
    letter-spacing: 0.001em;
}

.arrow-div {
    display: grid;
    justify-content: center;
    align-items: center;
     margin-top: 10px;
}

blockquote {
    font-family: var(--font-family);
    font-size: 1.1em;
    width: 60%;
    margin: 5px auto;
    font-family: var(--font-family);
    font-style: italic;
    color: #555555;
    padding: 1.2em 30px 1.2em 75px;
    border-left: 8px solid var(--primary-color);
    line-height: 1.6;
    position: relative;
    background: #EDEDED;
}

blockquote::before {
    font-family: Arial;
    content: "\201C";
    color: var(--primary-color);
    font-size: 4em;
    position: absolute;
    left: 10px;
    top: -10px;
}

blockquote::after {
    content: '';
}

blockquote span {
    display: block;
    color: #333333;
    font-style: normal;
    font-weight: bold;
    margin-top: 1em;
}

/* Desktop */
@media only screen and (max-width: 1390px) {

    .p-custom {
        font-size: 0.92rem !important;
        line-height: 1.58em;
        font-weight: 400;
        color: rgba(23, 27, 46, 0.63);
        letter-spacing: 0;
    }

    .h3-custom {
        font-size: 1rem;
    }

    .h4-custom {
        font-size: 0.77rem;
    }

    .mission-img {
        width: 172px;
        height: auto;
    }

    .mg-mission {
        padding: 5em 0 !important;
    }

    blockquote {
        width: 65%;
    }

    .arrow-div {
        margin-top: -100px !important;
    }
}

@media only screen and (max-width: 450px) {
    .mg-mission {
        padding: 2.8em 0;
    }

    .plans-card {
        width: 100%!important;
        margin-left: auto !important;
        margin-right: auto !important;
    }
    .p-custom {
    text-align-last: center;
    font-size: 0.80rem!important;    
    line-height: 1.80em;
    font-weight: 400;
    letter-spacing: 0.001em;
}

    .h3-custom {
        font-size: 0.9rem;
    }

    .h4-custom {
        font-size: 0.70rem;
    }

    .pt-5 {
        padding-top: 0.4em !important;
    }

    .pt-5 {
        margin-top: 0.4em !important;
    }

    .pb-5 {
        padding-bottom: 0.4em !important;
    }

    .pb-2 {
        padding-bottom: 0.2em !important;
    }
   
}
</style>
