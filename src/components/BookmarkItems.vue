<template>

  <div class="px-6  ">
    <div class="text-white pb-4  justify-items-center items-center mt-6 w-full">
      <h1 class="text-2xl ">{{ type === 'Liked Songs' ? 'Çalma Listeleri' : "Podcast'ler" }}</h1>
    </div>
  </div>

  <div class="grid overflow-y-auto   mx-6 grid-cols-5  gap-3">
    <div :class="{
      'bg-gradient-to-b from-[#4d47f6] to-[#8e8de6]': bg,
      'bg-[#2a6650]': !bg,
    }" class="group  cursor-pointer rounded-[5px]  relative col-span-2">

      <PlayIcon
        class=" opacity-0  hover:scale-110  group-hover:opacity-100 ease-in duration-300  absolute bottom-1 right-1 "
        hover bigSize greenColor />

      <div class="text-white  pl-6 pt-28">
        <div class="group flex flex-row flex-wrap overflow-hidden max-h-[100px] mb-3 line-clamp-3 mr-4">
            <span v-for="index in 12" :key="index" class="ml-1" >

              <span v-text="'10Age'"/>

              <span class="ml-1 opacity-70">Zoopark • </span>

            </span>

          </div>



        <p class="pt-3  pb-3 text-[35px]">{{ type === 'Liked Songs' ? 'Beğenilen Şarkılar' : 'Bölümlerim' }} </p>
        <p class="text-sm">{{ count }} {{ type === 'Liked Songs' ? 'Beğenilen şarkılar' : 'Bölüm' }} </p>
      </div>
    </div>

    <slot/>

  </div>





</template>

<script setup>
import PlayIcon from '@/components/PlayIcon.vue'

defineProps({
  singer: String,
  song: String,
  parts: String,
  bg: Boolean,
  type: String,
  count: String,
})
</script>
