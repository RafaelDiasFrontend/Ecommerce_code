<template>
<section id='checkout' class='mg-section'>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <!-- Send To -->
        <v-card class="my-1">
          <h2 class="h2-custom">Enviar para</h2>
        </v-card>
        <!-- Payments -->
        <v-card class="my-1">
          <h2 class="h2-custom">Metodo De Pagamento</h2>
        </v-card>
        <!-- Shipping -->
        <v-card class='my-1'>
          <h2 class="h2-custom">Shipping</h2>
          <v-form>
            <v-select></v-select>
          </v-form>
        </v-card>
        <v-spacer></v-spacer>
        <v-card>
          <h2 class='h2-custom'>Cart Summary</h2>
          <v-form>
            <v-select></v-select>
          </v-form>
        </v-card>

        <v-btn
          type="submit"
          class="bg-secondary-color btn-register mt-5"
          :disabled="!valid"
          @click="validate"
          required
        >Realizar pagamento</v-btn>
      </v-col>

      <!-- Col 02 -->
      <v-col cols="12" md="4">
        <v-btn
          type="submit"
          class="bg-secondary-color btn-register mt-5"
          :disabled="!valid"
          @click="validate"
          required
        >Realizar pagamento</v-btn>
      </v-col>
    </v-row>
  </v-container>
</section>
</template>

<script>


</script>



<style scoped>

</style>