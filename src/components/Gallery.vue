<template>
    <div v-if="gallery">
        <h1>Gallery</h1>
        <h2>Gallery: {{gallery.name}}</h2>
        <h4>Author: <router-link :to="{ name: 'authors', params: {id: gallery.user.id }}">{{gallery.user.name}}</router-link></h4>
        <div class="description">Description: {{gallery.description}}</div>
        <p>Created at: {{gallery.created_at}}</p>
                <div class="card-body" >
              <button type="button" @click="editGallery(gallery.id)"  v-if="isUserAuthenticated && gallery.user.id == loggedUser.id" class="btn btn-success"><router-link :to="{ name: 'edit-gallery', params: {id: gallery.id }}">Edit Gallery</router-link></button>
                <button type="button" @click="deleteGallery(gallery.id)"  v-if="isUserAuthenticated && gallery.user.id == loggedUser.id" class="btn btn-danger">Delete Gallery</button>
          </div>
        <div>
             <b-carousel
                id="carousel-1"
                :interval="4000"
                controls
                indicators
                background="#ABABAB"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                >
                     <b-carousel-slide v-for="(image,index) in gallery.images" :key="index"   :img-src="image.source">
                     </b-carousel-slide>
         </b-carousel>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'gallery',
  props: ["id"],
  computed: {
    ...mapGetters('galleries', ['gallery']),
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('galleries', ['getGallery']),
  },
  async created() {
    await this.getGallery(this.id);
  },
};
</script>
<style scoped>
#carousel-1{
    width: 400px;
    height: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>