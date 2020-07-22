<template>
  <tr>
    <th class="d-flex my-4 align-center">
      <img src="http://via.placeholder.com/60x60" alt />
    </th>
    <th class="text-left h3">
      <span class="pa-1">{{ product.product.name }}</span>
      <span class="pa-1 text-uppercase">{{ product.name }}</span>
    </th>
      
    <th class="text-left">   
        <select value="" class='w-100'>
        <option>0</option>
        <option
           v-for="x in product.product.stock_count"
          :key="x"
          :value="product.stock_count"
          :selected="x === product.quantity"         
          >{{ x }}
        </option>
        </select>    
    </th>
      <th class="text-left h3">
      <span class="pa-1">{{ product.total }}</span>    
    </th>
    <th class="text-left">
      <a href>
        <v-icon small>close</v-icon>
      </a>
    </th>
  </tr>

</template>
<script>
export default {
  props: {
    product: {
      required: true,
      type: Object
    }, 
  },
};
</script>