<template>
<section class="carousel-wrapper">   
    <client-only>
        <slick :options="slickOptions">
            <div v-for="item in companies" :key="item.id" class="img-wrapper mt-slick">    
               <v-card hover class="ma-3 professional-box b-radio-2">
        <article class="card--2">
  <div class="card__info-hover">
    <svg class="card__like"  viewBox="0 0 24 24">
    <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
</svg>
      <div class="card__clock-info">
        <svg class="card__clock"  viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
        </svg><span class="card__time">{{ item.created_at}}</span>
      </div>
    
  </div>
  <div class="card__img"></div>
  <a href="#" class="card_link">
     <div class="card__img--hover"></div>
   </a>
  <div class="card__info">
    <span class="card__category">{{ item.ability }}</span>
    <h3 class="card__title">Nome Fantasia</h3>
    <span class="card__by"><a href="#" class="card__author" title="author">Ramo da Empresa</a></span>
  </div>
</article>
                    
                </v-card>           

            
  
                <!-- <v-card class="ma-2 professional-box">
                    <v-container class='testimonials-card-grid'>
                        <div class='testimonials-card-header primary-color title font-weight-bold font-weight-regular'>                           
                                {{ item.nomefantasia }}                                               
                        </div>
                        <div class='testimonials-card-body d-flex'>
                            <p class='quote-title regular-1 grey--text p-small pl-1'>{{ item.state }}</p>
                            <p class='quote-title regular-1 grey--text p-small pl-1'>{{ item.city }}</p>
                        </div>
                        <div class='testimonials-card-footer d-flex justify-space-between align-center mb-1'>
                            <span class='h4 gray font-weight-bold'>{{ item.email }}</span>
                            <v-avatar>
                                  <v-icon size="45" color="grey lighten-1">mdi-account-circle</v-icon>
                            </v-avatar> 
                        </div>
                    </v-container>
                </v-card> -->
            </div>
        </slick>
    </client-only>
</section>
</template>

<script>
export default {   
        props: {
        companies: { 
            required: true,
            type: Array
        }
},    
    
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
    box-shadow: 0 0 40px 0 rgba(94,92,154,.06);
     box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
    

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

.cards {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    max-width: 820px;
}

.card--1 .card__img, .card--1 .card__img--hover {
    background-image: url('https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
}

.card--2 .card__img, .card--2 .card__img--hover {
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
    height: 235px;
  border-top-left-radius: 2px;
border-top-right-radius: 2px;
  
}

.card__info-hover {
    position: absolute;
    padding: 16px;
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
    height: 235px;
  border-top-left-radius: 2px;
border-top-right-radius: 2px;
top: 0;
  
}
.card {
  margin-right: 25px;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;  
  position: relative;
 
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
}
.card:hover {
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
    transform: scale(1.10, 1.10);
}

.card__info {
z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
   padding: 16px 24px 24px 24px;
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
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: 'Roboto Slab', serif;
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
