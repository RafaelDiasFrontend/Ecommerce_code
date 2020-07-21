<template>
  <div class="text-center">
    <section id="category-slug" class='mg-section'>
      <h1 class="h1">categoria:</h1>
      <v-container class="df-width">
        <v-row>
          <v-col cols="12" md="3" class v-for="product in products" :key="product.slug">
            <Product :product="product" />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import Product from "@/components/Products/Product";
export default {
  components: {
    Product
  },
  data() {
    return {
      products: []
    };
  },

  async asyncData({ params, app }) {
    let response = await app.$axios.$get(`products?category=${params.slug}`);
    return {
      products: response.data
    };
  }
};
</script>

<style>


</style>