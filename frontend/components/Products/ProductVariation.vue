<template>
  <div class="xt-field--enclosed v-text-field--outlined v-select primary--text">
    <label class="h4 grey--text">{{ type }}</label>
    <div class="input-control my-2">
      <div class="w-100">
        <select :value="selectedVariationId" @change="changed($event, type)" class="select-control" name id>
          <option value placeholder="escolha">Escolha</option>
          <option 
          v-for="variation in variations" 
          :key="variation.id"
          :value="variation.id"
          :disabled="!variation.in_stock"
          >{{ variation.name }}
          <template v-if="variation.price_varies">
            ({{ variation.price }})
            </template>
              <template v-if="!variation.in_stock">
             ( Esgotado )
            </template>          
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      required: true,
      type: String
    },
    variations: {
      required: true,
      type: Array
    },
    value: {
      required: false,
      default: ''
    }
  },
  computed: {
    selectedVariationId () {
      if (!this.findVariation(this.value.id)) {
        return ''
      }
      return this.value.id
    }
  },
  methods: {
    changed (event, type){
      this.$emit('input', this.findVariation(event.target.value))
    },

    findVariation(id) {
      let variation = this.variations.find(v => v.id == id)

      if (typeof variation === 'undefined') {
        return null
      }
      return variation
    }
  }
};
</script>
<style scoped>
.input-control {
  width: 100%;
  background: #fff;
}

.select-control {
  background: white;
  padding: 0.72em 0.62em;
  border: 2px solid var(--primary-color);
  border-radius: 6px;
  position: relative;
  width: 100%;
}
</style>