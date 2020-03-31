<template>
  <div id="app">
    <div id="nav">
      <a href="#" data-target="slide-out" class="sidenav-trigger">
        <i class="material-icons">menu</i>
      </a>
      <ul id="slide-out" class="sidenav">
        <li
          v-for="(people,i) in peoples"
          :key="i"
          @click="setStorage(people.id)"
        >{{people.name}}</li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
<script>
import M from 'materialize-css';

export default {
  name: 'App',
  mounted() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
    console.log(this.peoples);
  },
  methods: {
    setStorage(id) {
      localStorage.setItem('id_cv', id);
    },
  },
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
