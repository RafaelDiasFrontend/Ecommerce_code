<template>
  <section id="checkout" class="mg-section">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <!-- Send To -->
          <v-card class="mb-5">
            <ShippingAddress :addresses="addresses" v-model="form.address_id" />
          </v-card>
          <!-- Payments -->
          <v-card class="mb-5">
            <h2 class="h2-custom">Metodo De Pagamento</h2>
          </v-card>
          <!-- Shipping -->
          <v-card class="mb-5">
            <h2 class="h2-custom">Shipping</h2>
            <form>                      
              <select v-model="form.shipping_id">
                <option
                  v-for="shipping in shippingMethods"
                  :key="shipping.id"
                  :value="shipping.id"
                >
                {{ shipping.name }} ({{ shipping.price }})
                </option>
              </select>
            </form>
          </v-card>
          <v-spacer></v-spacer>

          <!-- Cart Summary -->

          <v-card class="pa-5" v-if="products.length">
            <h2 class="h2-custom my-3">Resumo do carrinho</h2>
            <CartOverview>
              <template slot="rows">
                <tr>
                  <td></td>
                  <td></td>
                  <td class="font-weight-bold">Envio</td>
                  <td>R$0,00</td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td class="font-weight-bold">Total</td>
                  <td>{{ total }}</td>
                  <td></td>
                </tr>
              </template>
            </CartOverview>
          </v-card>
          <v-btn
            type="submit"
            class="bg-secondary-color btn-register mt-4"
            :disabled="empty"
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
import { mapGetters } from "vuex";

import CartOverview from "@/components/Cart/CartOverview";
import ShippingAddress from "@/components/Checkout/Addresses/ShippingAddress";
export default {
  components: {
    CartOverview,
    ShippingAddress,
  },
  data() {
    return {
      addresses: [],
      shippingMethods: [],
      form: {
        address_id: null,
        shipping_method_id: null
      },
    };
  },
  watch: {
    'form.address_id' (addressId) {
      this.getShippinMethodsForAddress(addressId);
    },
  },
  computed: {
    ...mapGetters({
      total: "cart/total",
      products: "cart/products",
      empty: "cart/empty",
    }),
  },

  methods: {
    async getShippinMethodsForAddress(addressId) {
      let response = await this.$axios.$get(`addresses/${addressId}/shipping`);

      this.shippingMethods = response.data;
    },
  },

  async asyncData({ app }) {
    let addresses = await app.$axios.$get("addresses");

    return {
      addresses: addresses.data,
    };
  },
};
</script>



<style scoped>
</style>