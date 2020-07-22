<template>
  <v-simple-table>   
      <tbody>
        <CartOverviewProduct
         v-for="product in products" 
         :key="product.id" 
         :product="product"
         />
      </tbody>    
  </v-simple-table>
</template>
<script>
import CartOverviewProduct from "@/components/cart/CartOverviewProduct";

import { mapGetters } from "vuex";
export default {
  components: { CartOverviewProduct },
  computed: {
    ...mapGetters({
      products: "cart/products",
    }),
  },
  
};
</script>