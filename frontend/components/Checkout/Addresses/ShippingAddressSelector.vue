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
          v-for="address in addresses"
          :key="address.id"
          :class="{ 'font-weight-bold': address.id === selectedAddress.id }"
        >
          <td>{{ address.name }}</td>
          <td>{{ address.address_1 }}</td>
          <td>{{ address.city }}</td>
          <td>{{ address.postal_code }}</td>
          <td>{{ address.country_name }}</td>
          <td>
            <v-switch v-model='address.default' @click.prevent="$emit('click', address)">Enviar para esse End</v-switch>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    addresses: {
      required: true,
      type: Array,
    },
    selectedAddress: {
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