<template>
<div class="dashboard">
    <v-container fluid class="w-85 mt-3 center">
        <v-row>
            <v-col cols="12" xs="12" sm='6' md='6' lg="3">
                <!-- Info 01 -->
                <v-card hover class="py-2 pa-5 text-center d-flex justify-space-between align-center" flat>
                    <div class="d-flex flex-column">
                        <div class='d-flex flex-column align-start'>
                            <v-icon size='44' color='primary' class='py-2'>emoji_flags</v-icon>
                            <div class="ml-2 font-weight-medium h3 grey--text lighten-1">Projetos Concluídos</div>
                        </div>
                    </div>

                    <span class='font-weight-bold display-1 grey--text'>10</span>
                </v-card>
            </v-col>

                <!-- Info 02 -->
                <v-col cols="12" xs="12" sm='6' md='6' lg="3">
                <!-- Info 01 -->
                <v-card hover class="py-2 pa-5  text-center d-flex justify-space-between align-center" flat>
                    <div class="d-flex flex-column">
                        <div  class='d-flex flex-column align-start'>
                            <v-icon size='44' color='secondary' class='py-2'>assignment</v-icon>
                            <div class="ml-2 h3 grey--text">Orçamentos enviados</div>
                        </div>
                    </div>

                    <span class='font-weight-bold display-1 grey--text'>25</span>
                </v-card>
            </v-col>

                <!-- Info 03 -->
               <v-col cols="12" xs="12" sm='6' md='6' lg="3">
                <!-- Info 01 -->
                <v-card hover class="py-2 pa-5 text-center d-flex justify-space-between align-center" flat>
                    <div class="d-flex flex-column">
                        <div hover class='d-flex flex-column align-start'>
                            <v-icon size='44' class='success-text py-2 font-weight-bold'>check</v-icon>
                            <div class="ml-2 h3 grey--text">Orcamentos aprovados</div>
                        </div>
                    </div>

                    <span class='font-weight-bold display-1 grey--text'>19</span>
                </v-card>
            </v-col>
                <!-- Info 04 -->
              <v-col cols="12" xs="12" sm='6' md='6' lg="3">
                <!-- Info 01 -->
                <v-card hover class="py-2 pa-5 text-center d-flex justify-space-between align-center" flat>
                    <div class="d-flex flex-column">
                        <div hover class='d-flex flex-column align-start'>
                            <v-icon size='44' class='py-2 error-text font-weight-bold'>close</v-icon>
                            <div class="ml-2 h3 grey--text">Projetos recusados</div>
                        </div>
                    </div>

                    <span class='font-weight-bold display-1 grey--text'>10</span>
                </v-card>
            </v-col>           
        </v-row>      

    </v-container>

</div>
</template>

<script>
export default {
    layout: 'proDash',
    data() {
        return {

        }
    },
}
</script>

<style>

</style>
