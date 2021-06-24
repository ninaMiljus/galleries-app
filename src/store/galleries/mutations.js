export const mutations = {
  setGalleries(state, galleries) {
    state.galleries = galleries;
  },
  deleteGallery(state, gallery) {
    state.galleries = state.deleteGallery.filter((g) => g.id !== gallery.id);
  },
  setSearchTerm(state, searchTerm) {
    state.searchTerm = searchTerm;
  },
};