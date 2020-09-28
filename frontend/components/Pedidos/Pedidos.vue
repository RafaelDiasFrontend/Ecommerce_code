 <template>
        <tr>
          <td>#{{ order.id }}</td>
          <td>{{ order.created_at }}</td>
          <td>
              <div v-for="product in products" :key="product.id">
                <a href="">Produto</a>
              </div>
              <template v-if="moreProducts > 0">
                e mais {{ moreProducts }} 
              </template>
          </td>
          <td>
            <span>{{ order.subtotal }}</span>
            </td>
          <td>
             <v-chip  
             :class="{
               'success': this.order.status === 'complete',
               'warning': this.order.status === 'processing' || this.order.status === 'pending',
               'error': this.order.status === 'payment_failed',
               
               }">{{ order.status }}</v-chip>
          </td>         
        </tr>       
</template>

<script>
export default { 
  data () {
    return {
      maxProducts: 2
    }
  },
  props: {
    order: {
      required: true,
      type: Object
    }
  },

  computed: {
    products () {
      return this.order.products.slice(0, this.maxProducts )
    },

    moreProducts () {
      return this.order.products.length - this.maxProducts
    }
  }

}
</script>
