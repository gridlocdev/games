<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand>
        <b-link :to="{ path: '/'}">GridlocDev</b-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ path: '/'}">Home</b-nav-item>
          <b-nav-item :to="{ path: '/About'}">About</b-nav-item>
          <b-nav-item-dropdown text="Projects" right>
            <b-dropdown-item :to="{ path: '/CubeSlide'}">CubeSlide</b-dropdown-item>
            <b-dropdown-item :to="{ path: '/TextAdventure'}">TextAdventure</b-dropdown-item>
            <b-dropdown-item disabled>Coming Soon...</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
    <div id="footer">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <b-link href="https://vuejs.org/">VueJS</b-link>
          </b-col>
          <b-col>
            <b-link href="https://pages.github.com/">GitHub Pages</b-link>
          </b-col>
          <b-col>
            <b-link href="https://unity.com/">Unity Game Engine</b-link>
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
*:focus {
  outline: none;
}

#footer {
  border-top: 1px solid lightgrey;
  width: 100%;
  padding: 5% 0%;
}

#footer a {
  color: rgba(0, 0, 0, 0.75);
  font-style: italic;
}
#footer a:hover {
  color: rgba(0, 0, 0, 0.5);
  transition: 0.2s;
}
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

.navbar a {
  color: rgba(0, 0, 0, 0.75);
}
.navbar a:hover {
  text-decoration: none;
}

.button:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 16px 0px,
    rgba(0, 0, 0, 0.19) 0px 6px 20px 0px !important;
}
:not(.navbar-toggler)button:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 16px 0px,
    rgba(0, 0, 0, 0.19) 0px 6px 20px 0px !important;
}
</style>
