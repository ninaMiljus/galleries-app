<template>
  <div>
    <br />
    <h1>Galleries</h1>
    <br />
    <div v-for="(gallery, index) in galleries" :key="index">
      <h3>
        Gallery Name:
        <router-link :to="`/galleries/${gallery.id}`">
          {{ gallery.name }}</router-link>
      </h3>

    <div class="description">Description: {{gallery.description}}</div>
     <p>Created_at: {{gallery.created_at}}</p>
        <div>
             <b-carousel
                id="carousel-1"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="200"
                img-height="200"
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
    ...mapActions( 'images',['getImages'] ), 
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