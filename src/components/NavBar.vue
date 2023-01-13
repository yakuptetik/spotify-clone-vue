<script setup>
  import IconBase from "@/components/icons/IconBase.vue";
  import PrevIcon from "@/components/icons/PrevIcon.vue";
  import NextIcon from "@/components/icons/NextIcon.vue";
  import SearchIcons from "@/components/icons/SearchIcons.vue";
  import BrowseIcon from "./icons/BrowseIcon.vue";
  import { useStore } from 'vuex';


  const store = useStore();

  function logIn() {
  store.dispatch('user/fetchToken');
  }
</script>

<template >
  <div   class="w-full min-h-[64px] max-h-[64px] bg-[#111111] text-white px-4 flex justify-between items-center">
    <div class="flex gap-3 justify-center items-center h-full">
  <button  @click="$router.back()" class="bg-black rounded-full p-1">
      <IconBase >
        <PrevIcon />
      </IconBase>
    </button>
      <button @click="$router.forward()" class="bg-black rounded-full p-1">
        <IconBase >
          <NextIcon />
        </IconBase>
      </button>
     <div v-if="$route.name === 'Search'" class="bg-white ml-3 w-[364px] rounded-full h-10   py-4  flex justify-center items-center ">
            <IconBase class="ml-3 text-black">
                <SearchIcons/>
            </IconBase>
        <input  class="w-[364px] text-black text-sm pl-5  rounded-full h-10 outline-none" placeholder="Ne dinlemek istiyorsun?" type="search">
      </div>
      <div v-if="$route.meta.isCollectionsPage"   class="flex pl-6 h-10 ">
            <router-link :to="{ name: 'CollectionPlaylist' }" active-class="!bg-[#333333] rounded-[5px] !h-full !w-full" class="flex px-6 cursor-pointer h-10  mb-4 items-center justify-items-center text-sm  ">
                <p class=""> Çalma Listeleri</p>
              </router-link>
              <router-link :to="{ name: 'Podcasts' }" active-class=" rounded-[5px] !bg-[#333333]" class="flex cursor-pointer px-6  mb-4 h-10  items-center justify-items-center text-sm  ">
                <p class=""> Podcast'ler</p>
              </router-link>
              <router-link  :to=" {name : 'Artists'}" active-class="rounded-[5px] !bg-[#333333]" class="flex cursor-pointer px-6 h-10  mb-4 items-center justify-items-center text-sm ">
                <p class=""> Sanatçılar</p>
              </router-link>
              <router-link :to=" {name : 'Albums'}" active-class=" rounded-[5px] !bg-[#333333]" class="flex cursor-pointer px-6 h-10  mb-4 items-center justify-items-center text-sm ">
                <p class=""> Albümler</p>
              </router-link>
        </div>

      </div>

    <div  class="flex justify-center items-center gap-8">
        <div class="border border-slate-500  rounded-2xl px-5 py-[2px] hover:bg-black">
          <a href="https://www.spotify.com/tr/premium/">Yükselt</a>
        </div>

        <div  v-if="!isAuthenticated" class="w-full flex items-center justify-end text-white gap-4 text-xs tracking-widest font-bold">
    <button
      class="hover:scale-110 font-bold tracking-widest"
      >
        <a href="https://www.spotify.com/tr/signup">KAYDOL</a>
      </button>

    <button
      @click="$store.dispatch('user/getAuthorize', null, { root: true })"
      class="bg-white rounded-full pb-2 pt-3 px-4 text-black hover:scale-105 tracking-widest font-bold"
    >
    OTURUM AÇ
    </button>
  </div>

    <button class="group">
            <div class="rounded-full h-12 w-12 bg-[#242424] flex items-center hover:bg-hoverHeadbar group-hover:bg-[#2a2a2a] justify-center">
                <img class="rounded-full overflow-hidden h-7 w-7 object-cover" src="@/assets/306790919_472141918159586_7480383728740418639_n.jpg" alt="ProfilePicture" />
            </div>
        <div class="hidden w-48 z-10 right-8 mt-2 pt-1 text-xs text-left bg-[#282828] text-white flex-col absolute bg-hoverHeadbar rounded shadow-xl z-1 group-focus-within:flex cursor-default">
            <div
                class="mx-1 py-2 pl-3 text-s hover:bg-[#3e3e3e] rounded items-center flex justify-between"
            >
               <a href="https://www.spotify.com/tr/account/overview/?utm_source=spotify&utm_medium=menu&utm_campaign=your_account">Hesap</a>
               <span>
                 <IconBase>
                  <BrowseIcon/>
               </IconBase>
              </span>
            </div>
            <router-link
                :to="`/user/31`"
                class="mx-1 p-3 text-s hover:bg-[#3e3e3e] rounded flex justify-between"
            >
               <span>Profil
               </span>

            </router-link>
            <div class="mx-1 py-2 pl-3 text-s hover:bg-[#3e3e3e] items-center rounded flex justify-between">
             <a href="https://www.spotify.com/tr/premium/"> Premium'a Yükselt</a>
            <span>
                 <IconBase>
                  <BrowseIcon/>
               </IconBase>
              </span>
            </div >
            <div
                class="mx-1 py-2 pl-3 text-s hover:bg-[#3e3e3e] items-center rounded flex justify-between"
            >
            <a href="https://support.spotify.com/tr/">Destek</a>
           <span>
                 <IconBase>
                  <BrowseIcon/>
               </IconBase>
              </span>
            </div>
            <div
                class="mx-1 py-2 pl-3 text-s hover:bg-[#3e3e3e] items-center rounded flex justify-between"
            >
             <a href="https://www.spotify.com/tr/download">İndir</a>
              <span>
                 <IconBase>
                  <BrowseIcon/>
               </IconBase>
              </span>
            </div>
            <router-link
                :to="`/user/1`"
                class="mx-1 py-2 pl-3 text-s hover:bg-[#3e3e3e] items-center rounded flex justify-between"
            >
            <span>
               Ayarlar
            </span>
            </router-link>
            <hr class="mx-2 border-[#716f6f81]">

            <div @click="logIn()" >
                <a class="mx-1 p-3 text-s hover:bg-[#3e3e3e] items-center rounded flex justify-between mb-1 cursor-pointer">Oturumu Kapat</a>
            </div>

        </div>
    </button>

    </div>
  </div>
</template>

 <style>
  [type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 1.5em;
  width: 1.5em;
  background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times.svg) no-repeat 50% 50%;
  background-size: contain;
  pointer-events: none;
  margin-right: 8px;
}
 </style>
