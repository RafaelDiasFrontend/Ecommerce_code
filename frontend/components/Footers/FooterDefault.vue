<template>
<div class='footer'>
    <v-container class='footer-default-grid mt-5 mb-custom'>
        <div class='col-footer mb-3'>
            <v-container>
                <!-- <img src="~/assets/imagens/integrace_logo-grey.svg" alt="logo_default" class='logo-default'> -->
                <div class='h2'>Logo</div>
                <!-- <img class='custom-size-logo' src="~/assets/imagens/logos/hospital_casa_De_saude_logo_dark_vazado.svg" alt='Loco Casa de Saúde Santos'> -->
            </v-container>
        </div>
        <div class='col-footer'>
            <!-- Santos -->
            <v-container>
                <!-- <img class='custom-size-logo' src="~/assets/imagens/logos/hospital_casa_De_saude_logo_dark_vazado.svg" alt='Loco Casa de Saúde Santos'> -->

                <p class='pt-1'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
            </v-container>
            <!-- Praia Grande -->
            <v-container>
                <!-- <img class='custom-size-logo' src="~/assets/imagens/logos/hospital_casa_De_saude_logo_dark_vazado.svg" alt='Loco Casa de Saúde Santos'> -->

                <p class='pt-1'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
            </v-container>
        </div>
        <!-- Coluna 03 -->
        <div class='col-footer'>
            <ul class='footer-menu'>
                <div class='h3 gray bold'>Links</div>
                <li class='mt-2'>
                    <nuxt-link to='/'>Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to='/profissionais'>Profissionais</nuxt-link>
                </li>
                <li>
                    <nuxt-link to='/empresas'>Empresas</nuxt-link>
                </li>
                <li>
                    <nuxt-link to='/contato'>Registrar Profissional</nuxt-link>
                </li>
                <li>
                    <nuxt-link to='/contato'>Registrar Empresa</nuxt-link>
                </li>
                <li>
                    <nuxt-link to='/contato'>Login</nuxt-link>
                </li>
            </ul>
        </div>
        <!-- Coluna 04 -->
        <div class='col-footer'>
            <div class='mb-4 h3 gray bold'>Curta nossa página</div>

          
           

        </div>
    </v-container>
    <div class='copyright h3 pt-5 center'>Integrace. Todos os direitos reservados</div>
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.footer {
    position: static;
    font-family: 'Lato', sans-serif;
    color: var(--primary-color);
    background-position: top;
    padding-top: 4.4em;
    background: transparent;
}

.bold {
    font-weight: 600;
}

.footer-default-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 3em;
    width: 90%;
    max-width: 1380px;
}

.footer-end {
    line-height: 1.312rem;
    font-size: 0.90rem;
}

.footer-menu li a {
    line-height: 1.89rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: rgba(56, 56, 56, 0.918)
}

.footer-menu li a:hover {
    margin-bottom: 10px;
    transition: .3s;
    color: rgba(56, 56, 56, 0.918);

}

.logo-default {
    padding-top: 5px;
    width: 265px;
    height: auto;
}

.css-font {
    font-family: 'Lato', sans-serif;
}

.h3-custom {
    margin-left: 10px;
    font-size: 1rem;
    line-height: 1.45em;
    max-width: 250px;
    color: var(--primary-color);
}

.copyright {
    position: absolute;
    margin: 0 auto;
    bottom: 8px;
    left: 0;
    right: 0;
    color: var(--primary-color);
    ;
}

.mt-custom {
    padding-top: 11px;
}

.mb-custom {
    margin-bottom: 7%;
}

.custom-size-logo {
    width: 200px;
    height: auto;
}

.pt-custom {
    padding-top: 5.3em;
}

.love {
    color: var(--primary-color);
}

@media only screen and (max-width: 900px) {
    .footer-default {
        padding: 2em 0;
        background-color: rgb(241, 241, 241);
    }

    .footer-default-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 3em;
    }
}

@media only screen and (max-width: 600px) {
    .footer-default {
        padding: 1.7em 0;
        background-color: rgb(241, 241, 241);
    }

    .footer-default-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 3em;
        width: 90%;
        max-width: 380px;
    }
}
</style>
