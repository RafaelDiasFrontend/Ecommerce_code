<template>
<section id="plans" class='py-custom'>
    <div class='about-title text-center pb-2'>Confira os nossos planos</div>
    <div class='text-center h4 gray mb-custom pb-12'>Exclusivo para profissionais</div>

    <v-container class='mt-12 plans-container'>
        <v-row class='d-flex justify-content-between'>
            <!-- premium -->              
            <v-col md='3'>
              </v-col>
            <v-col cols='12' xs='12' md='3' lg='3' xl='3' sm='12'>
                <v-card width="100%" hover>
                    <div class='price-plan-title bg-secondary-color white--text text-center text-uppercase'>Premium</div>
                    <ul class='text-center'>
                        <li class='gray mt-2 span-tag'>Plano econômico ideal para quem esta iniciando</li>
                        <li class='gray mt-1 py-2 h2 secondary-color'>R$99,00</li>    
                          <li class='gray span-tag font-weight-bold'>INCLUSO NO PLANO</li>                   
                        <li class='gray  pa-1 span-tag grey-custom'>Até 5 orçamentos</li>  
                        <li class='gray  pa-1 span-tag '>Até 5 orçamentos</li>  
                        <li class='gray  pa-1 span-tag  grey-custom'>Painel de Controle</li>  
                        <li class='gray  pa-1 span-tag'>Atendimento via telefone das 9h ás 18hrs</li>  
                      
                    </ul>
                    <v-card-actions>
                        <v-btn class='my-2 center btn-custom-2 bg-secondary-color white--text block' large>Comprar</v-btn>
                    </v-card-actions>
                </v-card>
                <!-- FREE -->
            </v-col>
              <v-col cols='12' xs='12' md='3' lg='3' xl='3' sm='12'>
                <v-card width="100%" hover>
                    <div class='price-plan-title bg-primary-color white--text text-center text-uppercase'>FREE</div>
                    <ul class='text-center'>
                        <li class='gray mt-2 span-tag'>acesso grátis a ferramenta de demonstração</li>
                        <li class='gray mt-1 py-2 h2'>R$0,00</li>
                        <li class='gray span-tag font-weight-bold'>INCLUSO NO PLANO</li>
                        <li class='gray pa-1 span-tag grey-custom'>Número de orçamentos limitado a 1</li>  
                         <li class='gray  pa-1 span-tag '> - </li>         
                        <li class='gray  pa-1 span-tag  grey-custom'>Painel de Controle</li>               
                        <li class='gray  pa-1 span-tag'>Atendimento via telefone das 9h ás 18hrs</li>  
                    </ul>
                    <v-card-actions>
                        <v-btn class='my-2 center btn-custom white--text block' large>Comprar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
              <v-col md='3'>
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
    align-items: flex-end;
    padding-top: 10em;
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
