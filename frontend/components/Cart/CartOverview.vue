<template>
  <table class='grey lighten-4 w-100'>
    <tbody>
      <CartOverviewProduct 
      v-for="product in products" 
      :key="product.id" 
      
      />
    </tbody>
  </table>
</template>
<script>
import CartOverviewProduct from "@/components/cart/CartOverviewProduct";

import { mapGetters } from "vuex";
export default {
  components: { CartOverviewProduct },
  computed: {
    ...mapGetters({
      products: "cart/products"
    })
  }
};
</script>