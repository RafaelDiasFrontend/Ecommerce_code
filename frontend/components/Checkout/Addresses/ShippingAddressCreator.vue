<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <form @submit.prevent="store">
          <v-row>
            <v-col cols="12">
              <v-text-field
                required
                label="Nome"
                v-model="form.name"
                outlined
                placeholder="Nome do Endereço"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field
                required
                label="Endereço"
                v-model="form.address_1"
                outlined
                placeholder="Endereço"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                ref="postal_code"
                v-mask="['#####-###']"
                label="CEP"
                v-model="form.postal_code"
                required
                outlined
                placeholder="XXXXX-XXX"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field label="Cidade" v-model="form.city" outlined required></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">  
              <div>           
                <CountryDropdown v-model="form.country_id" />     
              </div>        
            </v-col>

            <v-col cols="12" sm="5">
              <v-btn type="submit" color="primary">Adicionar Endereço</v-btn>
              <v-btn color="secondary" @click.prevent="$emit('cancel')">Cancelar</v-btn>
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CountryDropdown from "@/components/Checkout/Addresses/CountryDropdown";
export default {
  components: { CountryDropdown },
  data() {
    return {
      form: {
        name: "",
        address_1: "",
        city: "",
        postal_code: "",
        country_id: "",
        default: true,
      },
    };
  },
  methods: {
    async store() {
      let response = await this.$axios.$post("addresses", this.form);
      this.$emit("created", response.data);
    },
  },
};
</script>