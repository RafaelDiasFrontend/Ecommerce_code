<template>
<div class="dashboard"> 
  <v-container fluid class="w-85 mt-3">      
    
  
    <SwitchColorsTemplate class='mt-4'/>
     <div class='grey--text display-1 letter-spacing-2 headline font-weight-regular'>Configurações</div>      

    <div class='mt-10 body-1 d-flex flex-column align-center grey--text'>
        <div class='pr-2'>Para desativar sua conta clique no botão desativar e confirme.</div>
        <v-btn  class='red lighten-1 white--text' @click="cancelAccount">
            Desativar
        </v-btn>       
    </div>


    
</v-container>      
</div>
</template>
<script>
import SwitchColorsTemplate from '@/components/Panel/Settings/SwitchColorsTemplate'

export default {
     layout: 'proDash',
     components: {
       SwitchColorsTemplate
     },
     methods: {
            async cancelAccount () {
            this.$swal({
          title: 'Gostaria de desativar sua conta?',
          text: 'Não poderá mais acessar sua conta',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sim',
          cancelButtonText: 'Não, Quero continuar!',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {
            this.$swal('Desativada', 'Sua Conta foi desativada com sucesso', 'success')
          } else {
            this.$swal('Ops', 'É um prazer ter você como nosso membro', 'info')
          }
        })
      }    
     },
 
      
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