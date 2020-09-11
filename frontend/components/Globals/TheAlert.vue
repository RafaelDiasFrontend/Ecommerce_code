<template>
  <div v-if="alert">    
    <v-alert     
      dismissible
      close-icon="mdi-delete"
      color="primary"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-alert"
    >
     <strong>  {{ alert }} !</strong>.
    </v-alert>   
    </div> 
</template>
<script>
import { mapGetters } from 'vuex'
  export default {   
    computed: {
        ...mapGetters({
            alert: 'alert/message'
        })
    }
  }
</script>