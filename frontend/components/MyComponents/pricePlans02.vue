<template>
<section id="plans" class='py-custom'>
    <div class='about-title text-center pb-2'>Confira os nossos planos</div>
    <div class='text-center h4 gray mb-custom pb-5'>Exclusivo para profissionais</div>

    <v-container class='mt-3 plans-container'>
        <v-row>
            <!-- premium -->
            <v-col cols='12' xs='12' md='6' lg='6' xl='3' sm='12'>
                <v-card width="100%" hover>
                    <div class='price-plan-title bg-primary-color white--text text-center text-uppercase'>Premium</div>
                    <ul class='text-center'>
                        <li class='gray mt-2 span-tag'>acesso total a plataforma.</li>
                        <li class='gray mt-1 py-2 h2'>R$00,00</li>
                        <li class='gray  span-tag font-weight-bold'>INCLUSO NO PLANO</li>
                        <li class='gray  pa-1 span-tag grey-custom'>Número de orçamentos ilimitado</li>
                        <li class='gray  pa-1 span-tag'>Desconto de 10% por indicação de cada Profissional</li>
                        <li class='gray  pa-1 span-tag grey-custom'>Prioridade de visualização dos orçamentos nas primeiras horas.</li>
                        <li class='gray  pa-1 span-tag'>Prioridade de atendimento do cliente mais próximo de você</li>
                         <li class='gray  pa-1 span-tag grey-custom'>Visualizar orçamentos mais próximo de você</li>
                        <li class='gray  pa-1 span-tag'>Plano de Fidelização</li>
                        <li class='gray  pa-1 span-tag grey-custom'>Desconto com Cursos e Treinamentos</li>
                        <li class='gray  pa-1 span-tag '>Atendimento via telefone das 9h ás 18hrs</li>
                        <li class='gray  pa-1 span-tag  grey-custom'>Atendimento via Whatsapp das 9h ás 18hrs</li>
                         <li class='gray  pa-1 span-tag'>Atendimento via telefone das 9h ás 18hrs</li>                    
                    </ul>
                    <v-card-actions>
                        <v-btn class='my-2 center btn-custom white--text block' large>Comprar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <!-- ADVANCED -->
            <v-col cols='12' xs='12' md='6' lg='6' xl='3' sm='12' class='center'>
                <v-card width="100%" hover>
                    <div class='price-plan-title bg-primary-color white--text text-center text-uppercase'>Avançado</div>
                    <ul class='text-center'>
                        <li class='gray mt-2 span-tag'>
                            Plano de maior acesso e benefícios
                        </li>
                        <li class='gray mt-1 py-2 h2'>R$00,00</li>
                        <li class='gray span-tag font-weight-bold'>INCLUSO NO PLANO</li>
                        <li class='gray pa-1 span-tag grey-custom'>Número de orçamentos limitado a 10.</li>
                        <li class='gray  pa-1 span-tag'> - </li>
                        <li class='gray  pa-1 span-tag grey-custom'>Prioridade de visualização dos orçamentos nas primeiras horas</li>
                        <li class='gray  pa-1 span-tag'>Prioridade de atendimento do cliente mais próximo de você</li>
                        <li class='gray  pa-1 span-tag grey-custom'>Vizualizar orçamentos mais próximo de você</li>
                        <li class='gray  pa-1 span-tag'>Plano de Fidelização</li>
                        <li class='gray  pa-1 span-tag grey-custom'>Desconto com Cursos e Treinamentos</li>                      
                        <li class='gray  pa-1 span-tag'>Atendimento via telefone das 9h ás 18hrs</li>
                        <li class='gray  pa-1 span-tag grey-custom' >Atendimento via Whatsapp das 9h ás 18hrs</li>
                        <li class='gray  pa-1 span-tag'>Atendimento via Facebook das 9h ás 18hrs</li>  
                    </ul>
                    <v-card-actions>
                        <v-btn class='my-2 center btn-custom white--text block' large>Comprar</v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>
            <v-col cols='12' xs='12' md='6' lg='6' xl='3' sm='12' class='center'>
                <v-card width="100%" hover>
                    <div class='price-plan-title bg-primary-color white--text text-center text-uppercase'>Básico</div>
                    <ul class='text-center'>
                        <li class='gray mt-2 span-tag'>Plano econômico ideal para quem esta iniciando</li>
                        <li class='gray mt-1 py-2 h2'>R$00,00</li>
                        <li class='gray  span-tag font-weight-bold'>INCLUSO NO PLANO</li>
                        <li class='gray  pa-1 grey-custom span-tag'>Numero de orçamentos limitado a 5</li>
                        <li class='gray  pa-1 span-tag'> - </li>
                        <li class='gray  pa-1 span-tag grey-custom'> - </li>
                         <li class='gray  pa-1 span-tag'> - </li>
                        <li class='gray  pa-1 span-tag grey-custom'>Visualizar orçamentos mais próximo de você</li>
                        <li class='gray  pa-1 span-tag'>Plano de Fidelização</li>
                        <li class='gray  pa-1 span-tag grey-custom'>Desconto com Cursos e Treinamentos</li>                                     
                        <li class='gray  pa-1 span-tag'>Atendimento via telefone das 9h ás 18hrs</li>
                        <li class='gray  pa-1 span-tag grey-custom'>Atendimento via Whatsapp das 9h ás 18hrs</li>
                        <li class='gray  pa-1 span-tag '>Atendimento via telefone das 9h ás 18hrs</li>  
                    </ul>
                    <v-card-actions>
                        <v-btn class='my-2 center btn-custom bg-secondary-color white--text block' large>Comprar</v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>
            <v-col cols='12' xs='12' md='6' lg='6' xl='3' sm='12' class='center'>
                <v-card width="100%" hover>
                    <div class='price-plan-title bg-primary-color white--text text-center text-uppercase'>Grátis</div>
                    <ul class='text-center'>
                        <li class='gray mt-2 span-tag'>acesso grátis a ferramenta de demonstração</li>
                        <li class='gray mt-1 py-2 h2'>R$0,00</li>
                        <li class='gray span-tag font-weight-bold'>INCLUSO NO PLANO</li>
                        <li class='gray pa-1 span-tag grey-custom'>Número de orçamentos limitado a 1</li>
                        <li class='gray pa-1 span-tag'> - </li>
                        <li class='gray pa-1 span-tag grey-custom'> - </li>
                        <li class='gray pa-1 span-tag'> - </li>
                        <li class='gray pa-1 grey-custom span-tag'> - </li>
                        <li class='gray pa-1 span-tag'> - </li>
                        <li class='gray pa-1 span-tag grey-custom'> - </li>
                         <li class='gray  pa-1 span-tag'> - </li>
                        <li class='gray  pa-1 span-tag  grey-custom'> - </li>
                        <li class='gray  pa-1 span-tag'>Atendimento via telefone das 9h ás 18hrs</li>  
                    </ul>
                    <v-card-actions>
                        <v-btn class='my-2 center btn-custom white--text block' large>Comprar</v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>
        </v-row>
    </v-container>

    <div class='arrow-div d-mobile'>
        <ArrowScrolldownButtonRegister />
    </div>
</section>
</template>

<script>
import ArrowScrolldownButtonRegister from '@/components/Buttons/ArrowScrolldownButtonRegister'
export default {
    components: {
        ArrowScrolldownButtonRegister
    }
}
</script>

<style scoped>
.arrow-div {
    display: grid;
    justify-content: center;
    align-items: center;
    padding-top: 4.3em;
}

.py-custom {
    padding: 6.2em 0 4em 0;
}

.price-plan-title {
    padding: 1em 0;
    font-family: var(--primary-font);
    margin: 0 auto;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.3em;
}

.v-application ul,
.v-application ol {
    padding-left: 0 !important;
    padding-right: 0 !important;
}

.grey-custom {
    background: #f1f1f1e7;
}

.span-tag {
    font-size: 0.73rem !important;
    line-height: 2;
    font-family: var(--primary-font);
    white-space: nowrap;
}

.mobile-price {
    margin-left: auto !important;
    margin-right: auto !important;
}

@media only screen and (max-width: 1380px) {
    .plans-container {
        max-width: 1000px !important;
    }
}
</style>
