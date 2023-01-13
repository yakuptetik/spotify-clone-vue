

<template>


<button :class="{
  'bg-[#68e066]': greenColor,
  'bg-white': whiteColor,
  'w-8 h-8': smallSize,
  'w-11 h-11': bigSize,
  'w-[64px] h-[64px]': largeSize,
}"
class="rounded-full text-black group  mr-2 mb-2 flex justify-center items-center ">

   <div @click="isPlay = !isPlay">
       <IconBase
       :width="largeSize ? 28: 16" :height="largeSize ? 28: 16" viewBox="0 0 16 16">
          <component  :is="isPlay ? PlayButton : PlayButton2" />
       </IconBase>
   </div>

</button>


</template>

<script setup>
  import IconBase from './icons/IconBase.vue';
  import PlayButton2 from "./icons/PlayButton2.vue";
  import PlayButton from './icons/PlayButton.vue';
  import { ref } from 'vue';

  const isPlay = ref(false);

  defineProps({
    bigSize: Boolean,
    smallSize: Boolean,
    whiteColor: Boolean,
    greenColor: Boolean,
    hover: Boolean,
    largeSize:Boolean

  })

</script>
