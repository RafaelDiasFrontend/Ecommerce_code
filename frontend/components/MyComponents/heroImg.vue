<template>
<section id='hero-img' class=''>
    <h1 class='pt-5 white--text font-weght-bold title'>I N T E G R A C E</h1>
    <v-container fluid>
        <v-row class='d-flex align-end'>
            <v-col cols="12" xs="12" sm='6' md='6' lg="3">
                <nuxt-link to="login">
                    <p class='text-center white--text'>
                        A D M - L O G I N
                    </p>
                </nuxt-link>
            </v-col>
            <v-col cols="12" xs="12" sm='6' md='6' lg="3">
                <nuxt-link to="registro">
                    <p class='text-center white--text'>
                        A D M - R E G I S T E R
                    </p>
                </nuxt-link>
            </v-col>
            <v-col cols="12" xs="12" sm='6' md='6' lg="3">
                <nuxt-link class='white--text' to="login-2">
                    <p class='text-center white--text'>
                        P R O F - L O G I N
                    </p>
                </nuxt-link>
            </v-col>
            <v-col cols="12" xs="12" sm='6' md='6' lg="3">
                <nuxt-link class='white--text' to="registro-2">
                    <p class='text-center white--text'>
                        P R O F - R E G I S T E R
                    </p>
                </nuxt-link>
            </v-col>
        </v-row>
    </v-container>
</section>
</template>

<style scoped>
#hero-img {
    height: 59vh;

}
</style>
