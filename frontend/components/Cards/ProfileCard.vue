<template>
    <v-card class="my-2 card-margin" hover >
        <v-container>
            <v-img
            class="white--text d-flex align-center center"
            width="150px"

            src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
            >     
            </v-img>       
        <v-card-subtitle class="pb-0 text-center gray font-weight-regular">{{ profissional.pin }}</v-card-subtitle>
            <div class="text--primary">
                <h3 class='gray body-1 pt-1 text-center font-weight-medium'>Nome do Profissional</h3>
                <h4 class='body-2 text-center primary-color font-weight-regular'>Especialidade do profissional</h4>
            </div>         
        <v-btn
        color="white"
        text
        class='center btn primary'
        >
        Ver Perfil
        </v-btn>   
        </v-container>    
    </v-card>
</template>


<script>
export default {    

}
</script>