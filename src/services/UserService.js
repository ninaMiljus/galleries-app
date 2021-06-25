import BaseService from "./BaseService";

class UserService extends BaseService {
  async getUser(id) {
    const { data } = await this.http.get(`/user/${id}`);
    
    return data;
  }
}

const userService = new UserService();
export default userService;