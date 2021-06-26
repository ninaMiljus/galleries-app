<template>
   <div>
    <h1>My galleries: </h1>
    <h3><div v-for="(gallery, index) in this.user.galleries" :key="index">
      <b>Name: </b>
      <router-link :to="`/galleries/${gallery.id}`">
          {{ gallery.name }}</router-link>
      <br>
      <b>Description:</b>
      {{ gallery.description }} 
      <br>
      <b>Created at: </b>
      {{ gallery.created_at }}
      <br>
      <div>
             <b-carousel
                id="carousel-1"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                >
                     <b-carousel-slide v-for="(image,index) in gallery.images" :key="index"   :img-src="image.source" >
                     </b-carousel-slide>
         </b-carousel>
        </div>
        <br/>
        <template v-if="isAuthenticated">
          <button type="button" @click="deleteGallery(gallery.id)" class="btn btn-danger">Delete Gallery</button>
        </template>
      </div></h3>               
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
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapGetters('user', ['user'] ),
    ...mapGetters('galleries', ['id'])
  },
  methods: {
    ...mapActions('auth', ['getActiveUser']),
    ...mapActions('user', ['getUser']),
    ...mapActions( 'galleries',['getGalleries']),
    ...mapActions( 'galleries',['deleteGallery']),

    async deleteGallery(){
      await this.deleteGallery(this.gallery.id);
      this.$router.push('/myGalleries');
    }
  },
    async created() {
    await this.getActiveUser();
    await this.getUser(this.activeUser.id);
    await this.getGalleries();
  },

}
</script>

<style scoped>
#carousel-1{
    width: 200px;
    height: 150px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style> 