<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title class='h3'>Carrinho</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn v-model="source" icon large target="_blank" v-on="on">
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
              <v-btn color="primary" class='w-100 bg-primary-color white--text btn-register mt-1' large>Comprar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CartOverview from '@/components/Cart/cartOverview'
  export default {
      components: {
          CartOverview
      } 
  }
</script>