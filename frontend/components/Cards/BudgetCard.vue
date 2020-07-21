<template>
<v-row>
    <v-col v-for="item in budgets" :key="item.id" cols='12' lg='3' md='4' sm='12' class='carousel-wrapper'>
        <v-card hover class="ma-3 professional-box b-radio-2">
            <article class="card--2">
                <div class="card__img"></div>
                <a href="#" class="card_link">
                    <div class="card__img--hover"></div>
                </a>
                <div class="card__info">
                    <span class="card__category">{{ item.ability }}</span>
                    <h3 class="card__title">{{ item.name }}</h3>
                    <div class="d-flex align-center my-1">
                        <v-icon size="20px" color='grey' class='mx-1'>engineering</v-icon>
                        <div class="card__subtitle">
                            {{ item.type }}
                        </div>
                    </div>

                    <div class="d-flex">
                        <v-chip color='grey-lighten-1' style="border-radius: 2px;" small class="card__text-chip pl-5 pr-5 my-2 mr-1">
                            {{ item.specialtyArea1 }}
                        </v-chip>                        
                    </div>
                    <nuxt-link class='card-link text-center' :to="{                               
                                name: 'profissional-adm-orcamentos-id',
                                params: {
                                     id: item.Id
                                }
                            }">
                        <div class="text-left py-1">
                            <!-- Visualize -->
                            <v-btn class="mx-1" fab size="15" color='primary' x-small>
                                <v-icon dark>visibility</v-icon>
                            </v-btn>
                              <!-- Visualize -->
                            <v-btn class="mx-1" fab size="15" color='secondary' x-small>
                                <v-icon dark>edit</v-icon>
                            </v-btn>
                        </div>

                    </nuxt-link>
                </div>
            </article>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
    props: {
        budgets: {
            required: true,
            type: Array
        }
    },
    data() {
        return {
            budgets: []
        }
    },

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
    background-color: #fff;
    box-shadow: 0 0 40px 0 rgba(94, 92, 154, .06);
    box-shadow: 0px 13px 10px 26px rgba(0, 0, 0, 0.116);

}

.chips {
    font-size: 0.65rem !important;
}

@media only screen and (max-width: 1000px) {
    .chips {
        font-size: 0.51rem !important;
    }
}

@media only screen and (max-width: 500px) {
    .chips {
        font-size: 0.58rem !important;
    }
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

.professional .testimonials-card-header {
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

.cards {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    max-width: 820px;
}

.card--1 .card__img,
.card--1 .card__img--hover {
    background-image: url('https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
}

.card--2 .card__img,
.card--2 .card__img--hover {
    background-image: url('https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
}

.card__like {
    width: 18px;
    padding-top: 8px;
}

.card__clock {
    padding-top: 1px;
    width: 15px;
    vertical-align: middle;
    fill: var(--primary-color);
}

.card__time {
    padding-top: 5px;
    font-size: 12px;
    color: var(--primary-color);
    vertical-align: middle;
    margin-left: 5px;
}

.card__clock-info {
    float: right;
    padding-top: 5px;
}

.card__img {
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 180px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;

}

.card__info-hover {
    position: absolute;
    padding: 55px;
    width: 100%;
    opacity: 0;
    top: 0;
}

.card__img--hover {
    transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 185px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    top: 0;

}

.card {
    margin-right: 25px;
    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
    background-color: #fff;
    position: relative;
    border-radius: 4px !important;
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
}

.card:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.10, 1.10);
}

.card__info {
    z-index: 2;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 14px 24px 18px 24px;
}

.card__category {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #868686;
}

.card__title {
    font-size: 0.890rem;
    font-weight: 800 !important;
    letter-spacing: 0.1px;
    text-transform: uppercase;
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: left;
    color: rgb(17, 17, 17);
}

.card__subtitle {
    margin-left: 5px;
    font-size: 0.790rem;
    letter-spacing: 0.1px;
    font-weight: 500 !important;
    text-align: center;
}

.card__text-chip {
    font-size: 0.690rem;
    letter-spacing: 0.1px;
}

.card__by {
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
}

.card__author {
    font-weight: 600;
    text-decoration: none;
    color: #AD7D52;
}

.card:hover .card__img--hover {
    height: 100%;
    opacity: 0.3;
}

.card:hover .card__info {
    background-color: transparent;
    position: relative;
}

.card:hover .card__info-hover {
    opacity: 1;
}
</style>
