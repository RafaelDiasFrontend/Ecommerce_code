<template>
  <table class="table is-hoverable is-fullwidth">
    <tbody>
      <CartOverviewProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
      <tr>
        <td></td>
        <td></td>
        <td class='pt-3'>
          <p class="font-weight-bold">Subtotal</p>
        </td>
        <td class='pt-3'>
          <p>{{ subtotal }}</p>
        </td>
        <td></td>
      </tr>
      <slot name="rows" />
    </tbody>
  </table>
</template>

<script>
  import { mapGetters } from 'vuex'

  import CartOverviewProduct from '@/components/cart/CartOverviewProduct'

  export default {
    computed: {
      ...mapGetters({
        products: 'cart/products',
        subtotal: 'cart/subtotal'
      })
    },

    components: {
      CartOverviewProduct
    }
  }
</script>
