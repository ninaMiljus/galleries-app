import userService from "../../services/UserService";

export const actions = {
  async getUser(store, id) {
    const user = await userService.getUser(id);

    store.commit("setUser", user);
  },
};