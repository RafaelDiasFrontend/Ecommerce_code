<template>
  <form
    enctype="multipart/form-data"
    novalidate   
    class="inputForm01"
    :class="{ 
        'borderDark': dragging
        }"
    @dragover.prevent="handleDragOver"
    @dragleave.prevent="handleDragLeave"
  >
    <input type="file" multiple class="form__01_input" @change="handleFilesChosen" />
    <template v-if="dragging">
      <div>Solte para fazer o upload de<span class="custom-blue font-weight-medium"> {{ draggingCount }}</span> arquivos</div>
    </template>
    <template v-else>
      <div class="text-grey">
        Arraste e solte sua imagem aqui ou
        <span
          class="custom-blue font-weight-medium"
        >clique para fazer o upload</span>
      </div>
    </template>
  </form>
</template>
<script>
export default {
  data() {
    return {
      dragging: false,
      draggingCount: 0
    };
  },
  methods: {
    handleFilesChosen(e) {
      console.log(e);      
      this.dragging = false;
      this.$emit("chosen", e.target.files);
    },
    handleDragOver(e) {
      this.dragging = true;
      this.draggingCount = e.dataTransfer.items.length;
    },
    handleDragLeave() {
      this.dragging = false;
      this.draggingCount = 0
    }
  }
};
</script>

<style>
.custom-blue {
  color: #57a7e9 !important;
}
.inputForm01 {
  --dragndrop-min-height: 130px;
  width: 100%;
  min-height: var(--dragndrop-min-height);
  background-color: #f8f8f8;
  position: relative;
  border: 3px dashed rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 14px;
}
.form__01_input {
  position: absolute;
  opacity: 0;
  width: 100% !important;
  height: 100%;
  top: 0;
  left: 0;
}
.borderDark {
  border: 3px dashed #57a7e9;
}
</style>