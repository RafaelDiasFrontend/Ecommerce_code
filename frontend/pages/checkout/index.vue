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
            <PaymentMethods :payment-methods="paymentMethods" v-model="form.method_id" />
          </v-card>
          <!-- Shipping -->
          <template v-if="shippingMethodId">
                <v-card class="mb-5">
            <h2 class="h2-custom ml-4">Envio</h2>
            {{ shippingMethodId }}
            <form>
              <select v-model="shippingMethodId">
                <option
                  v-for="shipping in shippingMethods"
                  :key="shipping.id"
                  :value="shipping.id"
                >{{ shipping.name }} ({{ shipping.price }})</option>
              </select>
            </form>
          </v-card>
          </template>
      
          <v-spacer></v-spacer>

          <!-- Cart Summary -->

          <v-card class="pa-5" v-if="products.length">
            <h2 class="h2-custom my-3">Resumo do carrinho</h2>
            <CartOverview>
              <template slot="rows" v-if="shippingMethodId">
                <tr>
                  <td></td>
                  <td></td>
                  <td class="font-weight-bold">Envio</td>
                  <td>{{ shipping.price }}</td>
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
           :disabled="empty || submitting"
            @click.prevent="order"          
          >Realizar pagamento</v-btn>
        </v-col>

        <!-- Col 02 -->
        <v-col cols="12" md="4">
          <v-btn
            :disabled="empty || submitting"
            @click.prevent="order"           
            class="bg-secondary-color btn-register mt-5"            
          >Realizar pagamento</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import CartOverview from "@/components/Cart/CartOverview";
import ShippingAddress from "@/components/Checkout/Addresses/ShippingAddress";
import PaymentMethods from "@/components/Checkout/paymentMethods/PaymentMethods";
export default {
  components: {
    CartOverview,
    ShippingAddress,
    PaymentMethods
  },
  data: () => ({
      submitting: false,
      addresses: [],
      shippingMethods: [],
      paymentMethods: [],
      form: {
        address_id: null,
      },
    }),  

  watch: {
    "form.address_id"(addressId) {
      this.getShippingMethodsForAddress(addressId).then(() => {
        this.setShipping(this.shippingMethods[0]);
      });
    },

    shippingMethodId() {
      this.getCart();
    }, 
  },
  computed: {
    ...mapGetters({
      total: "cart/total",
      products: "cart/products",
      empty: "cart/empty",
      shipping: "cart/shipping",
    }),

    shippingMethodId: {
      get() {
        return this.shipping ? this.shipping.id : "";
      },
      set(shippingMethodId) {
        this.setShipping(
          this.shippingMethods.find((s) => s.id === shippingMethodId)
        );
      },
    },
  },

  methods: {
    ...mapActions({
      setShipping: "cart/setShipping",
      getCart: "cart/getCart",
      flash: 'alert/flash'
    }),

    async order () {
     
      this.submitting = true

      try {
        await this.$axios.$post('orders', {
          ...this.form,
          shipping_method_id: this.shippingMethodId
        })      

        await this.getCart()

        this.$router.replace({
          name: 'pedidos'
        })
      } catch (e) {
        this.flash(e.response.data.message)

        this.getCart()      
      }
      this.submitting = false
    },

    async getShippingMethodsForAddress(addressId) {
      let response = await this.$axios.$get(`addresses/${addressId}/shipping`);

      this.shippingMethods = response.data;

      return response;
    },
  },

  async asyncData({ app }) {
    let addresses = await app.$axios.$get("addresses");
    let paymentMethods = await app.$axios.$get("payment-methods");

    return {
      addresses: addresses.data,
      paymentMethods: paymentMethods.data,
    };
  },
};
</script>



<style scoped>
</style>