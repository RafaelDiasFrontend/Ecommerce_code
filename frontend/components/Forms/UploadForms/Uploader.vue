<template>
  <div>
    <UploadForm01 @chosen="handleFilesChosen" />  
    <UploaderFile :endpoint="determineEndpointFor(upload.file.type)" :baseURL="options.baseURL" v-for="(upload, index) in uploads" :key="index" :upload="upload" />
  </div>
</template>

<script>
import options from "@/plugins/options";
import UploadForm01 from "@/components/Forms/UploadForms/UploadForm01";
import UploaderFile from "@/components/Forms/UploadForms/UploaderFile";
export default {
  components: {
    UploadForm01,
    UploaderFile
  },
  props: {
    options: {
      required: false,
      type: Object,
      default: () => options
    },
    endpoints: {
      required: true,
      type: Object   
    }
  },
  data() {
    return {
      uploads: []
    };
  },
  methods: {
    determineEndpointFor(fileType) {

    },
    handleFilesChosen(files) {
      console.log(files);
      this.uploads.push(
        ...Array.from(files).map(file => {
          return {
            file
          };
        })
      );
    }
  }
};
</script>

