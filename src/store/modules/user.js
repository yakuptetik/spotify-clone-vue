import qs from 'qs';
import axios from "axios";

export default {
  namespaced:true,
  state: () => ({
    accessToken: '',
    clientId: '7bb4aa846c88429487b716d2dad1a3cb',
    clientSecret: '98bd8c773a29417ba45a4e6329b23454',
    redirectURI: 'http://localhost:8080/callback',
    scope:'user-read-private user-read-email',

    currentUser: null,

    refreshToken: null,
    expiresAt: 3600000,

    isAuthenticated: false,
  }),

  getters: {

  },

  mutations: {
    setAccessToken(state, payload) {
      state.accessToken = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
  },
// https://api.spotify.com/v1/browse/featured-playlists?country=TR&limit=20
//https://api.spotify.com/v1/browse/featured-playlists?country=TR&locale=TR&timestamp=2021-10-18T09%3A00%3A00.000Z&limit=10&offset=0

  actions: {
    fetchToken({state, commit}) {
      return new Promise((resolve, reject) => {
        try {
          const url = 'https://accounts.spotify.com/api/token';

          const Authorization = `Basic ${window.btoa(`${state.clientId}:${state.clientSecret}`)}`;

          const options = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization,
            },

            params: {
              grant_type: 'client_credentials',
            }
          };

          axios.post(url, null, options)
            .then((response) => {
              commit('setAccessToken', response.data.access_token);
              resolve();
            })
            .catch((error) => {
              console.error(error);
              reject();
            });
        } catch (e) {
          reject();
          console.log(e)
        }
      })
    },

    getAuthorize({ state }) {
      window.location.href = `https://accounts.spotify.com/authorize?${qs.stringify({
        response_type: 'code',
        client_id: state.clientId,
        scope: state.scopes,
        redirect_uri: state.redirectURI,
        state: Date.now(),
      })}`;
    },

    getGuestToken({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          const url = 'https://accounts.spotify.com/api/token';

          const Authorization = `Basic ${window.btoa(`${state.clientId}:${state.clientSecret}`)}`;
          const data = qs.stringify({ grant_type: 'client_credentials' });

          const options = {
            method: 'POST',
            url,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization,
            },
            data,
          };

          axios(options).then((response) => {
            commit('setAccessToken', response.data.access_token);
            axios.defaults.headers.Authorization = `Bearer ${response.data.access_token}`;
            resolve();
          }).catch((error) => {
            console.error(error);
          });
        } catch (e) {
          reject(e);
        }
      });
    },

    getToken({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        try {
          const url = 'https://accounts.spotify.com/api/token';

        //   const data = qs.stringify({
        //     grant_type: 'authorization_code',
        //     redirect_uri: state.redirectURI,
        //     code,
        //  });

        axios.post('https://accounts.spotify.com/api/token', {
          grant_type: 'authorization_code',
          redirect_uri: state.redirectURI,
          code: payload,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });

        } catch (e) {
          reject(e);
        }
      });
    },
  }
}
