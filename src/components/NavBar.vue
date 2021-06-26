<template>
  <div class="nav">
    <div class="nav-box">
        <router-link to="/">Galleries</router-link> |
        <template v-if="isAuthenticated">
          <router-link to="/myGalleries">My Galeries</router-link>
        </template>
    </div>
    <div class="nav-box">
      <input @input="search" placeholder="Search"/> 
    </div>
    <div class="nav-box">
      <template v-if="!isAuthenticated">
        <router-link to="/register">Register</router-link> |
        <router-link to="/login">Login</router-link>
      </template>
      <template v-else>
        <a class="button" @click="logoutUser">Logout</a> 
      </template>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'nav-bar',
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    search(evt) {
      this.setSearchTerm(evt.target.value);
      this.getGalleries();
    },
    ...mapActions('galleries', ['getGalleries']),
    ...mapMutations('galleries', ['setSearchTerm']),
    ...mapActions('auth', ['logout']),
    async logoutUser(){
        await this.logout();
        this.$router.push('/login');
    },
  },
};
</script>
<style scoped>
.nav {
  display: flex;
  padding: 30px;
}
.nav-box {
  flex: 1;
}
.nav a {
  font-weight: bold;
  color: #2c3e50;
}
.nav a.router-link-exact-active {
  color: #42b983;
}
.button {
  cursor: pointer;
}
</style>