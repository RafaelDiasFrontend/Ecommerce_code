<template>
  <div id="loja">
    <Carousel />
    <FeatureProducts />

    <!-- All Products -->
    <section id="all-products" class="df-width">
      <div class="text-center">
        <h2 class="h2">Nossos Produtos</h2>
      </div>
      <v-container>
        <v-row class="py-8 mx-auto">
          <v-col v-for="n in 16" :key="n" col="12" lg="3" md="4" xs="12" sm="6">
            <v-card height="400" hover>
              <v-container>
                <p>Produto</p>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Sale 01 -->
    <AboutLoja01 />

    <!-- Sale 01 -->
    <section id="all-products" class="df-width">
      <div class="text-center">
        <h2 class="h2">Combos</h2>
      </div>
      <v-container>
        <v-row class="py-8 mx-auto">
          <v-col col="12" lg="4" md="3" xs="12" sm="6">
            <v-card height="400" hover>
              <v-container>
                <p>Produto</p>
              </v-container>
            </v-card>
          </v-col>
          <v-col col="12" lg="3" md="3" xs="12" sm="6">
            <v-card height="400" hover>
              <v-container>
                <p>Produto</p>
              </v-container>
            </v-card>
          </v-col>
          <v-col col="12" lg="5" md="5" xs="12" sm="6">
            <v-card height="400" hover>
              <v-container>
                <p>Produto</p>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import Carousel from "./components/Carousel";
import AboutLoja01 from "./components/AboutLoja01";

export default {
  components: {
    Carousel,
    AboutLoja01,
  },
};
</script>

<style scoped>
#loja {
  margin-top: -69px;
}
#all-products {
  padding: 4em 0;
}
</style>