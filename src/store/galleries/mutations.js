export const mutations = {
  setGalleries(state, galleries) {
    state.galleries = galleries;
  },
  setGallery(state, gallery) {
    state.gallery = gallery;
  },
  addGallery(state, payload) {
    state.galleries = payload
  },
  deleteGallery(state, gallery) {
    state.galleries = state.deleteGallery.filter((g) => g.id !== gallery.id);
  },
  setSearchTerm(state, searchTerm) {
    state.searchTerm = searchTerm;
  },
};