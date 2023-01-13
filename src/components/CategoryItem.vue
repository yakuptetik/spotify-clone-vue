<template>
  <div class="px-6 pb-6">
    <div class="text-white h-full justify-items-center items-center mt-6 w-full">
      <router-link to="" class="hover:underline   text-2xl">{{bigtittle}} {{bigtittle1}} {{bigtittle2}} {{bigtittle3}} {{bigtittle4}} </router-link>

      <router-link to="" class="hover:underline float-right pr-4 text-sm" >{{seeAll}}</router-link>
      <div v-if="$route.name === 'User'"  class="text-sm opacity-50 py-2" >Yalnızca sana görünür</div>
    </div>

    <div class=" inline-grid grid-cols-5  gap-4">
      <slot/>
    </div>

  </div>
</template>
<script setup>

 defineProps({
    bigtittle: String,
    bigtittle1: String,
    bigtittle2: String,
    seeAll: String
  })

</script>
