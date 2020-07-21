<template>
<section id='Occupation-area'>
    <div class='is-simple-grid'>
        <div class='text-center about-title pb-2'>Principais áreas de atuação</div>
        <v-container class='default-width'>
            <v-row class='d-flex df-width py-5 mt-6'>
                <v-col cols='12' md='12' lg='3' v-for='(item, i) in occupations' :key='i'>
                    <v-container>
                        <img src="#" alt="">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <div class="text-center grey lighten-5 d-flex flex-column justify-space-between align-center" flat @click="dialog = !dialog" width="300px" v-on="on">                                   
                                        <h3 class='h3-custom text-center mb-3'>{{ item.title }}</h3>                                   
                                </div>
                            </template>
                            <p class='width-custom'>{{ item.text }}</p>
                        </v-tooltip>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div class='arrow-div'>
        <ArrowScrolldownButtonOccupation />
    </div>
</section>
</template>

<script>
import ArrowScrolldownButtonOccupation from '@/components/buttons/ArrowScrolldownButtonOccupation'
export default {   
    components: {
        ArrowScrolldownButtonOccupation
    },
    data() {
        return {
            occupations: [{
                    title: 'Acústico.',
                    text: 'É o conjunto de conhecimentos usados para desenvolver novos sistemas eletroacústicos e para determinar a intensidade de ruídos e vibrações. O engenheiro acústico desenvolve técnicas e equipamentos para controlar o ruído ambiental visando ao bem-estardas pessoas e, em alguns casos, até mesmo de animais.',
                },
                {

                    title: 'Aeroespacial',
                    text: 'Engenharia aeroespacial é o ramo da engenharia que, com base em diversas áreas da física, como a termodinâmica, a mecânica dos fluidos, a mecânica clássica e outras, lida com o projeto, construção e aplicação de aeronaves, espaçonaves e satélites. ',
                },

                {
                    title: 'Aeronáutico',
                    text: 'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu.',

                },
                {

                    title: 'Agrícula.',
                    text: 'O Engenheiro Agrícola atua na área de interface entre a agricultura e a engenharia. As áreas de atuação deste profissional são mecânica agrícola, energização rural, processamento de produtos agropecuários, engenharia de água e solos e construções rurais.',
                },
                {

                    title: 'Agrônomo',
                    text: 'Engenheiro agrônomo é um profissional com formação de ensino superior, cujo campo de atuação abrange diversas áreas, tais como fitotecnia, fitossanidade, zootecnia, solos, engenharia rural, meio ambiente, mecanização, economia, agroindústria, entre outras. ',
                },
                {
                    title: 'Ambiental',
                    text: 'A engenharia do ambiente estuda os problemas ambientais de forma integrada nas suas dimensões ecológica, social, econômica e tecnológica, com vista a promover o desenvolvimento sustentável.',
                },
                {
                    title: 'Automotivo ',
                    text: 'A engenharia automóvel, engenharia automotiva ou engenharia automobilística é um ramo da engenharia mecânica especializado nos vários tipos de veículos automóveis ',
                },
                {
                    title: 'Cívil ',
                    text: 'Engenharia de Controle e Automação é a área dentro da engenharia voltada ao projeto de máquinas automáticas e controle de processos industriais. Para isso são utilizados elementos sensores, elementos atuadores, sistemas de controle, sistemas de supervisão e aquisição de dados e outros métodos que utilizem os recursos da elétrica, mecânica e computação. ',
                },
                {
                    title: 'Computação ',
                    text: 'Os engenheiros de computação podem atuar no design de softwares ou integração de hardware e software, podendo desenvolver projetos de microcontroladores individuais, microprocessadores, computadores pessoais e supercomputadores até o projeto de circuitos. Este campo de engenharia não se concentra apenas em como os próprios sistemas de computadores funcionam, mas também em como eles se integram no quadro gera',
                },
                {
                    title: 'Controle e Automação ',
                    text: 'Engenharia de Controle e Automação é a área dentro da engenharia voltada ao projeto de máquinas automáticas e controle de processos industriais. Para isso são utilizados elementos sensores, elementos atuadores, sistemas de controle, sistemas de supervisão e aquisição de dados e outros métodos que utilizem os recursos da elétrica, mecânica e computação.',
                },
                {
                    title: 'Produção ',
                    text: 'A engenharia de segurança estuda as causas e a prevenção de mortes acidentais ou lesões. Historicamente, a engenharia de segurança não foi uma disciplina específica e unificada. Profissionais com variados títulos, descrições de trabalho, responsabilidades e níveis hierárquicos têm atuado no campo de engenharia de segurança, tanto na indústria como nas companhias de seguro ',
                },
                {
                    title: 'Saúde e Segurança ',
                    text: 'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu.',
                },
                {
                    title: 'Eletricista ',
                    text: 'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu.',
                },
                {
                    title: 'Eletronico ',
                    text: 'A engenharia eletrônica cuida da energia elétrica sob os microaspectos de controle, automação e telecomunicação. O estudo da engenharia eletrônica fornece meios para o desenvolvimento de componentes, dispositivos, sistemas e equipamentos como: transistores, circuitos integrados e placas de circuito impresso. Nos Estados Unidos, assim como no Brasil, os cursos de engenharia eletrônica são tradicionalmente dados como conteúdo da engenharia elétrica, tal como definido pelo MEC e CREA no Brasil.',
                },
                 {
                    title: 'Mecânico ',
                    text: 'A engenharia mecânica é o ramo da engenharia que aplica os princípios da engenharia, física e ciência dos materiais para a concepção, análise, fabricação e manutenção de sistemas mecânicos. É o ramo da engenharia que envolve a concepção, produção e operação de máquinas e ferramentas. É uma das mais antigas e amplas disciplinas de engenharia. Engenheiros mecânicos projetam e constroem motores, usinas de energia, entre outros.',
                },
                  {
                    title: 'Arquiteto',
                    text: 'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu.',
                },
            ],
        }
    }
}
</script>

<style scoped>
#Occupation-area {
    padding: 6.3em 0;
    display: grid;
}

.p {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
}

.p-custom {
    text-align-last: center;
    font-size: 0.98rem;
    line-height: 1.80em;
    font-weight: 400;
    letter-spacing: 0.001em;
}

.width-custom {
    max-width: 300px;
    margin-left: 0.5em;
    margin-right: 0.5em;
}

.pb-custom {
    padding-bottom: 2em;
}

.btn-width {
    width: 350px;
}

.h3-custom {
    font-family: var(--primary-font);
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 2px;
    
}

.register-free {
    padding: 8.4em 0;
}

.arrow-div {
    display: grid;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 1380px) {
    #is-simple-to-begin {
        padding: 2.3em 0 0 0;
        display: grid;
    }
}
</style>
