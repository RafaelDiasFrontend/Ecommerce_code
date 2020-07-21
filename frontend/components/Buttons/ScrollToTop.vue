<template>
<v-card id="create">
    <v-speed-dial v-model="fab" :top="top" :bottom="bottom" :right="right" :left="left" :direction="direction" :open-on-hover="hover" :transition="transition" class='mr-4 mb-6'>
        <template v-slot:activator>
            <v-btn v-model="fab" color="primary" dark fab>
                <v-icon v-if="fab">mdi-close</v-icon>
                <v-icon v-else>drafts</v-icon>              
            </v-btn>
        </template>
        <v-btn fab dark small color="green">
            <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn fab dark small color="indigo">
            <v-icon>thumb_up</v-icon>
        </v-btn>
        <v-tooltip left>    
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" fab dark small color="red">
                <v-icon>email</v-icon>
            </v-btn>
          </template>
          <span>Envie-nos um email</span>
        </v-tooltip>
         <a href="#hero-img" v-smooth-scroll="{ duration : 2000 }">
         <v-btn  fab dark small color="primary">
            <v-icon>expand_less</v-icon>
         </v-btn>
        </a>

    </v-speed-dial>
</v-card>
</template>
<script>
  export default {
    data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: true,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
    }),

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },
    },

    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      },
    },
  }
</script>
</script>

<style scoped>
#create .v-speed-dial {
    position: fixed;   
}

#create .v-btn--floating {
    position: relative;    
}
</style>
