<template>
  <div class="orders">
    <v-container>
      <div class="message" v-if="orders.length">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr class="font-weight-bold">
                <th class="text-left">ID</th>
                <th class="text-left">Data do Pedido</th>
                <th class="text-left">Produto</th>
                <th class="text-left">Preço</th>
                <th class="text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <Order
               v-for="order in orders"
               :key="order.id"
               :order="order"
               />
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <p v-else>
        Você não possui pedidos
      </p>
    </v-container>
  </div>
</template>


<script>
import Order from "@/components/orders/Order";
export default {


  data() {
    return {
      orders: [],
    };
  },
  components: {
    Order,
  },
  async asyncData({ app }) {
    let response = await app.$axios.$get("orders");

    return {
      orders: response.data,
    };
  },
};
</script>

<style>
 .orders {
  padding: 9em 0;
 }

</style>