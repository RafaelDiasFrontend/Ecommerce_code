<template>
  <section id="checkout" class="mg-section">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <!-- Send To -->
          <v-card class="mb-5">
            <h2 class="h2-custom">Enviar para</h2>
          </v-card>
          <!-- Payments -->
          <v-card class="mb-5">
            <h2 class="h2-custom">Metodo De Pagamento</h2>
          </v-card>
          <!-- Shipping -->
          <v-card class="mb-5">
            <h2 class="h2-custom">Shipping</h2>
            <v-form>
              <v-select></v-select>
            </v-form>
          </v-card>
          <v-spacer></v-spacer>

          <!-- Cart Summary -->
          <h2 class="h2-custom my-3">Resumo do carrinho</h2>
          <v-card class="pa-5" v-if="products.length">
            <CartOverview>
              <template slot="rows">
                <tr>
                  <td></td>
                  <td></td>
                  <td class='font-weight-bold'>
                      Envio
                  </td>
                  <td>
                      R$0,00
                  </td>
                  <td></td>
                </tr>

                 <tr>
                  <td></td>
                  <td></td>
                  <td class='font-weight-bold'>
                      Total
                  </td>
                  <td>
                      {{ total }}
                  </td>
                  <td></td>
                </tr>
              </template>
            </CartOverview>
          </v-card>
          <v-btn
            type="submit"
            class="bg-secondary-color btn-register mt-4"
            :disabled="empty"
            @click="validate"
            
            required
          >Realizar pagamento</v-btn>
        </v-col>

        <!-- Col 02 -->
        <v-col cols="12" md="4">
          <v-btn
            :disabled="empty"
            type="submit"
            class="bg-secondary-color btn-register mt-5"           
            @click="validate"
            required
          >Realizar pagamento</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import CartOverview from "@/components/Cart/CartOverview";
export default {
  components: {
    CartOverview,
  },
  computed: {
  ...mapGetters({
      total: 'cart/total',
      products: 'cart/products',
      empty: 'cart/empty'
  })
  
  
  }
};
</script>



<style scoped>
</style>