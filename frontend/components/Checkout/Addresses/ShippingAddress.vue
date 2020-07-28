<template>
  <div>
  
    <template v-if="selectedAddress">
      <ul class='grey--text py-5'>
        <h2 class="h2-custom mb-2 primary-color">Enviar para</h2>
        <li>{{ selectedAddress.name }}</li>
        <li>{{ selectedAddress.address_1 }}</li>
        <li>{{ selectedAddress.city }}</li>
        <li>{{ selectedAddress.postal_code }}</li>
        <li>{{ selectedAddress.country.name }}</li>
      </ul>
    </template>
  </div>
</template>


<script>
export default {
  props: {
    addresses: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
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