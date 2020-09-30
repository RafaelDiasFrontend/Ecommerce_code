<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">Endereço</th>
          <th class="text-left">Cidade</th>
          <th class="text-left">CEP</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="paymentMethod in paymentMethods"
          :key="paymentMethod.id"
          :class="{ 'font-weight-bold': paymentMethod.id === selectedPaymentMethod.id }"
        >
          <td>{{ paymentMethod.card_type }} terminado em {{ paymentMethod.last_four }} </td>         
          <td>
            <v-switch v-model='paymentMethods.default' @click.prevent="$emit('click', paymentMethod)">
                Pagar com este
            </v-switch>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    paymentMethods: {
      required: true,
      type: Array,
    },
    selectedPaymentMethod: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },
};
</script>