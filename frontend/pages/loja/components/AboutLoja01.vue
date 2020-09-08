<template>
  <section id="aboutLoja" class="py-custom">
    <h2 class="d-none"></h2>
    <v-container class="df-width">
      <v-row class="d-flex align-center pa-2">
        <v-col cols="12" sm="12" md="6">
          <div class="quem-somos">
            <div class="text-lg-left about-title pb-3">What is Lorem Ipsum?</div>
            <p class="p pt-3 pb-4">
              <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button class="learn-more">
              <nuxt-link to="/blog/como-envio-um-orcamento">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Saiba Mais</span>
              </nuxt-link>
            </button>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <div class="flex-wrap pa-2">
            <v-card hover class='bg-transparent'>
              <img class="about-img" src="~/assets/imagens/loja/magic-room.jpg" alt="integrace" />
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ArrowScrolldownButtonAbout from "@/components/Buttons/ArrowScrolldownButtonAbout";
export default {
  components: {
    ArrowScrolldownButtonAbout,
  },
};
</script>

<style scoped>
#aboutLoja {
  padding: 4.1em 0 4.8em 0;
}
.about-title {
  font-size: 1.8rem;
}
.p {
  font-size: 0.91rem;
}
.bg-transparent {
    background: transparent!important;
}
</style>
