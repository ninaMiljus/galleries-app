<template>
  <div>
    <br />
    <h1>Galleries</h1>
    <br />
    <div v-for="(gallery, index) in galleries" :key="index">
      <h4>
        Gallery Name:
        <router-link :to="`/galleries/${gallery.id}`">
          {{ gallery.name }}</router-link>
      </h4>
      <h5>
        Author: 
        <router-link :to="{ name: 'author', params: {id: gallery.user.id }}">
          {{gallery.user.name}}</router-link>
      </h5>
    <h5>Images</h5>
      <img 
        width="150px"
        height="150px"
        v-bind:src="gallery.images.source"
        :key="index"
      >
    <div class="description">Description: {{gallery.description}}</div>
     <p>Created at: {{gallery.created_at}}</p>
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
                     <b-carousel-slide v-for="(image,index) in gallery.images" :key="index"   :img-src="image.source" alt="Card image cap" >
                     </b-carousel-slide>
         </b-carousel>
        </div>
 </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: 'galleries',
  computed: {
    ...mapGetters('galleries', ['galleries'] ),
  },
  methods: {
    ...mapActions( 'galleries',['getGalleries'] ),
    ...mapActions( 'images',['getImages'] ),  //('galleries', ['setSearchTerm'])
  },
  async created() {
    await this.getGalleries();
  },
};
</script>
<style scoped>
#carousel-1{
    width: 200px;
    height: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>