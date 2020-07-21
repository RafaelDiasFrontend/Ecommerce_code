<template>
  <v-app light>
    <TheHeader @sidenavToggle="displaySidenav =!displaySidenav" />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false" />
 
    <nuxt />
  
  <FooterDefault />
  </v-app>
</template>

<script>
import Button02 from '@/components/Buttons/Button02'
import TheHeader from '~/components/Navigation/TheHeader'
import TheSidenav from '~/components/Navigation/TheSidenav'
import FooterDefault from '@/components/Footers/FooterDefault'
export default {
  components: {
    TheHeader,
    TheSidenav,
    FooterDefault,
    Button02
  },
   data() {
    return {
      displaySidenav: false
    }
  }
}
</script>
