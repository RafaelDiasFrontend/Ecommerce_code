<template>
<div class="dashboard">    
    <v-container fluid class="w-85 mt-3 center">       
         <v-row>
        <!-- Companies -->
        <v-col cols='12' sm='12'>               
            <BusinessCard :companies="companies"/>
        </v-col>
        <!-- Companies 2 -->
        <v-col cols='12' sm='12'>               
            <BusinessCard2 :companies="companies"/>
        </v-col>
      
              <!-- Orcamentos -->
        <v-col cols='12' sm='12'>               
            <section class="carousel-wrapper">   
                <client-only>
                    <slick :options="slickOptions">
                        <div v-for="item in companies" :key="item.id" class="img-wrapper mt-slick">
                            <v-card class="ma-2 professional-box">
                                <v-container class='testimonials-card-grid'>
                                    <div class='testimonials-card-header'>
                                        <v-icon size="32" class='quotation-marks'>format_quote</v-icon>
                                    </div>
                                    <div class='testimonials-card-body'>
                                        <p class='quote-title regular-1 grey--text p-small pl-1'>{{  item.name }}</p>
                                    </div>
                                    <div class='testimonials-card-footer d-flex justify-space-between align-center mb-1'>
                                        <span class='h4 gray font-weight-bold'>{{ item.email }}</span>
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
        </v-col>
       
        </v-row>
    </v-container>

</div>
</template>

<script>
import BusinessCard from '@/components/Cards/BusinessCard'
import BusinessCard2 from '@/components/Cards/BusinessCard2'

export default {
    components: {
        BusinessCard,
        BusinessCard2
      
    },
    layout: 'proDash',
    data() {
        return {
            companies: [],          
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
        }
    },
    methods: {
        async Orcamento () {
            this.$router.push({
                name:'empresas',
                name:'profissional-adm-empresas-slug',
                path:'profissional-adm-empresas-slug',             
                    params: {
                        slug: item.slug
                    }
            })
        }
    },


    async asyncData({
        app,       
    }) {
        let response = await app.$axios.$get('companies')
        return {
            companies: response.data
        }
    },
    
  
}
</script>

<style scoped>
.card-title {
    font-family: var(--primary-font);
    font-size: 1rem!important;
    font-weight: 700;
    letter-spacing: 0.30px;
    
}
.card-subtitle {
    font-family: var(--primary-font);
    font-size: 0.88rem!important;
    font-weight: 700;
    letter-spacing: 0.30px;
   color: rgba(129, 129, 129, 0.795);
}
.card-subtitle-2 {
    font-family: var(--primary-font);
    font-size: 0.78rem!important;
    font-weight: 500;
    letter-spacing: 0.30px;
   color: rgba(167, 165, 165, 0.795);
}
.card-created-at {
    font-family: var(--primary-font);
    font-size: 0.80rem!important;
    font-weight: 500;
    letter-spacing: 0.30px;
    color: rgba(167, 165, 165, 0.795);
}
.card-link {
    font-family: var(--primary-font);
    font-size: 0.78rem!important;
    font-weight: 700;   
    color: rgba(49, 49, 49, 0.795);
}
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
