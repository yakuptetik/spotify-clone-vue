<template>
<div class="overflow-y-auto">

  <div class="h-[276px]  py-4 pl-4 flex items-end w-full bg-[#3a2973]">
    <div class="h-[232px] w-[232px]  ">
      <img src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="">
    </div>
    <div class=" pl-4 text-white ">
      <h4>ÇALMA LİSTESİ</h4>
      <h1 class="font-bold text-[6rem]">Beğenilen Şarkılar</h1>
      <div class="flex pb-1">
        <a class="hover:underline" href="/user/31">holigan</a>
        <p class="px-1">.</p>
        <p>2 şarkı</p>
      </div>
    </div>
  </div>
  <div class="  h-full w-full bg-gradient-to-t from-[#121212] to-[#20163f]">
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
        <tbody  class="">
          <tr>
            <td class="pt-4 "></td>
          </tr>
          <tr v-for="index in 100" :key="index.id"  class="hover:bg-[#ffffff1a] group rounded-xl">
            <td class="  w-[60px] pr-1 rounded-l-lg">
              <span class=" text-sm opacity-100 group-hover:opacity-0 pl-5">{{ index }}</span>
                <button class="  relative -ml-3 opacity-0 group-hover:opacity-100">
                <div @click="isPlay = !isPlay">
                  <IconBase width="14" height="14" viewBox="0 0 16 16">
                    <component :is="isPlay ? PlayButton : PlayButton2" />
                  </IconBase>
                </div>
              </button>
            </td>
            <td class=" gap-4 flex justify-start items-center ">
              <img class="h-10 my-2 w-10" src="https://i.scdn.co/image/ab67616d000048512cb743e635cc84a07a24bd84" alt="">
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
                <IconBase class=" text-[#68e066]" viewBox="0 0 16 16" heigh="16" width="16">
                  <TracksLikeIcon />
                </IconBase>
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

</div>



</template>

<script setup>
import PlayIcon from '@/components/PlayIcon.vue'
import IconBase from '@/components/icons/IconBase.vue'
import TracksLikeIcon from '@/components/icons/TracksLikeIcon.vue'
import TracksIcons from '@/components/icons/TracksIcons.vue'
import TrackClockIcon from '@/components/icons/TrackClockIcon.vue'
import PlayButton from '@/components/icons/PlayButton.vue'
import PlayButton2 from '@/components/icons/PlayButton2.vue'


import { ref } from 'vue';

const isPlay = ref(false);





</script>

