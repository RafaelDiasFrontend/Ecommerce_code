<template>
<section id='blog'>
    <h2 class='text-center h2-title pb-2'>Fique por dentro das novidades</h2>
    <h3 class='text-center h4 gray mb-custom pb-5'>Confira tudo que acontece na integrace no nosso blog</h3>
    <v-container>
        <v-row class='df-width d-flex justify-space-between' >
            <v-col cols='12' xs='12' md='3' v-for='blog in blogSection' :key="blog.id" router>               
                    <v-card hover class="mx-auto" max-width="380">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

                        <v-card-title class='center blog-title'>
                            {{  blog.title  }}
                        </v-card-title>

                        <v-card-subtitle>
                             
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn text>Share</v-btn>

                            <v-btn color="purple" text>
                                Explore
                            </v-btn>

                            <v-spacer></v-spacer>                           
                        </v-card-actions>                     
                    </v-card>               
            </v-col>
        </v-row>
    </v-container>
</section>
</template>

<script>
export default {
    data() {
        return {
            blogSection: [{
                    title: 'Como enviar um orçamento',
                    route: '',
                    thumbnail: ''
                },
                {
                    title: 'Como enviar um orçamento',
                    route: '',
                    thumbnail: ''
                },
                {
                    title: 'Como enviar um orçamento',
                    route: '',
                    thumbnail: ''
                },
                {
                    title: 'Como enviar um orçamento',
                    route: '',
                    thumbnail: ''
                },
            ]
        }
    }
}
</script>


<style scoped>



</style>