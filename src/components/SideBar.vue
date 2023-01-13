
<script setup>
  import { ref } from 'vue';
  import IconBase from '@/components/icons/IconBase.vue';
  import HomeIcon from '@/components/icons/HomeIcon.vue';
  import HomeIcon2 from '@/components/icons/HomeIcon2.vue';
  import SearchIcon from '@/components/icons/SearchIcon.vue';
  import SearchIcon2 from '@/components/icons/SearchIcon2.vue';
  import BooksIcon from '../components/icons/BooksIcon.vue';
  import BooksIcon2 from '../components/icons/BooksIcon2.vue';
  import LogosIcon from '../components/icons/LogosIcon.vue';
  import PlaylistIcon from '../components/icons/PlaylistIcon.vue';
  import LikesIcon from '../components/icons/LikesIcon.vue';
  import DownloadIcon from '../components/icons/DownloadIcon.vue';
  import PlaylistItems from '../components/PlaylistItems.vue';
  import MyPartsIcon from './icons/MyPartsIcon.vue';


  const home = "Ana sayfa"
  const search = "Ara"
  const books = "Kitaplığın"
  const Playlist = "Çalma Listesi Oluştur"
  const like = "Beğenilen Şarkılar"

  const items = ref([{title: 'çalma listem', to: '123'}, { title: 'çalma listem2', to: '1223'}]);

</script>

<template>
  <div class="w-[218px] min-w-[250px] h-full pt-6 bg-black">
    <div class="h-[calc(100%-40px)] px-6 text-3xl text-white">
      <div class="cursor-pointer text-white">
        <IconBase :width="131" :height="40" viewBox="0 0 1134 340">
          <LogosIcon />
        </IconBase>
      </div>

      <div>
        <router-link :to="{ name: 'Home'}" exact active-class="!opacity-100"
          class="mt-8 cursor-pointer mb-4 flex items-center justify-items-center text-sm opacity-60 hover:opacity-80">
          <IconBase class="opacity-60" :width="24" :height="24">
            <component :is="$route.name === 'Home' ? HomeIcon : HomeIcon2" />
          </IconBase>

          <p class="ml-4">{{home}}</p>
        </router-link>

        <router-link @click="searchBar = !searchBar" to="/search" active-class="!opacity-100"
          class="flex cursor-pointer mb-4 items-center justify-items-center text-sm opacity-60  hover:opacity-80">
          <IconBase class="opacity-60" :width="24" :height="24">
            <component :is="$route.name === 'Search' ? SearchIcon2 : SearchIcon" />
          </IconBase>
          <p class="ml-4"> {{search}}</p>
        </router-link>

        <router-link :to="{ name: 'CollectionPlaylist' }"
          :class="$route.meta.isCollectionsPage ? 'opacity-100': 'opacity-60'"
          class="flex cursor-pointer items-center justify-items-center  text-sm  hover:opacity-80">
          <IconBase class="opacity-60" :width="24" :height="24">
            <component :is="$route.meta.isCollectionsPage ? BooksIcon2 : BooksIcon" />
          </IconBase>
          <p class="ml-4">{{books}}</p>
        </router-link>
      </div>


      <div
        class="flex  cursor-pointer text-[14px] items-center justify-items-center mt-9 mb-2 hover:opacity-80 opacity-60">
        <div
          class="bg-[#fff]  text-black w-[24px] h-[24px] flex  pl-[6px] items-center justify-items-center rounded-sm">
          <IconBase viewBox="0 0 16 16" :width="12" :height="12">
            <PlaylistIcon />
          </IconBase>
        </div>

        <p class="pl-4 truncate">{{Playlist}}</p>
      </div>


      <router-link :to="{ name: 'CollectionTracks' }" active-class="!opacity-100"
        class="flex cursor-pointer text-sm items-center justify-items-center  mb-4 hover:opacity-80 opacity-60">
        <div
          class="bg-[linear-gradient(135deg,#450af5,#c4efd9)] text-white w-[24px] h-[24px] flex  pl-[6px] items-center justify-items-center rounded-sm">
          <IconBase viewBox="0 0 16 16" :width="12" :height="12">
            <LikesIcon />
          </IconBase>
        </div>
        <p class="ml-4">{{like}}</p>
      </router-link>

      <router-link :to="{ name: 'CollectionEpisodes' }" active-class="!opacity-100"
        class="flex cursor-pointer text-sm items-center justify-items-center  mb-4 hover:opacity-80 opacity-60">
        <div
          class="bg-[#296551]  text-[#64d762] w-[24px] h-[24px] flex  pl-[6px] items-center justify-items-center rounded-sm">
          <IconBase viewBox="0 0 16 16" :width="12" :height="12">
            <MyPartsIcon />
          </IconBase>
        </div>
        <p class="ml-4">Bölümlerin</p>
      </router-link>

      <hr class="font-thin w-full  mt-4 opacity-25  border-[#b2b2b2]">

      <div class="h-[calc(100%-300px)] overflow-y-auto">
        <PlaylistItems   v-for="item in items" :key="`${item.to} playlist`" :to="item.to" :title="item.title" />
      </div>
    </div>

    <router-link :to="{ name: 'Download' }"
      class="items-center cursor-pointer  text-white justify-center  hover:opacity-100 opacity-60 flex">
      <div class="flex  items-center justify-items-center">
        <IconBase viewBox="0 0 24 24" :width="24" :height="24">
          <DownloadIcon />
        </IconBase>
      </div>
      <p class="ml-4 items-center justify-items-center  text-[14px]">Uygulamayı Yükle </p>
    </router-link>
  </div>


</template>
