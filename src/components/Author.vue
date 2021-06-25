<template>
  <div>
    <h1>Author:</h1>
    <h3><b>Name:</b>{{this.user.name}}</h3>
    <h3><b>Email:</b>{{this.user.email}}</h3>
    <h3><b>Galleries by this author:</b>
    <div v-for="(gallery, index) in this.user.galleries" :key="index">
      <h4>
        Gallery Name:
        <router-link :to="`/galleries/${gallery.id}`">
          {{ gallery.name }}</router-link>
      </h4>
    <img 
    width="150px"
    height="150px"
    v-bind:src="gallery.images[0].source"
    :key="index"></div></h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapGetters('user', ['user']),
  },
  methods: {
    ...mapActions('user', ['getUser']),
    ...mapActions( 'galleries',['getGalleries'] ),
  },
  async created() {
    await this.getUser(this.id);
  },
};
</script>
<style scoped></style>