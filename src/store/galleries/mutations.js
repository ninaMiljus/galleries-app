export const mutations = {
  setGalleries(state, galleries) {
   state.galleries = galleries
   state.numberPerPage = galleries[1]
  },
  setGallery(state, gallery) {
    state.gallery = gallery;
  },
  addGallery(state, payload) {
    state.galleries = payload
  },
  deleteGallery(state, id) {
    state.id = id  
  },
  setSearchTerm(state, searchTerm) {
    state.searchTerm = searchTerm;
  },
  pagination(state, payload) {
    state.pagination = payload;
  },
};