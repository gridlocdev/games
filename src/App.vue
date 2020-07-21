<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>GridlocDev</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ path: '/'}">Home</b-nav-item>
          <b-nav-item :to="{ path: '/About'}">About</b-nav-item>
          <b-nav-item-dropdown text="Games" right>
            <b-dropdown-item :to="{ path: '/CubeSlide'}">CubeSlide</b-dropdown-item>
            <b-dropdown-item disabled>Coming Soon...</b-dropdown-item>
            <b-dropdown-item disabled>Coming Soon...</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
    <div id="footer" style="width: 100%; margin: 5% 0% 0%; padding: 10% 0%;background-color:grey;">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <b-link>thing</b-link>
          </b-col>
          <b-col>
            <b-link>thing</b-link>
          </b-col>
          <b-col>
            <b-link>thing</b-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import ScrollTo from "vue-scrollto";
import Animation from "animate.css";

Vue.use(BootstrapVue);
Vue.use(ScrollTo);
Vue.use(Animation);

export default {
  name: "Home",
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
