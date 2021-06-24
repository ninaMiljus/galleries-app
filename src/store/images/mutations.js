export const mutations = {
  setImages(state, images) {
    state.images = images;
  },
  deleteImage(state, images) {
    state.images = state.deleteImage.filter((i) => i.id !== images.id);
  },
};