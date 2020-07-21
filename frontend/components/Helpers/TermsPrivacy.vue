<template>
<div class='terms-privacy'>
    <v-checkbox v-model="checkbox" class='py-0 my-0 d-flex align-center' center :rules="required">
    </v-checkbox>
    <div class='terms-privacy-text'>Li e aceito os <nuxt-link color="primary" target="_blank" class="font-weight-medium" to="/termos-de-responsabilidade">termos</nuxt-link> de responsabilidade</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            required: [
                v => !!v || '',
            ],
            checkbox: null,
        }
    },

}
</script>

<style scoped>
.terms-privacy {
    margin-left: 15px;
    display: grid;
    grid-template-columns: 30px 295px;
    grid-column-gap: 2px;
    margin-bottom: 0 !important;
    height: 44px;

}

.terms-privacy-text {
    font-size: 0.88rem !important;
    line-height: 1.8;
    color: rgb(131, 131, 131);
}
</style>
