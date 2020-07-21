<template>
  <div class>
    <v-card hover>
      <nuxt-link :to="link">
        <v-img src="http://via.placeholder.com/480x480" alt="Nome do produto" class="product__img"></v-img>
      </nuxt-link>
      <v-container class="product_description-container">
        <nuxt-link :to="link">
          <h2 class="py-2">{{ product.name}}</h2>
        </nuxt-link>
        <span class="p-small">{{ product.price }}</span>
        <p v-if="product.description" class="p my-2">{{ product.description }}</p>       
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object
    },  
  },
  computed: {
    link () {
      return { 
        name: 'produtos-slug', 
        params: { 
          slug: this.product.slug 
          }
        }
    }
  },
  data: () => ({})
};
</script>


<style>
.product__img {
  max-width: 480px;
  max-height: 480px;
  margin: 0 auto;
}
</style>