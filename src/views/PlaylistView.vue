<template>

  <div class="h-[276px] py-4 pl-4 flex items-end w-full bg-[#a73eb4]">
    <div class="h-[190px] w-[190px]  ">
      <img clss=""
        src="https://mosaic.scdn.co/300/ab67616d0000b273b183f16bd413fc0a3e2a8c96ab67616d0000b273b8817acec4dfef24647709ccab67616d0000b273cc319cc65277ea17783dca6bab67616d0000b273ecb5ac462fb4264ceeb429b9"
        alt="">
    </div>
    <div class=" pl-4 text-white ">
      <h4 class="text-sm pt-5">ÇALMA LİSTESİ</h4>
      <h1 class="font-bold text-[6rem]">1.Çalma Listem</h1>
      <div class="flex pb-1">
        <a class="hover:underline" href="/user/31">holigan</a>
        <p class="px-1">.</p>
        <p>2 şarkı</p>
      </div>
    </div>
  </div>

  <div class=" h-full w-full bg-gradient-to-t from-[#121212] to-[#4e1955]">
    <div class="pl-7 pt-7">
      <PlayIcon class=" hover:scale-110  group-hover:opacity-100 ease-in duration-300  bottom-1 right-1 " largeSize
        greenColor />
    </div>



    <div class="px-6 w-full ">
      <table class="text-white w-full mb-4  border-slate-500 mt-9">
        <thead class="font-sans border-b border-gray-600  opacity-50  w-[500px] text-xs">
          <tr class="">

            <th class="">
              #
            </th>

            <th class="text-left">Başlık</th>

            <th class="text-left">
              ALBÜM
            </th>

            <th class="text-left"> TARİH EKLENDİ
            </th>

            <th class="flex justify-center">

              <IconBase>
                <TrackClockIcon />
              </IconBase>


            </th>
          </tr>
        </thead>

        <tbody class="">

          <tr>
            <td class="pt-4 "></td>
          </tr>
          <tr class="hover:bg-[#ffffff1a] group rounded-xl">

            <td class="rounded-l-lg">
              <span class=" absolute text-sm opacity-100 group-hover:opacity-0 pl-5">1</span>
              <button class="ml-4 opacity-0 group-hover:opacity-100">
                <div @click="isPlay = !isPlay">
                  <IconBase width="16" height="16" viewBox="0 0 16 16">
                    <component :is="isPlay ? PlayButton : PlayButton2" />
                  </IconBase>
                </div>
              </button>
            </td>
            <td class=" gap-4 flex justify-start items-center ">
              <img class="h-10 w-10" src="https://i.scdn.co/image/ab67616d000048512cb743e635cc84a07a24bd84" alt="">
              <div>
                <a class="text-center hover:underline" href="">FXREST OF NIGHTMARES</a>
                <br>
                <a class="hover:underline" href="">MVDX</a>
              </div>
            </td>
            <td class=""><a class=" hover:underline text-sm" href="">FXREST OF NIGHTMARES</a></td>
            <td class="...">
              <p class="opacity-50 float-left text-xs flex justify-center ">1 gün önce</p>
            </td>
            <td class="rounded-r-lg group">
              <div class="float-right gap-5 flex justify-center items-center">

                <div @click="isLike = !isLike">
                  <IconBase class="group-hover:opacity-100 opacity-0" width="16" height="16" viewBox="0 0 16 16">
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
          <tr class="hover:bg-[#ffffff1a] group rounded-xl">

            <td class="rounded-l-lg">
              <span class=" absolute text-sm opacity-100 group-hover:opacity-0 pl-5">1</span>
              <button class="ml-4 opacity-0 group-hover:opacity-100">
                <div @click="isPlay = !isPlay">
                  <IconBase width="16" height="16" viewBox="0 0 16 16">
                    <component :is="isPlay ? PlayButton : PlayButton2" />
                  </IconBase>
                </div>
              </button>
            </td>
            <td class=" gap-4 flex justify-start items-center ">
              <img class="h-10 w-10" src="https://i.scdn.co/image/ab67616d000048512cb743e635cc84a07a24bd84" alt="">
              <div>
                <a class="text-center hover:underline" href="">FXREST OF NIGHTMARES</a>
                <br>
                <a class="hover:underline" href="">MVDX</a>
              </div>
            </td>
            <td class=""><a class=" hover:underline text-sm" href="">FXREST OF NIGHTMARES</a></td>
            <td class="...">
              <p class="opacity-50 float-left text-xs flex justify-center ">1 gün önce</p>
            </td>
            <td class="rounded-r-lg group">
              <div class="float-right gap-5 flex justify-center items-center">

                <div @click="isLike = !isLike">
                  <IconBase class="group-hover:opacity-100 opacity-0" width="16" height="16" viewBox="0 0 16 16">
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
  </div>


</template>

<script setup>
import PlayIcon from '@/components/PlayIcon.vue'
import IconBase from '@/components/icons/IconBase.vue'
import TracksLikeIcon from '@/components/icons/TracksLikeIcon.vue'
import TrackLikeIconTrans from '@/components/icons/TrackLikeIconTrans.vue'
import TracksIcons from '@/components/icons/TracksIcons.vue'
import TrackClockIcon from '@/components/icons/TrackClockIcon.vue'
import PlayButton from '@/components/icons/PlayButton.vue'
import PlayButton2 from '@/components/icons/PlayButton2.vue'


import { ref } from 'vue';

const isPlay = ref(false);
const isLike = ref(false);






</script>

