<template>
    <v-container class="fill-height" fluid>
      <v-row align="center custom-mt" justify="center">      
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12" v-if="products.length">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title class='h3'>Carrinho</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn  icon large target="_blank" v-on="on">
                    <v-icon>arrow_back</v-icon>
                  </v-btn>
                </template>
                <span>Voltar para a loja</span>
              </v-tooltip>
            </v-toolbar>
            <!-- Content -->
            <v-card-text>
                <CartOverview />
            </v-card-text>
            <v-card-actions>              
              <v-btn :disabled="empty" color="primary" class='w-100 bg-primary-color white--text btn-register mt-1' large>Comprar</v-btn>
            </v-card-actions>
          </v-card>
          <!-- If cart is empty -->
          <div v-else class="text-center">
            <h2 class='mb-3'>Ops! O seu carrinho esta vazio!</h2>
            <nuxt-link class='grey--text' :to="{ name: 'loja' }">Voltar para a loja</nuxt-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import  { mapGetters } from 'vuex'
import CartOverview from '@/components/Cart/cartOverview'
  export default {
      components: {
          CartOverview
      },   
      computed: {
        ...mapGetters({
          empty: 'cart/empty',
          products: 'cart/products',
          changed: 'cart/changed'
        })
      }
  }
</script>

<style scoped>

.custom-mt {
  margin-top: 11em;
  margin-bottom: 12em;
}

</style>