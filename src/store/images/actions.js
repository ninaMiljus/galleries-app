import imagesService from '../../services/ImagesService'; 

export const actions = {
  async getImages(store) {
    const images = await imagesService.getImages(store.state.images);
    store.commit('setImages', images);
  },
  async getImage(store) {
    const image = await imagesService.getImage(store.state.image);
    store.commit('setImage', image);
  },
  async deleteImage(store, image) {
    await imagesService.deleteImage(image.id);
    store.commit('deleteImage', image);
  },
};