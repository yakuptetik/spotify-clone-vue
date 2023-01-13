<template>

  <div class="flex bd-[#121212] flex-col w-screen h-screen">
    <div class="flex w-full" style="height: calc(100% - 90px)">
      <SideBar/>

      <div class="flex flex-col w-full h-full">
        <NavBar />
        <router-view/>
      </div>
    </div>

<FooterBar/>

  </div>
</template>


<script setup>

import FooterBar from './components/FooterBar.vue';
import SideBar from './components/SideBar.vue';
import NavBar from './components/NavBar.vue';



</script>

