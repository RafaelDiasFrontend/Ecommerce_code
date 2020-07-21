<template>
  <div class="dashboard">
    <v-container fluid class="w-85 mt-3">
      <!-- Profile background -->
      <v-row class="content-grid box my-5">
        <v-col cols="12" lg="12" class="mx-auto">
          <v-container>
            <v-row class="mx-auto d-flex align-center">
              <!-- Avatar -->
              <v-col cols="12" sm="12" md="3" class="text-center">
                <v-avatar size="200" color="blue lighten-4 text-center">
                  <img src="~/assets/imagens/Profile/dashpro/avatar.svg" alt="John" />
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="12" md="3" class="text-center">
                <v-form 
                ref="form"
                @submit.prevent="submitFile"
                >
                  <v-file-input                   
                    v-model="file"                
                    outlined
                    @change="uploadImage"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Trocar Avatar"
                    prepend-icon="mdi-camera"
                  ></v-file-input>
                    <v-btn 
                      type="submit"
                      class="bg-secondary-color btn-register mt-1"                       
                    >Registrar
                    </v-btn> 
                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "proDash",
  components: {},
  data() {
    return {
      rules: [
        value =>
          !value ||
          value.size < 1000000 ||
          "Sua imagem não pode ser maior que 1 MB"
      ],
      file: [],     
    };
  },
  methods: {
    async submitFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      console.log(">> formData >> ", formData);

      // You should have a server side REST API
      await this.$axios
        .post("budget-imgs", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function(data) {
          console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },  
    uploadImage(e) {
      let file = e;
      console.log(e);
    }
  }
};
</script>


<style>
.dashboard {
  padding: 0.4em 0 2em 0;
}
.btn {
  padding: 0.8em 1.9em;
  color: #fff;
}

.displayNone {
  display: none;
}

.custom-enter,
.custom-leave-to {
  opacity: 0;
}

.custom-enter-active,
.custom-leave-active {
  transition: opacity 2s;
}
</style>