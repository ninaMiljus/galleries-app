export const mutations = {
  addComments(state, payload) {
    state.comments.push(payload);
  },
  deleteComment(state, id) {
    state.id = id  
  },
};