<template>
<div class="dashboard"> 
  <v-container fluid class="w-85 mt-3">      
       <v-form 
           ref="form"
           v-model="valid"
           lazy-validationaction
           class='mt-2'
           @submit.prevent="update">         
      <v-row>       
        <v-col cols='12' >     
          <div class='text-left primary-color title font-weight-bold mb-2'>
          Dados Cadastrais
          </div>         
        </v-col>   
         <v-col cols='12' >     
          <div class='text-left primary-color title font-weight-bold mb-2'>       
          </div>  
        </v-col>    
         <!-- Nome Completo -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">          
          <v-text-field                       
          v-model="form.name"  
          label="Nome completo"  
          placeholder="Nome completo"                  
          outlined          
          required      
          ></v-text-field> 
       </v-col>         
         <!-- Data de nascimento -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">     
          <v-text-field                   
          v-model="form.birthday"   
          label="Data de Nascimento"                    
          outlined  
          v-mask="birthdayMask"        
          placeholder="dd/mm/aaaa"                  
          ></v-text-field> 
        </v-col>  
        <!-- Email -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">        
          <v-text-field            
            label="Email"     
            placeholder="Email"                       
            outlined 
            v-model="form.email"                
            :rules="emailRules"
            required                     
            ></v-text-field>    
        </v-col> 
           <!-- Pais -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">
          <v-select                       
          v-model="form.country" 
          :items="countryList"
             
          placeholder="País"
          label="País"                    
          outlined      
          ></v-select> 
       </v-col>     
        <!-- Estado -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">     
          <v-text-field                   
          v-model="form.state"   
          label="Estado"   
          placeholder="Estado"                 
          outlined                    
          ></v-text-field> 
        </v-col> 
        <!-- Cidade -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">     
          <v-text-field                   
          v-model="form.city"   
          label="Cidade"     
          placeholder="Cidade"                  
          outlined                      
          ></v-text-field> 
        </v-col>     
         <!-- CREA -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3" class='py-form'>
            <v-text-field 
            v-model="form.crea"
            label="CREA/CAU" 
            outlined 
            required>
            </v-text-field>
        </v-col>    
           <!-- CPF -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">       
          <v-text-field                   
            v-model="form.cpf"   
            label="CPF"                    
            outlined   
            v-mask="cpfMask"
            placeholder="XXX.XXX.XX-XX"           
            ></v-text-field> 
        </v-col> 
       <!-- CEP -->
        <v-col cols='12' lg='3' xs='12'>
          <v-text-field
          class='pa-0 py-0'
          ref="zip_code"
          v-mask="['#####-###']"
          v-model="form.zip_code"
          :rules="[() => !!form.zip_code || 'Campo obrigatório']"
          label="CEP"                                            
          required
          outlined
          placeholder="XXXXX-XXX"                                           
          ></v-text-field>
       </v-col>    
        <!-- Endereço -->
          <v-col cols='12' lg='3' xs='12'>
            <v-text-field 
            class='pa-0 py-0' 
            :rules="mandatory" 
            label="Endereço" 
            v-model="form.address"
            placeholder="Endereço"
            outlined>
            </v-text-field>
          </v-col>
          <!-- Numero do endereço -->
            <v-col cols='12' lg='1' xs='12'>
            <v-text-field 
            class='pa-0 py-0'                                           
            label="Número" 
            v-model="form.addressNumber"
              placeholder="Nº" 
              outlined></v-text-field>
        </v-col>
        <!-- Complemento -->
          <v-col cols='12' lg='2' xs='12'>
            <v-text-field 
            class='pa-0 py-0'                                            
            label="Complemento" 
            v-model="form.addressComp" 
            placeholder="Complemento"
            outlined>
            </v-text-field>
        </v-col>   
         <!-- Celular -->
      <v-col cols='12' lg='3' xs='12'>
          <v-text-field 
          class='pa-0 py-0'
          label="Tel Celular"        
          v-model="form.cellPhone"
          placeholder="(XX) XXXXX-XXXX"
          v-mask='phoneMask'
          outlined>
          </v-text-field>
      </v-col>        
        
        <v-col cols="12" xs="12" md="12">
           <div class='grey--text text--darken-1'>Redes Sociais</div>
        </v-col>      

      <!-- Facebook -->
      <v-col cols="12" xs="12" md="4">
        <v-text-field        
          v-model="form.Facebook"
          label="Facebook"
          placeholder="facebook"
           outlined
           prepend-inner-icon="thumb_up_alt"
           prefix="https://www.facebook.com/"           
        ></v-text-field>
      </v-col>

       <!-- LinkedIn -->
      <v-col cols="12" xs="12" md="4">
        <v-text-field        
          placeholder="LinkedIn"
          v-model="form.LinkedIn"
          label="LinkedIn"
          prefix="https://www.linkedin.com/in/"
          prepend-inner-icon="share"
          outlined        
        ></v-text-field>
      </v-col>

            <!-- LinkedIn -->
     <v-col cols="12" xs="12" md="4">
        <v-text-field                
          v-model="form.personalSite"
          label="Site pessoal"
          outlined
          placeholder="Site pessoal"
          prepend-inner-icon="public"
          prefix="http://www."         
        ></v-text-field>
      </v-col>   
       <v-col cols="12" xs="12" md="12">
           <div class='grey--text text--darken-1'>Resumo Profissional</div>
        </v-col> 
          <v-col cols="12" xs="12" md="12">          
               <v-textarea
                outlined
                :rules="experienceRules"
                :counter="2000"                           
                class='pa-0'                
                label="Descreva um pouco da sua experiência profissional"
                v-model="form.personalExperience"                             
                rows="12"
                row-height="30"                    
                
                ></v-textarea>
        </v-col>    
        <v-col cols="12" xs="12" md="12">
           <div class='grey--text text--darken-1'>Histórico Profissional</div>
        </v-col> 

       <!-- Nome do Curso -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">    
          <v-text-field           
            label="Nome do Curso"                   
            v-model="form.courseName"
            required              
            outlined
            placeholder="Engenharia Cívil"                 
          ></v-text-field>   
        </v-col>     
        
           <!-- Nível de Escolaridade -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">          
          <v-select 
            label="Tipo do Curso" 
            :items="courseTypeList" 
            v-model="form.courseType"          
            outlined 
            class='pa-0 py-0'                                            
            required
          >
          </v-select>
       </v-col>    
     
      <!-- Institution  -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="2">    
          <v-text-field           
            label="Nome da Instituição"                   
            v-model="form.courseInstitution"
            required              
            outlined
            placeholder="Nome da Instituição"                 
          ></v-text-field>   
        </v-col>            
       
          <!-- Situação Atual  -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="2">          
          <v-select 
            label="Situação Atual " 
            :items="courseSituationItems" 
            v-model="form.courseSituation" 
            max-height="auto" 
            autocomplete
            outlined 
            class='pa-0 py-0'                                            
            required>
          </v-select>
       </v-col>       
       <!-- Mês/Ano de Conclusão  -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="2">    
          <v-text-field           
            label=" Mês/Ano de Conclusão"                   
            v-model="form.courseConclusion"           
            required              
            outlined
            v-mask='courseConclusionMask'           
            placeholder="mm/aaaa"
            >
          </v-text-field>   
        </v-col>  
         <v-col cols="12" xs="12" md='6' lg="4"> 
            <!-- Add -->
            <v-btn               
              class="primary regular-1 btn py-2 mt-1"                                            
              @click="courseEnabled1 = !courseEnabled1"    
              :disable="!courseEnabled1"
              :class="{displayNone: courseEnabled1}"                                      
            >
            <v-icon dark class='pr-1'>mdi-plus</v-icon>
             Adcionar Novo Curso
            </v-btn>              
            <!-- Cancel-->
              <v-btn                 
                class="secondary btn py-2 mt-1"                                            
                @click="courseEnabled1 = !courseEnabled1"                 
                :class="{displayNone: !courseEnabled1}"                                      
              >
              <v-icon dark class='pr-1'>mdi-close</v-icon>
              Cancelar Curso
              </v-btn>                 
        </v-col>        
          <v-col cols="12" xs="12" sm='6' md='6' lg="4">    
            <v-btn
              type="submit" 
              class="primary regular-1 btn py-2 mt-1"            
              :disabled="!valid"                       
              @click="validate"            
            >Atualizar
            </v-btn>     
        </v-col>  

        <v-container 
        :disabled="!courseEnabled1" :class="{ displayNone: !courseEnabled1}">
         <v-row>
      
       <!-- Nome do Curso -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">    
          <v-text-field           
            label="Nome do Curso"                   
            v-model="form.courseName2"
            required              
            outlined
            placeholder="Engenharia Cívil"                 
          ></v-text-field>   
        </v-col>     
        
           <!-- Nível de Escolaridade -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="3">          
          <v-select 
            label="Tipo do Curso" 
            :items="courseTypeList" 
            v-model="form.courseType2"          
            outlined 
            class='pa-0 py-0'                                            
            required
          >
          </v-select>
       </v-col>    
     
      <!-- Institution  -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="2">    
          <v-text-field           
            label="Nome da Instituição"                   
            v-model="form.courseInstitution2"
            required              
            outlined
            placeholder="Nome da Instituição"                 
          ></v-text-field>   
        </v-col>            
       
          <!-- Situação Atual  -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="2">          
          <v-select 
            label="Situação Atual " 
            :items="courseSituationItems" 
            v-model="form.courseSituation2" 
            max-height="auto" 
            autocomplete
            outlined 
            class='pa-0 py-0'                                            
            required>
          </v-select>
       </v-col>       
       <!-- Mês/Ano de Conclusão  -->
        <v-col cols="12" xs="12" sm='6' md='6' lg="2">    
          <v-text-field           
            label=" Mês/Ano de Conclusão"                   
            v-model="form.courseConclusion2"           
            required              
            outlined
            v-mask="courseConclusionMask"
            placeholder="mm/aaaaa">
          </v-text-field>   
        </v-col>           
         </v-row>
         </v-container>            
   </v-row>            
</v-form>
</v-container>  
    
</div>
</template>

<script>
import {
    mask
} from 'vue-the-mask'
export default {
   directives: {mask}, 
  layout: 'proDash',
   created () {
          [
         
            this.form.id = this.user.id,
            this.form.name = this.user.name,
            this.form.birthday = this.user.birthday,          
            this.form.slug = this.user.slug,
            this.form.email = this.user.email,   
            this.form.country = this.user.country,
            this.form.state = this.user.state,
            this.form.city = this.user.city,
            this.form.crea = this.user.crea,
            this.form.cpf = this.user.cpf,     
            this.form.zip_code = this.user.zip_code,         
            this.form.address = this.user.address,     
            this.form.addressNumber = this.user.addressNumber,
            this.form.addressComp = this.user.addressComp,
            this.form.cellPhone = this.user.cellPhone,
            this.form.Facebook = this.user.Facebook,
            this.form.LinkedIn = this.user.LinkedIn,
            this.form.personalSite = this.user.personalSite, 
            this.form.courseName = this.user.courseName,   
            this.form.courseType = this.user.courseType,   
            this.form.courseInstitution = this.user.courseInstitution,
            this.form.courseSituation = this.user.courseSituation,
            this.form.courseConclusion = this.user.courseConclusion,
            this.form.courseName2 = this.user.courseName2,   
            this.form.courseType2 = this.user.courseType2,   
            this.form.courseInstitution2 = this.user.courseInstitution2,
            this.form.courseSituation2 = this.user.courseSituation2,
            this.form.courseConclusion2 = this.user.courseConclusion2,   
             this.form.personalExperience = this.user.personalExperience             
          
              
          ]
        },
 data(){
      return {      
       
        valid: true,
        enabledEndCourse: false,
        enabledEndCourse2: false,        
        courseEnabled1: false,      
        show1: false,
        show2: false,
         form: {
          id: '',
          name: '',
          birthday: '',  
          slug: '',   
          email: '',
          crea: '',
          cpf:'', 
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
          personalExperience: ''             
       },      
        
          courseTypeList: ['01 - Ensino Tecnico', '02 - Superior', '03 - Pós-graduação', '04 - Doutorado', '05 - Mestrado',],
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
        "Brasil",
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
         v =>  (this.form.password === this.form.rePassword) || 'A senha inserida deve ser igual'
      ]      
    }
    },    
    //  async asyncData({
    //     app,
    //     params
    // }) {
    //     let response = await app.$axios.$get(`profissionalRegister/${params.slug}`)

    //     return {
    //         //profissionais: response.data
    //     }
    // },
     methods: {   
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true    
          this.alert = true     
        }
      },   
      
        async update () {
               this.$swal(
              'Parabens!',
              'Seu cadastro foi atualizado com sucesso!',
              'success'
              ); 
          await this.$axios.patch('professionalProfileUpdate', this.form)
          
          .then(response => {
                console.log(response);                 
                 }).catch(function(error){
                console.log(error) 
                     
                
            })        
        }
      }
    }  
</script>


<style>
.dashboard {
 padding: 0.4em 0 2em 0; 
}
  .btn {    
    padding: 0.8em 1.9em;    
    color: #fff;
  }
 
  .displayNone{
    display: none;
  }

.custom-enter, .custom-leave-to{
  opacity: 0;
}

.custom-enter-active, .custom-leave-active  {
  transition: opacity 2s;
}

</style>