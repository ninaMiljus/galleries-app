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
                     <b-carousel-slide v-for="(image,index) in gallery.images" :key="index"   :img-src="image.source" >
                     </b-carousel-slide>
         </b-carousel>
        </div>
 </div>
 <button class="btn btn-primary" style="marginBottom: 15px" v-if="currentSize <= numberPerPage" @click="loadMoreGalleries">Load More</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'galleries',
  data() {
    return {
      currentSize: 10
    }
  },
  computed: {
    ...mapGetters('galleries', ['galleries'] ),
    ...mapGetters( 'galleries', ['numberPerPage'] ),
  },
  methods: {
    ...mapActions( 'galleries',['getGalleries'] ),
    ...mapActions( 'images',['getImages'] ), 

    loadMoreGalleries() {
      this.currentSize += 10
      this.allGalleries({'pagination': this.currentSize})
    },
  },
  async created() {
    await this.getGalleries();
    if (this.galleries.length === 0) {
      alert("There are no galleries. Make one to start!");
    }
  },
};
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