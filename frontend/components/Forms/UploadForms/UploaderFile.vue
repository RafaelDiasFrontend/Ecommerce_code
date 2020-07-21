<template>
  <div class="white pa-4 mt-2 b-radio-1 pl-7">
    <div class="d-flex align-baseline justify-space-between">
      <div class="d-flex">
        <div>{{ upload.file.name }}</div>
       
      </div>

      <div class="d-flex">
        <div class="grey--text p-small ml-2">{{ sizeDisplay }}MB</div>
        <div class="grey--text p-small ml-2">
        <v-progress-circular
      :rotate="360"
      :size="20"
      :width="5"
      :value="value"
      color="success"
    >
    
    </v-progress-circular>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    upload: {
      required: true,
      type: Object
    },
     baseURL: {
      required: true,
      type: String
    },
     endpoint: {
      required: true,
      type: String
    }
  },
  data () {
      return {
        interval: {},
        value: 0,
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {     
      this.interval = setInterval(() => {       
        this.value += 30
      }, 1000)
    },
    computed: {
        sizeDisplay() {
            return (this.upload.file.size / 1000000).toFixed(2)
        }
    }
};
</script>

<style>
</style>