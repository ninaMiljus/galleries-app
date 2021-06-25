<template>
  <div>
    <h1>Author:</h1>
    <h3><b>Name:</b>{{this.user.name}}</h3>
    <h3><b>Email:</b>{{this.user.email}}</h3>
    <h3><b>Galleries by this author:</b>
    <div v-for="(gallery, index) in this.user.galleries" :key="index">{{ gallery.name }} {{gallery.images}}</div></h3>
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
    ...mapActions( 'gallerie',['getGalleries'] ),
  },
  async created() {
    await this.getUser(this.id);
  },
};
</script>
<style scoped></style>