<template>
<section id="about02" class='py-custom'>
    <v-container class='df-width'>
        <!-- Linha 1  -->
        <v-row class='d-flex align-center'>
            <v-col cols="12" sm="12" md="6">
                <div class='flex-wrap-2'>
                    <img class='about-img' src="~/assets/imagens/integrace_about-03.png" alt=''>
                </div>
            </v-col>
            <v-col cols="12" sm="12" md="6">
                <div class='quem-somos'>
                    <span class='text-md-center text-lg-left text-xs-center text-sm-center about-title pb-3'>Como Funciona a nossa plataforma?</span>
                    <p class='p mt-1 pb-4'>
                        A Plataforma tem o objetivo de trazer você Profissional e Empresas Parceiras, uma ótima oportunidade de negócio. Contamos com Orçamentos de Clientes do Brasil inteiro, com grande potencial. Proporcionarem contratos em um só lugar, afinal, otimizar o tempo dos clientes, apresentando os melhores projetos, é o nosso diferencial.
                    </p>
                    <!-- <nuxt-link class='link' to='/quem-somos'>Saiba mais ></nuxt-link> -->
                    <nuxt-link to="/quem-somos">

                    </nuxt-link>
                </div>
            </v-col>
        </v-row>
        <v-row class='py-custom-2 d-flex align-center'>
            <v-col cols="12" sm="12" md="6">
                <div class='quem-somos'>
                    <span class='text-md-center text-lg-left text-xs-center text-sm-center about-title pb-3'>Juntos podemos ir mais longe</span>
                    <p class='p mt-1 pb-4'>                        
                        Orçamentos gratuitos, no menor tempo, no menor prazo, menor preço e melhor qualidade
                        Profissionais capacitados, terão prioridades e vantagens para execução de orçamentos.
                        Empresas parceiras no ramo da engenharia e arquitetura, para execução de obras.
                    </p>
                    <!-- <nuxt-link class='link' to='/quem-somos'>Saiba mais ></nuxt-link> -->

                </div>
            </v-col>
            <v-col cols="12" sm="12" md="6">
                <div class='flex-wrap'>
                    <img class='about-img' src="~/assets/imagens/integrace_about-04.png" alt='integrace_plataforma'>
                </div>
            </v-col>
        </v-row>
        <div class='arrow-div d-mobile'>
            <ArrowScrolldownButtonAbout02 />
        </div>
    </v-container>

</section>
</template>

<script>
import ArrowScrolldownButtonAbout02 from '@/components/Buttons/ArrowScrolldownButtonAbout02'
export default {
    components: {
        ArrowScrolldownButtonAbout02
    }
}
</script>

<style scoped>
.about-img {
    width: 558px;
    height: auto;
}

.arrow-div {
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 22px;

}

button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
}

button.learn-more {
    width: 12rem;
    height: auto;
}

button.learn-more .circle {
    -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: var(--primary-color);
    border-radius: 1.625rem;
}

button.learn-more .circle .icon {
    -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
}

button.learn-more .circle .icon.arrow {
    -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
}

button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: '';
    top: -0.25rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

button.learn-more .button-text {
    font-family: var(--primary-font);
    -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #282936;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;

}

button:hover .circle {
    width: 100%;
}

button:hover .circle .icon.arrow {
    background: #fff;
    -webkit-transform: translate(1rem, 0);
    transform: translate(1rem, 0);
}

button:hover .button-text {
    color: #fff;
}

.py-custom {
    padding: 2.4em 0 1.3em 0;
}

.py-custom-2 {
    padding: 2.4em 0 6em 0;
}

.about-us-home {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    grid-column-gap: 4em;
    max-width: 1340px;
    margin-left: auto !important;
    margin-right: auto !important;
    align-items: center;
}

.about-logo {
    display: flex;
    align-items: center;
    width: 500px;
    height: auto;
}

.ft-img {
    display: flex;
    align-items: center;
    width: 250px;
    height: auto;
}

.flex-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.flex-wrap-2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.bold-custom {
    font-weight: bold;
    font-style: italic;
}

.default-color {
    color: var(--default-color);
    font-weight: bold;
}

/* Helpers */
.mt-custom {
    margin-top: 6em;
}

@media only screen and (max-width: 1390px) {
    .about-img {
        width: 380px;
        height: auto;
    }

    .py-custom {
        padding: 0.9em 0 0.5em 0;
    }

    .py-custom-2 {
        padding: 1em 0 2.7em 0;
    }

    .arrow-div {
        display: grid;
        justify-content: center;
        align-items: flex-end;
        padding-top: 30px;
    }
}

@media only screen and (max-width: 1040px) {
    .arrow-div {
        padding-top: 30px;
    }
}

@media only screen and (max-width: 790px) {
    .about-us-home {

        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-column-gap: 4em;
        width: 92%;
    }
}


@media only screen and (max-width: 420px) {

    .flex-wrap,
    .flex-wrap-2 {
        justify-content: center;
    }

    .about-img {
        padding-top: 0.5em;
        width: 300px;
        margin: 0 auto !important;
    }

    .flex-wrap-2 {
        display: none;
    }

    .about {
        margin: 1.3em auto;
    }

    .about-home {
        display: grid;
        width: 82%;
        max-width: 370px;
        margin-top: 3em;
        margin-bottom: 2.5em !important;
    }


    .h2-custom {
        font-size: 1.02rem !important;
        letter-spacing: 0.06rem;
    }

    .pb-3 {
        padding-bottom: 0.3em !important;
    }

    .about-us-home {
        width: 82%;
        max-width: 370px;
        display: flex;
        flex-direction: column;
        align-items: center;       
        margin-bottom: 1.2em !important;
    }
    .about-img {
    width: 100%;
    height: auto;
}

    .ft-img {
        display: flex;
        align-items: center;
        width: 190px;
        height: auto;
        margin-bottom: 1.3em;
    }

    /* Helpers */
    .mt-custom {
        margin-top: 1.6em !important;
    }
}


</style>
