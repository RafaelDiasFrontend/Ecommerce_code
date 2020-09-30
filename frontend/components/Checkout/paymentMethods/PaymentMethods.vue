<template>
  <div>
    <template v-if="selectedPaymentMethod">
      <v-container class="box">
        <h2 class="h2-custom mb-2 primary-color">Metodo de Pagamento</h2>
        <template v-if="selecting">
           <PaymentMethodsSelector
            :payment-methods="paymentMethods"
            :selected-payment-method="selectedPaymentMethod"
            @click="paymentMethodSelected"
          />
        </template>
        <template v-else-if="creating">
         Criar o Método de Pagamento
        </template>
        <template v-else>
          <template v-if="selectedPaymentMethod">
            <ul class="grey--text pa-0">
              <li>Tipo:{{ selectedPaymentMethod.card_type }}</li>
              <li>Final:{{ selectedPaymentMethod.last_four }}</li>
              
            </ul>
          </template>
          <v-btn color="primary"  @click.prevent="selecting = true">Mudar Numero do Cartão</v-btn>
           <v-btn color="secondary" @click.prevent="creating = true">Adicionar Novo Numero</v-btn>
        </template>
      </v-container>
    </template>
  </div>
</template>


<script>
import PaymentMethodsSelector from './paymentMethodsSelector'
export default {
  props: {
    paymentMethods: {
      required: true,
      type: Array,
    },
  }, 
  components: {
    PaymentMethodsSelector
  },

  data() {
    return {
      selecting: false,
      creating: false,
      localPaymentMethods: this.paymentMethods,
      selectedPaymentMethod: null,
    };
  },
   watch: {
    selectedPaymentMethod (paymentMethod) {
      this.$emit('input', paymentMethod.id )
    }
  },
  computed: {
    defaultPaymentMethod() {
      return this.localPaymentMethods.find((a) => a.default === true);
    },
  },
  methods: {
    paymentMethodSelected(paymentMethod) {
      this.switchPaymentMethod(paymentMethod)
      this.selecting = false
    },

    switchPaymentMethod(paymentMethod) {
      this.selectedPaymentMethod = paymentMethod;
    },
    created (paymentMethod) {
      this.localPaymentMethod.push(paymentMethod)
      this.creating = false

      this.switchPaymentMethod(paymentMethod)
    }
  },
  created() {
    if (this.paymentMethods.length) {
      this.switchPaymentMethod(this.defaultPaymentMethod);
    }
  },
};
</script>


<style>
.box {
  padding: 2em 2.3em;
}
</style>