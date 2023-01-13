<script setup>
import PlayIcon from './PlayIcon.vue';

defineProps({
  description: String,
  tittle: String,
  image: String,
  rounded: Boolean,
  songer: String,
  artist: String,
  hidePLayButton: Boolean,
  id: String,
})
</script>
<template>
  <router-link :to="`playlist/${id}`">
    <div class="group w-full h-full rounded-[5px]  bg-[#181818]  hover:bg-[#272727] shadow-xl">
      <div class="p-4 relative ">
        <div class="w-full pt-full relative">
          <img :class="{ 'rounded-full' : rounded }" class="rounded-[5px]" :src="image" alt="">
          <PlayIcon v-if="!hidePLayButton"
            class=" opacity-0  hover:scale-110  group-hover:opacity-100 ease-in duration-300  absolute bottom-1 right-1 "
            hover bigSize greenColor />
        </div>
        <div class="text-white pt-4 text-base">
            <h1>{{tittle}} {{songer}}</h1>
            <p class="hover:underline text-[#9c9c9c] pt-2 pb-6 text-sm"> {{artist}}  {{ description }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>
