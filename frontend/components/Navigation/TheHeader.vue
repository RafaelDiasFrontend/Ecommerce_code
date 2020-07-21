<template>
  <div class="header-container pt-1">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="d-flex align-center">
        <a href="/">
          <!-- <img src="~/assets/imagens/integrace_logo.svg" alt="logo_default" class="logo-default" /> -->
          <div class="h2 black--text">Logo</div>
        </a>
      </div>

      <div class="spacer"></div>
      <div class="navigation-items mt-2">
        <ul class="flex-ul">
          <li>
            <nuxt-link class="pr-1" to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link class="pr-1" to="/contato">Contato</nuxt-link>
          </li>
          <li>
            <!-- Registrar -->
            <v-menu class="pr-1" offset-y open-on-hover bottom>
              <template v-slot:activator="{ on }">
                <v-btn class="grey--text btn-login custom-link pr-5 pl-5" v-on="on">Categorias</v-btn>
              </template>

              <v-list>
                <nuxt-link
                  :to="{ name: 'categorias-slug', params: { slug: item.slug } }"
                  v-for="item in categories"
                  :key="item.slug"
                >
                  <v-list-item>
                    <v-list-item-title class="grey--text">{{ item.name }}</v-list-item-title>
                  </v-list-item>
                </nuxt-link>
              </v-list>
            </v-menu>
          </li>
          <template v-if="!$auth.loggedIn">
            <li>
              <!-- Login -->
              <v-btn tile dark v-on="on" class="btn-login-2 pr-5 pl-5">
                <nuxt-link to="/login" class="white--text">Login</nuxt-link>
              </v-btn>
            </li>
          </template>
          <template v-else>
            <!--Orders -->
            <li>
              <a to="/login" class="font-weight-bold">Pedidos</a>
            </li>
            <li>
              <a to="/login" class="font-weight-bold">{{ $auth.user.name }}</a>
            </li>
            <li>
              <!-- Cart -->
              <nuxt-link :to="{ name: 'carrinho'}">
                <v-badge
                  :value="cartCount"
                  color="primary"
                  :content="cartCount"
                  right
                  transition="slide-x-transition"
                >
                  <v-icon color="primary">shopping_cart</v-icon>
                </v-badge>
              </nuxt-link>
              <a to="/login" class="white--text"></a>
            </li>
          </template>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  },

  data() {
    return {
      on: null
    };
  }
};
</script>

<style scoped>
.btn-login {
  font-family: var(---font);
  text-transform: initial;
  font-weight: 700;
  border-radius: 100px;
  background-color: var(--secondary-color) !important;
  border-color: var(--secondary-color);
}

.btn-login-2 {
  font-family: var(--primary-font);
  text-transform: initial;
  font-weight: 700;
  border-radius: 100px;
  background-color: var(--primary-color) !important;
  border-color: #fff !important;
  color: #fff !important;
}

.flex-logo {
  display: flex;
  align-items: center;
}

.logo-default {
  width: 243px;
  height: auto;
}

.header-container {
  height: 60px;
  display: grid;
  align-items: center;
}

.nuxt-link,
a {
  font-family: "Poppins", sans-serif;
  text-transform: none;
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  font-weight: 400;
  color: var(--primary-color);
}

.custom-link {
  font-family: "Poppins", sans-serif;
  text-transform: none;
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  font-weight: 400;
  color: #fff !important;
}

.the-header {
  font-size: 2rem;
  width: 85%;
  height: 72px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: transparent;
  z-index: 2;
  position: relative;
  margin: 0 auto;
  margin-top: 14px;
}

.logo {
  font-size: 1.2rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}

.logo a {
  text-decoration: none;
  color: white;
}

.flex-ul {
  display: flex;
  align-items: center;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #fff !important;
}

.application a:hover {
  color: #fff;
}

.btn {
  border-radius: 100px;
  padding: 12px 30px;
}

li {
  list-style: none;
}

ul {
  font-family: "Lato", sans-serif;
  font-size: 0;
  list-style-type: none;
}

ul li {
  font-size: 1rem;
  font-weight: 400;
  display: inline-block;
  padding: 13px;
  position: relative;
  padding-left: 5px !important;
}

ul li ul {
  display: none;
}

ul li:hover {
  cursor: pointer;
}

ul li:hover ul {
  display: block;
  left: 0;
  position: absolute;
}

ul li:hover ul li {
  display: block;
  visibility: visible;
  transition-delay: 0.1s;
  transition: 0.1s;
  line-height: 2px;
  font-size: 0.9rem;
}

ul li:hover ul li span {
  float: right;
  padding: 2px 5px;
  text-align: center;
  font-size: 0.8rem;
  border-radius: 3px;
  visibility: visible;
  transition-delay: 0.3s;
  transition: 0.3s;
}

.btn-custom {
  padding: 0.95em 2.3em;
  text-transform: none;
  border-radius: 30px;
}

.btn-custom {
  border-radius: 5px;
  background: transparent;
  font-size: 0.8rem !important;
  border: 2px solid rgba(216, 216, 216, 0.849);
}

.btn-custom:hover {
  background: var(--primary-color);
  transition-delay: 0.1s;
  transition-duration: 0.6s;
  border: 2px solid var(--primary-color);
}

@media only screen and (max-width: 420px) {
  .nuxt-link,
  a {
    font-size: 0.8rem;
  }

  ul li {
    font-size: 0.8rem;
    padding: 8px;
    position: relative;
    padding-left: 5px !important;
  }

  ul li ul {
    display: none;
  }

  .btn-custom {
    padding: 0.92em 2em;
    text-transform: none;
    border-radius: 30px;
  }

  .btn-custom {
    border-radius: 5px;
    background: transparent;
    font-size: 0.59rem !important;
    border: 2px solid rgb(238, 238, 238);
  }

  .logo-default {
    padding-top: 5px;
    width: 195px;
    height: auto;
  }
}
</style>
