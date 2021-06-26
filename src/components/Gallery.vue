<template>
    <div v-if="gallery">
        <h1>Gallery</h1>
        <h2>Gallery: {{gallery.name}}</h2>
        <h4>Author: <router-link :to="{ name: 'author', params: {id: gallery.user.id }}">{{gallery.user.name}}</router-link></h4>
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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Comments: </h2>
        <div v-for="(comment) in gallery.comments" :key="comment.id">
            {{ comment.text }} 
            {{comment.created_at}}
            <template v-if="isAuthenticated">
              <button type="button" @click="deleteComment(comment.id)" class="btn btn-danger">Delete Comment</button>
            </template>
        </div>
        <template v-if="isAuthenticated">
            <form @submit.prevent="onSubmit">
            Add coment:
            <br/>
            <textarea
                class="text"
                type="text"
                v-model="comment.text"
                name="body"
                id="body"
                cols="50"
                rows="3"
                required
            ></textarea>
            <br/>
            <button type="submit" class="btn btn-primary">
            Add Comment
            </button>
            </form>
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'gallery',
   data() {
    return {
      comment: {
        gallery_id: this.id,
        text: "",
      },
      comments: [],
    };
  },
  props: ["id"],
  computed: {
    ...mapGetters('galleries', ['gallery']),
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapGetters('comment', ['comments']),
    ...mapGetters( 'auth', ['activeUser']),
  },
  methods: {
    ...mapActions('galleries', ['getGallery']),
    ...mapActions('comment', ['getCommentsForGallery']),
    ...mapActions('comments', ['deleteComment']),
    ...mapActions('comments', ['addComment']),
    ...mapActions('auth', ['getActiveUser']),

    async deleteComment(){
      await this.deleteComment(this.comment.id);
      this.$router.push('/gallery');
    },

    async onSubmit() {
      await this.addComment(this.comment);
      this.comments = await this.getCommentsForGallery(this.id);
      this.comment.text = "";
    },
  },

  async created() {
    await this.getGallery(this.id);
    await this.getCommentsForGallery(this.id);
    await this.$store.dispatch("auth/getActiveUser");
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