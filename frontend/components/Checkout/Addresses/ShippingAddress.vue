<template>
  <div>
    <template v-if="selectedAddress">
      <v-container class="box">
        <h2 class="h2-custom mb-2 primary-color">Enviar para</h2>
        <template v-if="selecting">
          <ShippingAddressSelector 
          :addresses="addresses"
          :selectedAddress="selectedAddress"
           />
        </template>
        <template v-else>
          <template v-if="selectedAddress">
            <ul class="grey--text pa-0">
              <li>{{ selectedAddress.name }}</li>
              <li>{{ selectedAddress.address_1 }}</li>
              <li>{{ selectedAddress.city }}</li>
              <li>{{ selectedAddress.postal_code }}</li>
              <li>{{ selectedAddress.country.name }}</li>
            </ul>
          </template>
          <v-btn color="primary my-4" @click.prevent="selecting = true">Mudar o Endereço de Entrega</v-btn>
        </template>
      </v-container>
    </template>
  </div>
</template>


<script>
import ShippingAddressSelector from "@/components/Checkout/Addresses/ShippingAddressSelector";
export default {
  props: {
    addresses: {
      required: true,
      type: Array,
    },
  },
  components: {
    ShippingAddressSelector,
  },
  data() {
    return {
      selecting: false,
      localAddresses: this.addresses,
      selectedAddress: null,
    };
  },
  computed: {
    defaultAddress() {
      return this.localAddresses.find((a) => a.default === true);
    },
  },
  methods: {
    switchAddress(address) {
      this.selectedAddress = address;
    },
  },
  created() {
    if (this.addresses.length) {
      this.switchAddress(this.defaultAddress);
    }
  },
};
</script>


<style>
.box {
  padding: 2em 2.3em;
}
</style>