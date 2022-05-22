import { createStore } from 'vuex'
import ApiService from './services/ApiService';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      projects: [],
      loadingProgress: 0,
    }
  },
  mutations: {
    updateProjects(state, payload) {
      state.projects = payload;
    },
    updateLoadingProgress(state, payload) {
      state.loadingProgress = payload ?? state.loadingProgress++;
      return state.loadingProgress;
    }
  },
  getters: {
    getProjects: (state) => state.projects,
    getLoadingProgress: (state) => state.loadingProgress
  },
  actions: {
    async fetchProjects({ commit, state }) {
      try {
        let projects = await ApiService.get("project", {
          param: "status",
          equals: "publish",
        })
        await commit('updateProjects', projects)
        return state.projects
      } catch(error) {
        console.log(error);
      }
    }
  }
})

export default store;