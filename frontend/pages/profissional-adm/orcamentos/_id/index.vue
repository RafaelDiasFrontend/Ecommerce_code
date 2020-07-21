<template>
<div class="dashboard pt-12">
    <v-container fluid class="pa-5 content-grid" v-for='item in budgets' :key="item.id">
        <!-- Profile background -->
        <v-row class='content-grid box my-5'>
            <v-col cols='12' lg='12' class='mx-auto'>
                <v-container>
                    <v-row class='mx-auto d-flex align-center'>
                        <!-- Avatar -->
                        <v-col cols='12' sm='12' md='2' class='text-center'>                            
                            <v-avatar size="200" color='blue lighten-4 text-center'>
                                <img src="~/assets/imagens/Profile/dashpro/avatar.svg" alt="John">
                            </v-avatar>
                        </v-col>
                        <v-col cols='12' md='1'></v-col>
                        <!--Client Name -->
                        <v-col cols='12' sm='12' md='9' class='text-left'>
                            <h1 class="h2 text-uppercase"> {{ item.name }}</h1>
                            <div class="grey--text text-uppercase d-flex text-sm-center">
                                <div class="h3">{{ item.city}} -</div>
                                <div>{{ item.state }}</div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>

        <!-- Card body -->
        <v-row class='content-grid box'>
            <v-col cols='12' lg='12'>
                <v-container>
                    <v-row class='mx-auto d-flex align-center'>
                        <!-- Avatar -->
                        <v-col cols='12' sm='12' md='6'>
                            <ul class='text-uppercase h3 font-weight-bold'>
                                <li>Tipo de Orçamento</li>
                                <li class='font-weight-regular'> {{ item.specialtyArea1}}</li>
                                <v-spacer></v-spacer>
                                <li>Tipo de Serviço</li>
                                <li class='font-weight-regular'> {{ item.servicesType1 }}</li>
                            </ul>

                        </v-col>
                        <v-col cols='12' sm='12' md='6'>
                            <h3 class='h3'>Descrição do Orçamento:</h3>
                            <p>
                                {{ item.message }}
                            </p>
                        </v-col>

                        <!--Client Name -->
                        <v-col cols='12' sm='12' md='6'>

                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        <!--btn -->   
            
        <v-btn type='submit' color='blue lighten-1' class="white--text btn-register mt-5">habilitar Orçamento</v-btn>
          
       
    </v-container>

</div>
</template>

<script>
import TestimonialProfileProfessional from '@/components/MyComponents/TestimonialProfileProfessional'
import {
    mask
} from 'vue-the-mask'
export default {
    components: {
        TestimonialProfileProfessional
    },
    directives: {
        mask
    },
    layout: 'proDash',
    data() {
        return {
            budgets: null,
            budget: [],
            valid: true,
            enabledEndCourse: false,
            enabledEndCourse2: false,
            courseEnabled1: false,
            show1: false,
            show2: false,
            rating: 5,
            form: {
                name: '',
                birthday: '',
                email: '',
                crea: '',
                cpf: '',
                zip_code: '',
                address: '',
                addressNumber: '',
                addressComp: '',
                country: '',
                state: '',
                city: '',
                cellPhone: '',
                Facebook: '',
                LinkedIn: '',
                personalSite: '',
                personalExperience: '',
                courseName: '',
                courseType: '',
                courseInstitution: '',
                courseSituation: '',
                courseConclusion: '',
                courseName2: '',
                courseType2: '',
                courseInstitution2: '',
                courseSituation2: '',
                courseConclusion2: '',
            },

            courseTypeList: ['01 - Ensino Tecnico', '02 - Superior', '03 - Pós-graduação', '04 - Doutorado', '05 - Mestrado', ],
            courseSituationItems: ['01 - Interrompido', '02 - Cursando', '03 - Conclúido'],
            countryList: [
                "Afghanistan",
                "Åland Islands",
                "Albania",
                "Algeria",
                "American Samoa",
                "Andorra",
                "Angola",
                "Anguilla",
                "Antarctica",
                "Antigua and Barbuda",
                "Argentina",
                "Armenia",
                "Aruba",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas (the)",
                "Bahrain",
                "Bangladesh",
                "Barbados",
                "Belarus",
                "Belgium",
                "Belize",
                "Benin",
                "Bermuda",
                "Bhutan",
                "Bolivia (Plurinational State of)",
                "Bonaire, Sint Eustatius and Saba",
                "Bosnia and Herzegovina",
                "Botswana",
                "Bouvet Island",
                "Brazil",
                "British Indian Ocean Territory (the)",
                "Brunei Darussalam",
                "Bulgaria",
                "Burkina Faso",
                "Burundi",
                "Cabo Verde",
                "Cambodia",
                "Cameroon",
                "Canada",
                "Cayman Islands (the)",
                "Central African Republic (the)",
                "Chad",
                "Chile",
                "China",
                "Christmas Island",
                "Cocos (Keeling) Islands (the)",
                "Colombia",
                "Comoros (the)",
                "Congo (the Democratic Republic of the)",
                "Congo (the)",
                "Cook Islands (the)",
                "Costa Rica",
                "Croatia",
                "Cuba",
                "Curaçao",
                "Cyprus",
                "Czechia",
                "Côte d'Ivoire",
                "Denmark",
                "Djibouti",
                "Dominica",
                "Dominican Republic (the)",
                "Ecuador",
                "Egypt",
                "El Salvador",
                "Equatorial Guinea",
                "Eritrea",
                "Estonia",
                "Eswatini",
                "Ethiopia",
                "Falkland Islands (the) [Malvinas]",
                "Faroe Islands (the)",
                "Fiji",
                "Finland",
                "France",
                "French Guiana",
                "French Polynesia",
                "French Southern Territories (the)",
                "Gabon",
                "Gambia (the)",
                "Georgia",
                "Germany",
                "Ghana",
                "Gibraltar",
                "Greece",
                "Greenland",
                "Grenada",
                "Guadeloupe",
                "Guam",
                "Guatemala",
                "Guernsey",
                "Guinea",
                "Guinea-Bissau",
                "Guyana",
                "Haiti",
                "Heard Island and McDonald Islands",
                "Holy See (the)",
                "Honduras",
                "Hong Kong",
                "Hungary",
                "Iceland",
                "India",
                "Indonesia",
                "Iran (Islamic Republic of)",
                "Iraq",
                "Ireland",
                "Isle of Man",
                "Israel",
                "Italy",
                "Jamaica",
                "Japan",
                "Jersey",
                "Jordan",
                "Kazakhstan",
                "Kenya",
                "Kiribati",
                "Korea (the Democratic People's Republic of)",
                "Korea (the Republic of)",
                "Kuwait",
                "Kyrgyzstan",
                "Lao People's Democratic Republic (the)",
                "Latvia",
                "Lebanon",
                "Lesotho",
                "Liberia",
                "Libya",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Macao",
                "Madagascar",
                "Malawi",
                "Malaysia",
                "Maldives",
                "Mali",
                "Malta",
                "Marshall Islands (the)",
                "Martinique",
                "Mauritania",
                "Mauritius",
                "Mayotte",
                "Mexico",
                "Micronesia (Federated States of)",
                "Moldova (the Republic of)",
                "Monaco",
                "Mongolia",
                "Montenegro",
                "Montserrat",
                "Morocco",
                "Mozambique",
                "Myanmar",
                "Namibia",
                "Nauru",
                "Nepal",
                "Netherlands (the)",
                "New Caledonia",
                "New Zealand",
                "Nicaragua",
                "Niger (the)",
                "Nigeria",
                "Niue",
                "Norfolk Island",
                "Northern Mariana Islands (the)",
                "Norway",
                "Oman",
                "Pakistan",
                "Palau",
                "Palestine, State of",
                "Panama",
                "Papua New Guinea",
                "Paraguay",
                "Peru",
                "Philippines (the)",
                "Pitcairn",
                "Poland",
                "Portugal",
                "Puerto Rico",
                "Qatar",
                "Republic of North Macedonia",
                "Romania",
                "Russian Federation (the)",
                "Rwanda",
                "Réunion",
                "Saint Barthélemy",
                "Saint Helena, Ascension and Tristan da Cunha",
                "Saint Kitts and Nevis",
                "Saint Lucia",
                "Saint Martin (French part)",
                "Saint Pierre and Miquelon",
                "Saint Vincent and the Grenadines",
                "Samoa",
                "San Marino",
                "Sao Tome and Principe",
                "Saudi Arabia",
                "Senegal",
                "Serbia",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Sint Maarten (Dutch part)",
                "Slovakia",
                "Slovenia",
                "Solomon Islands",
                "Somalia",
                "South Africa",
                "South Georgia and the South Sandwich Islands",
                "South Sudan",
                "Spain",
                "Sri Lanka",
                "Sudan (the)",
                "Suriname",
                "Svalbard and Jan Mayen",
                "Sweden",
                "Switzerland",
                "Syrian Arab Republic",
                "Taiwan (Province of China)",
                "Tajikistan",
                "Tanzania, United Republic of",
                "Thailand",
                "Timor-Leste",
                "Togo",
                "Tokelau",
                "Tonga",
                "Trinidad and Tobago",
                "Tunisia",
                "Turkey",
                "Turkmenistan",
                "Turks and Caicos Islands (the)",
                "Tuvalu",
                "Uganda",
                "Ukraine",
                "United Arab Emirates (the)",
                "United Kingdom of Great Britain and Northern Ireland (the)",
                "United States Minor Outlying Islands (the)",
                "United States of America (the)",
                "Uruguay",
                "Uzbekistan",
                "Vanuatu",
                "Venezuela (Bolivarian Republic of)",
                "Viet Nam",
                "Virgin Islands (British)",
                "Virgin Islands (U.S.)",
                "Wallis and Futuna",
                "Western Sahara",
                "Yemen",
                "Zambia",
                "Zimbabwe"
            ],

            //  mascaras     

            cpfMask: '###.###.###-##',
            cnpjMask: '##.###.###/####-##',
            birthdayMask: '##/##/####',
            birthdayMask: '##/##/####',
            phoneMask: '(##) #####-####',
            courseConclusionMask: '##/####',
            mandatory: [
                v => !!v || 'Campo Obrigatório',
            ],
            emailRules: [
                v => !!v || 'O email é obrigatório',
                v => /.+@.+\..+/.test(v) || 'O email deve ser válido',
            ],
            experienceRules: [

                v => v.length <= 2000 || 'O campo Experiência Profissional não pode conter mais de 2000 caracteres',
            ],

            passwordConfirmationRule: [
                v => (this.form.password === this.form.rePassword) || 'A senha inserida deve ser igual'
            ]
        }
    },
    async asyncData({
        app,
        params
    }) {
        let response = await app.$axios.$get(`budget/${params.id}`)

        return {
            budgets: response
        }
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
        },
        async update() {
            await this.$axios.patch('professionalProfileUpdate', this.form)
                .then(response => {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error)
                })
        }
    }
}
</script>

<style>
.dashboard-profile {
   display: flex;
   align-items: center!important;
}

.content-grid {
    max-width: 1184px;
    padding: 0em;
    margin: 0 auto;
  
}

/* header */
.profile-header {
    border-radius: 0px 0 12px 12px;
    background: white;
    box-shadow: 0 0 40px 0 rgba(94, 92, 154, .06);

}

.box {
    padding: 32px 28px;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 0 40px 0 rgba(94, 92, 154, .06);
    position: relative;
}

.profile-header-info {
    height: 126px;
    position: relative;
}

.profile-personal-info {
    border-radius: 12px;
    background-color: #fff;

}

.profile-special {
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 40px 0 rgba(94, 92, 154, .06);
}

.avatar-container {
    width: 150px;
    height: 150px;
    border-radius: 100px !important;
    margin: 0 auto;
    margin-top: -95px;
}

.user-avatar-border {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

.profile-header-cover {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    width: 100%;
    height: 300px;
    background-image: url('~assets/imagens/Profile/profile_banner.jpg');
    background-size: cover;
    background-position: center;
    box-shadow: 0 0 40px 0 rgba(94, 92, 154, .06);
}

.profile-grid {
    background: #fff;
}

/* Body */
.profile-body {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1.3em;
}

.profile-body ul li b {
    margin-right: 1em;
}

.profile-personal-info {
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 0 40px 0 rgba(94, 92, 154, .06);
    min-height: 205px;
}

.profile-resume {
    height: 200px;
}

.btn {
    padding: 0.8em 1.9em;
    color: #fff;
}

.displayNone {
    display: none;
}

.custom-enter,
.custom-leave-to {
    opacity: 0;
}

.custom-enter-active,
.custom-leave-active {
    transition: opacity 2s;
}

.body-col-1 {
    border-right: 2px solid rgba(175, 175, 175, 0.699);
}

.line-1 {
    width: 70px;
    font-weight: 700;

}

.label {
    font-weight: 600;
    font-family: var(--primary-font);
    color: rgb(161, 161, 161);
    font-size: 0.95rem;
}

.profile-info-grid {

    display: grid;
    margin: 0 auto !important;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template:
        "status-info profile-social basics-info"
}

.basic-info {
    grid-area: basics-info;
}

.status-info {
    grid-area: status-info;
    display: grid;
    margin-top: -60px;
    margin-bottom: 39px;
    display: grid;
    grid-template-columns: 80px 80px 80px 80px;
    grid-column-gap: 20px;

}

.profile-info {
    margin: 0 auto !important;
    width: 300px;
    height: 45px;
    border-radius: 100px !important;
    margin: 0 auto;
    margin-top: -75px;
}

.profile-social {
    grid-area: profile-social;
    display: grid;

}

@media only screen and (max-width: 980px) {
    .status-info {
        grid-area: status-info;
        display: grid;
        grid-template-columns: 100px 100px 100px 100px;
        margin-top: 25px;
        margin-right: 50px;
        margin-bottom: 39px;
    }

    .profile-header-cover {
        min-height: 240px;
    }
}
</style>
