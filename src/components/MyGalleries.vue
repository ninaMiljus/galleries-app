<template>
   <div>
    <h1>My galleries: </h1>
    <h3><div v-for="(gallery, index) in this.user.galleries" :key="index">
      <b>Name: </b>{{ gallery.name }} 
      <br>
      <b>Description:</b>{{ gallery.description }} 
      <br>
      <b>Created at: </b>{{ gallery.created_at }}
      <br>
      <img 
    width="150px"
    height="150px"
    v-bind:src="gallery.images.source"
    :key="index"></div></h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters('auth', ['activeUser']),
    ...mapGetters('user', ['user'] ),
  },
  methods: {
    ...mapActions('auth', ['getActiveUser']),
    ...mapActions('user', ['getUser']),
    ...mapActions( 'galleries',['getGalleries']),
  },
    async created() {
    await this.getActiveUser();
    await this.getUser(this.user.id);
  },
 
};
</script>

<style scoped></style> 