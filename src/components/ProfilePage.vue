<template>
  <div class="overflow-y-auto">

    <div class="h-[276px]  py-6  pl-6 flex items-end w-full bg-gradient-to-t from-[#1f1b1b] to-[#3a3232]">
      <div class="h-[232px]  w-[232px]  ">
        <img class="rounded-full shadow-2xl" src="@/assets/306790919_472141918159586_7480383728740418639_n.jpg"  alt="">
      </div>
      <div class=" pl-4 text-white ">
        <span class="mt-3  text-xs">PROFİL</span>
        <h1 class="font-bold -my-4 text-[6rem]">holigan </h1>
        <div class="flex pb-1">
          <div class="flex text-sm gap-1">Herkese Açık {{playlists}} Çalma Listesi</div>
          <p class="px-1">•</p>
      <a href="/user/31/following" class="text-sm hover:underline">Takip edilenler:4</a>
        </div>
      </div>
    </div>
    <div class="  h-full w-full bg-[#121212]">

      <button class="group relative">


 <div class="pl-7 pt-7">
        <IconBase class=" text-[#ffffff6a]"   viewBox="0 0 16 16" heigh="26" width="26">
                           <TracksIcons />
                       </IconBase>
      </div>


        <div class="hidden absolute top-12 left-0 w-48 ml-4  mt-2 pt-1 text-xs text-left bg-[#282828] text-white flex-col   rounded shadow-xl  group-focus-within:flex cursor-default">

            <router-link
                :to="`/user/31`"
                class="mx-1 p-3 text-s hover:bg-[#3e3e3e] rounded flex justify-between"
            >
               <span>Profili düzenle
               </span>

            </router-link>

            <a class="mx-1 p-3 text-s hover:bg-[#3e3e3e] items-center rounded flex justify-between mb-1 cursor-pointer">
                Profil bağlantısını kopyala
            </a>
        </div>
    </button>

      <div class="overflow-y-auto p-5 ">
        <CategoryItem seeAll="Hepsini gör" bigtittle="Bu ayın en çok  dinlenen sanatçıları">

            <CardItem rounded image="https://picsum.photos/200/200" tittle="1. Çalma Listem" description="Oluşturan:holigan"/>
            <CardItem rounded image="https://picsum.photos/200/200" tittle="1. Çalma Listem" description="Oluşturan:holigan"/>
            <CardItem rounded image="https://picsum.photos/200/200" tittle="1. Çalma Listem" description="Oluşturan:holigan"/>
            <CardItem rounded image="https://picsum.photos/200/200" tittle="1. Çalma Listem" description="Oluşturan:holigan"/>
            <CardItem rounded image="https://picsum.photos/200/200" tittle="1. Çalma Listem" description="Oluşturan:holigan"/>
        </CategoryItem>
      </div>
      <div class="px-6 pb-6">
          <div class="text-white h-full justify-items-center items-center mt-6 w-full">
            <router-link to="" class="hover:underline pl-6   text-2xl">Bu ayın en çok dinlenen şarkıları </router-link>

            <router-link to="" class="hover:underline float-right pr-4 text-sm" >Hepsini gör</router-link>
            <div  class="text-sm opacity-50 pl-6 py-2" >Yalnızca sana görünür</div>
          </div>


          <div class="px-6 w-full ">
            <table class="text-white w-full mb-4  border-slate-500 mt-2">
              <thead class="font-sans border-b border-gray-600  opacity-50  w-[500px] text-xs">

              </thead>
              <tbody class="">
                <tr>
                  <td class="pt-4 "></td>
                </tr>
                <tr   v-for="index in 4" :key="index.id"  class="hover:bg-[#ffffff1a] group rounded-xl">
                  <td  class=" w-[60px] pr-2 rounded-l-lg">

                    <span class=" text-sm opacity-100 group-hover:opacity-0 pl-5">{{ index }}</span>
                    <button class="  relative -ml-3 opacity-0 group-hover:opacity-100">
                      <div @click="isPlay = !isPlay">
                        <IconBase width="14" height="14" viewBox="0 0 16 16">
                          <component :is="isPlay ? PlayButton : PlayButton2" />
                        </IconBase>
                      </div>
                    </button>
                  </td>
                  <td class=" gap-4 py-3 flex  items-center ">
                    <img class="h-10 w-10" src="https://i.scdn.co/image/ab67616d000048512cb743e635cc84a07a24bd84" alt="">
                    <div>
                      <a  href="">Хроники Коронавируса</a> <br>
                      <a class="text-center hover:underline"  href="">Хроники</a>
                      <br>
                    </div>
                  </td>
                  <td class="...">
                    <p class="opacity-50 float-left text-xs flex justify-center ">Хроники Коронавируса</p>
                  </td>
                  <td class="rounded-r-lg group">
                    <div class="float-right gap-5 flex justify-center items-center">

                      <div class="group-hover:opacity-100 opacity-0" @click="isLike = !isLike">
                        <IconBase width="16" height="16" viewBox="0 0 16 16">
                          <component :is="isLike ? TracksLikeIcon : TrackLikeIconTrans " />
                        </IconBase>
                      </div>
                      <span class="text-sm opacity-60">3:05</span>
                      <IconBase class="pr-3 group-hover:opacity-100 opacity-0" viewBox="0 0 16 16" heigh="26" width="26">
                        <TracksIcons />
                      </IconBase>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

           <router-link to="" class="hover:underline pl-6 text-white  text-2xl">Herkese Açık Çalma Listesi</router-link>
          <div class="text-white inline-grid grid-cols-5 pl-4 gap-4 h-full pb-4 justify-items-center items-center mt-6 w-full">
                <CardItem  image="https://picsum.photos/200/200" tittle="1. Çalma Listem" description="Oluşturan:holigan"/>
          </div>

          <router-link to="" class="hover:underline pl-4 text-white py-5 text-2xl">Takip ediliyor</router-link>
          <div class="text-white inline-grid grid-cols-5 pl-4  gap-4 h-full justify-items-center items-center mt-6 w-full">
            <CardItem rounded image="https://i.scdn.co/image/ab6775700000ee85a19e833c09e7e6a8d2b87533" tittle="Meeyzt" description="Profil"/>
            <CardItem rounded image="https://picsum.photos/200/200" tittle="meeyzt" description="profil"/>
            <CardItem rounded image="https://picsum.photos/200/200" tittle="1. Çalma Listem" description="profil"/>
            <CardItem rounded image="https://picsum.photos/200/200" tittle="1. Çalma Listem" description="profil"/>
          </div>
     </div>

   </div>
  </div>
  </template>

  <script setup>

  import IconBase from '@/components/icons/IconBase.vue'
  import TracksLikeIcon from '@/components/icons/TracksLikeIcon.vue'
import TracksIcons from '@/components/icons/TracksIcons.vue'
import TrackLikeIconTrans from '@/components/icons/TrackLikeIconTrans.vue'
  import CategoryItem from '@/components/CategoryItem.vue'
  import CardItem from '@/components/CardItem.vue'

  import { ref } from 'vue';

  const isPlay = ref(false);
  const isLike = ref(false);
const playlists = "1"




  </script>


