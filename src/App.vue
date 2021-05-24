<template>
  <div id="nav">
    <router-link to="/"><span class="text">Home </span>| </router-link>
    <router-link v-if="Object.keys(data).length == 0" to="/login"
      ><span class="text">Login</span> |
    </router-link>
    <router-link v-if="Object.keys(data).length == 0" to="/register"
      ><span class="text">Register</span></router-link
    >
    <router-link v-if="Object.keys(data).length != 0" to="/profile"
      ><span class="text">Profile</span> |</router-link
    >
    <a v-if="Object.keys(data).length != 0" @click="logout"
      ><span class="text cursor-pointer"> Logout</span></a
    >
  </div>
  <router-view />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["data"]),
  },
  methods: {
    ...mapActions(['logout'])
  }
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

#nav a:hover .text {
  color: #42b983;
}

#nav a.router-link-exact-active .text {
  color: #42b983;
}
</style>
