
<template>
            <div class="  relative overflow-hidden  w-[208px] h-[208px] rounded-[5px]"
            :class="{
  'bg-[#39866a]': bggreen ,
  'bg-[#e93a5c]': bgred ,
  'bg-[#1e3264]': bgblue ,
  'bg-[#ba5e2a]': bgorange ,
  'bg-[#8D67AB]': bgpurple ,
  'bg-[#dd3f8c]': bgpink ,

}" >
                      <h1 class="text-2xl text-white pt-3 pl-4 cursor-pointer font-extrabold" >{{tittles}}</h1>
                      <div class=" pl-2 absolute  -bottom-2 -right-4 ">
                               <img class=" h-[100px] w-[100px] object-cover  rotate-[25deg]" :src="songImage"   alt="">
                      </div>
             </div >
</template>


<script setup>


  defineProps({
    bggreen: Boolean,
    tittles: String,
    songImage: String,
    bgred:Boolean,
    bgblue:Boolean,
    bgorange:Boolean,
    bgpurple:Boolean,
    bgpink:Boolean,

  })

  </script>
