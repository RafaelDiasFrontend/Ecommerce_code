import Vue from 'vue'
import { mapGetters } from 'vuex'

    const User = {
        install(Vue, options) {
            Vue.mixin({
                computed: {
                    ...mapGetters({
                        
                        categories: 'categories',
                        user: 'auth/user',
                        authenticated: 'auth/authenticated',  
                        logincount: 'auth/logincount', 
                        ability: 'auth/ability',           
                        cartCount: 'cart/count',        
                        birthday:'auth/birthday',                                      
                        email: 'auth/email',                      
                        crea: 'auth/crea',
                        cpf: 'auth/cpf',
                        zipcode: 'auth/zip_code',
                        address: 'auth/address',
                        addressNumber: 'auth/addressNumber',
                        addressComp: 'auth/addressComp',
                        country: 'auth/country',
                        state: 'auth/state',
                        city: 'auth/city',
                        cellPhone: 'auth/cellPhone',
                        Facebook: 'auth/Facebook',
                        LinkedIn: 'auth/LinkedIn',
                        personalSite: 'auth/personalSite',
                        personalExperience: 'auth/personalExperience',
                        courseName: 'auth/courseName',
                        courseType: 'auth/courseType',
                        courseInstitution: 'auth/courseInstitution',
                        courseSituation: 'auth/courseSituation',
                        courseConclusion: 'auth/courseConclusion',
                        courseName2: 'auth/courseName2',
                        courseType2: 'auth/courseType2',
                        courseInstitution2: 'auth/courseInstitution2',
                        courseSituation2: 'auth/courseSituation2',
                        courseConclusion2: 'auth/courseConclusion2',
                                             
                    })
                }
            })
        }
    };

    Vue.use(User);   
   