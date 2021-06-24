import BaseService from './BaseService';
class ImageService extends BaseService {
  async getImages() {
    const { data } = await this.http.get('/images');
    return data;
  }

  async getImage() {
    const { data } = await this.http.get('/image');
    return data;
  }
}

const imagesService = new ImageService();
export default imagesService;