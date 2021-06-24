import imagesService from '../../services/ImagesService'; 

export const actions = {
  async getImages(store) {
    const images = await imagesService.getImages(store.state.images);
    store.commit('setImages', images);
  },
  async deleteImage(store, image) {
    await imagesService.deleteImage(image.id);
    store.commit('deleteImage', image);
  },
};