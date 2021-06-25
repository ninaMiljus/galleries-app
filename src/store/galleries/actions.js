import galleriesService from '../../services/GalleriesService';

export const actions = {
  async getGalleries(store) {
    const galleries = await galleriesService.getGalleries(store.state.searchTerm);
    store.commit('setGalleries', galleries);
  },
  async getGallery(store, id) {
    const gallery = await galleriesService.getGallery(id);
    store.commit("setGallery", gallery);
  },
  async addGallery(state) {
    const data = await galleriesService.createGallery();
    state.commit('addGallery', data);

  },
  async deleteGallery(store, gallery) {
    await galleriesService.deleteGallery(gallery.id);
    store.commit('deleteGallery', gallery);
  },
};