<template>
  <div class="single__product">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            src="http://via.placeholder.com/480x480"
            alt="Nome do produto"
            class="product__img elevation-5"
          ></v-img>
        </v-col>

        <v-col cols="12" md="6">
          <v-container class="product_description-container">
            <h2 class="h2 py-2">{{ product.name}}</h2>
            <v-chip v-if="!product.in_stock" class="h4 grey--text">Esgotado</v-chip>
            <span class="h4 grey--text">{{ product.price }}</span>
            <p v-if="product.description" class="p-small my-2">{{ product.description }}</p>
            <form action @submit.prevent="add">
              <ProductVariation
                v-for="(variations, type) in product.variations"
                :type="type"
                :variations="variations"
                :key="type"
                v-model="form.variation"
              />
             
              <div class="v-field" v-if="form.variation">
                <div class="v-control">
                  <div class="select my-2">
                    <select v-model="form.quantity" style="width: 100%;" name id>
                      <option :value="x" :key="x" v-for="x in parseInt(form.variation.stock_count)">{{ x }}</option>
                    </select>
                  </div>
                </div>
                <v-btn large width="100%" color="primary" type="submit">Adicionar ao Carrinho</v-btn>
              </div>
            </form>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>




<script>
import { mapActions } from 'vuex' 
import ProductVariation from "@/components/Products/ProductVariation";
export default {
  components: {
    ProductVariation
  },
  data() {
    return {
      product: null,
      form: {
        variation: "",
        quantity: 1      
      }     
     }
    },
     watch: {
        'form.variation'() {
          this.form.quantity = 1
      }   
  },
  methods: {
    ...mapActions({
      store: 'cart/store'
    }),
    add () {
      this.store([{
        id: this.form.variation.id, quantity: this.form.quantity
      }])
      this.form = {
        variation: '',
        quantity: 1
      }
    }

  },
  async asyncData({ params, app }) {
    let response = await app.$axios.$get(`products/${params.slug}`);

    return {
      product: response.data
    };
  }
};
</script>




<style scoped>
.single__product {
  margin: 6em 0;
}
.product__img {
  max-width: 480px;
  max-height: 480px;
  margin: 0 auto;
}
.product_description-container {
  max-width: 480px;
  margin: 0;
}
</style>