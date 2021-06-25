import commentsService from "../../services/CommentsService";

export const actions = {
  async addComment(store, text) {
    const { data } = await commentsService.addComment(text);

    store.commit("addComments", data);
  },

  async getCommentsForGallery(store, id){
    return await commentsService.getComments(id);
  },

  async deleteComment(store, id) {
    const data = await commentsService.deleteComment(id);

    return data;
  },
};