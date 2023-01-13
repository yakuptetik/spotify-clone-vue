import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },

  {
    path: '/search',
    name: 'Search',
    component: () => import( '../views/AboutView.vue'),
  },
  {
    path: '/collection',
    name: 'Collection',
    meta: {
      isCollectionsPage: true,
    },
    component: () => import('../views/BookmarkView.vue'),
    children: [
      {
        path: 'playlist',
        name: 'CollectionPlaylist',
        component: () => import('../views/Collections/Playlist.vue'),
      },
      {
        path: 'podcasts',
        name: 'Podcasts',
        component: () => import('../views/Collections/PodcastsPage.vue'),
      },
      {
        path: 'artists',
        name: 'Artists',
        component: () => import('../views/Collections/ArtistsPage.vue'),
      },
      {
        path: 'albums',
        name: 'Albums',
        component: () => import('../views/Collections/AlbumsPage.vue'),
      },
      {
        path: 'tracks',
        name: 'CollectionTracks',meta: {
          isCollectionsPage: false,
        },
        component: () => import('../views/Collections/TracksPage.vue'),
      },
      {
        path: 'episodes',
        name: 'CollectionEpisodes',meta: {
          isCollectionsPage: false,
        },
        component: () => import('../views/Collections/EpisodesPage.vue'),
      }
    ]
  },
  {
    path: '/playlist/:id',
    name: 'Playlists',
    component: () => import( '../views/PlaylistView.vue'),
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import( '../views/DownloadPage.vue'),
  },
  {
    path: '/artist',
    name: 'Artist',
    component: () => import( '../views/ArtistView.vue'),
  },
  {
    path: '/user/31',
    name: 'User',
    component: () => import( '../components/ProfilePage.vue'),
  },
  {
    path: '/user/31/following',
    name: 'Following',
    component: () => import( '../components/FollowsPage.vue'),
  },
  {
    path: '/callback',
    name: 'Callback',
    component: () => import( '../components/CallBack.vue'),
    props: (route) => ({ foo: route.query.foo }),
    props: {
      foo: {
        type: String,
        default: null,
      }
    },
  },




];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
