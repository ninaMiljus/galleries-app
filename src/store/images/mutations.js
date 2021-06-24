export const mutations = {
  setImages(state, images) {
    state.images = images;
  },
  setImage(state, image) {
    state.image = image;
  },
  deleteImage(state, images) {
    state.images = state.deleteImage.filter((i) => i.id !== images.id);
  },
};