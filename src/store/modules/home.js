import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    categories: [],
  }),

  getters: {

  },

  mutations: {
    setCategories(state, payload) {
       state.categories = [payload];

    },

    addCategories(state, payload) {
      state.categories.push(payload);
   },

  },

  actions: {
    fetchCategoryDatas({ rootState, commit }) {
      console.log(rootState.user.accessToken)
      axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&limit=5', {
        headers: {
          'Authorization': `Bearer ${rootState.user.accessToken}`
        }
      })
        .then((response) => {
          commit('setCategories', response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    },

    fetchPlaylistDatas({ rootState, commit }) {
      axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&locale=TR&timestamp=2021-10-18T09%3A00%3A00.000Z&limit=10&offset=0', {
        headers: {
          'Authorization': `Bearer ${rootState.user.accessToken}`
        }
      })
        .then((response) => {
          commit('addCategories', response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchPlaylistDatas({ rootState, commit }) {
      axios.get('https://api.spotify.com/v1/browse/featured-playlists?country=TR&locale=TR&timestamp=2021-10-18T09%3A00%3A00.000Z&limit=10&offset=0', {
        headers: {
          'Authorization': `Bearer ${rootState.user.accessToken}`
        }
      })
        .then((response) => {
          commit('addCategories', response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
