<template>
<section id='FAQ'>
    <div class='is-simple-grid'>
        <div class='text-center about-title pb-2'>Dúvidas Frequentes</div>
        <div class='text-center h4 gray mb-custom pb-5'>Aqui você encontra as dúvidas mais frequentes respondidas</div>
        <v-container class='default-width'>
            <v-row class='d-flex align-center df-width py-5 mt-6'>
                <v-col cols='12' md='12' lg='12'>
                    <v-expansion-panels>
                        <v-expansion-panel v-for="(item,i) in items" :key="i">
                            <v-expansion-panel-header>
                                <h4 class='gray h3'>{{ item.title }}</h4></v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p class='gray p'>{{ item.text}}</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
        </v-container>
    </div>

</section>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            items: [{
                    title: 'Orçamentos são grátis?',
                    text: 'R: Sim.',
                },
                {

                    title: 'Técnico cadastrado no CFT ( Conselho Federal dos Técnicos Industriais ) podem se inscrever?',
                    text: 'R: Não, A princípio estamos trabalhando com Engenheiros pois as ART, os Laudos e pericias são emitida por engenheiro.Estamos analisando colocar os técnicos do CFT.',
                },
                {

                    title: 'Arquitetos podem fazer partes do grupo de profissionais?',
                    text: 'R: Sim, pode.',
                },
                {

                    title: ' Quantos dias para responder o orçamento?',
                    text: 'R: Trabalhamos com um prazo de no máximo 5 dias.',
                },
                {

                    title: 'Posso selecionar mais de um orçamento?',
                    text: 'R: Sim, o sistema aceita que o profissional execute múltiplos orçamentos e projetos.',
                },
                {

                    title: 'Tenho vários clientes espalhados pelo Brasil, porém não consigo profissionais para executarem a obra em outros estados , vocês indicam?',
                    text: 'R: Não , caso não haja profissionais na região, para executarem o orçamento, a Integra então buscará empresas na região, para executarem o serviço.',
                },
                {

                    title: 'Caso o profissional não execute corretamente a Obra, de quem será a responsabilidade?',
                    text: 'R: Trabalhamos para que isso não aconteça, imprevistos podem acontecer, assim um novo profissional ou empresa será alocado para executar o serviço',
                },
                {

                    title: 'Vocês atuam no sistema de Agronomia?',
                    text: 'R: Sim, dependendo da solução procuramos profissionais e empresas parceiras do ramos.',
                },
                {

                    title: 'Como a empresa parceira será selecionada?',
                    text: 'R: Caso o profissional não execute a obra, será designada uma empresa parceira para execução da obra, mais próxima do cliente. ',
                },
                {

                    title: 'Como o profissional será selecionado?',
                    text: 'R: O profissional que fornecer o menor Orçamento será o executante da obra.',
                },
            ],
        }
    }
}
</script>

<style scoped>
#FAQ {
    padding: 6.3em  0;
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

@media only screen and (max-width: 1380px) {
    #is-simple-to-begin {
        padding: 2.3em 0 0 0;
        display: grid;
    }
}
</style>
