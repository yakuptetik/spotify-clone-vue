<script setup>
  defineProps({
    title: String,
    to: String,
  })
</script>

<template>
  <router-link active-class="!opacity-100" class="opacity-60 hover:opacity-100" :to="{ name: 'Playlists', params: { id: to } }" >
    <h1 class="text-[13px] truncate" > {{title}}</h1>
  </router-link>
</template>

