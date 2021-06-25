import Vue from 'vue';
import Vuex from 'vuex';
import galleries from './galleries';
import auth from './auth';
import images from './images';
import user from './user'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    galleries,
    auth,
    images,
    user
  },
});