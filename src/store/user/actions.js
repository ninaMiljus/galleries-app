import userService from "../../services/UserService";

export const actions = {
  async getUser(store, id) {
    const data = await userService.getUser(id);

    store.commit("setUser", data);
  },
};