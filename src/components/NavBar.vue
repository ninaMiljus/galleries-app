<template>
  <div class="nav">
    <div class="nav-box">
        <router-link to="/">Galleries</router-link> |
        <template v-if="isAuthenticated">
          <router-link to="/myGalleries">My Galeries</router-link>
        </template>
    </div>
    <div class="nav-box">
      <form class="form-inline" @handleSearchText="setSearchText">
        <input class="form-control" type="search" placeholder="Search galleries..." v-model="search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
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
  data() {
    return {
      search: ''
    }   
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapGetters('galleries', ['searchTerm'])
  },
  methods: {
    ...mapActions('galleries', ['getGalleries']),
    ...mapMutations('galleries', ['setSearchTerm']),
    ...mapActions('auth', ['logout']),

    async logoutUser(){
        await this.logout();
        this.$router.push('/login');
    },

    setSearchText(search) {
      this.searchText = search;
      this.getGalleries({'searchText': this.searchText})
    },
    
    handleSearchText() {
      this.$emit('handleSearchText', this.search)
    }
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