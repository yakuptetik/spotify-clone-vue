

<template>
  <div class="overflow-y-auto bg-[#121212]">
    <CategoryItem
      v-for="category in categories"
      :key="category.message"
      :seeAll="'hepsini gör'"
      :bigtittle="category.message"
    >
      <CardItem
        v-for="categoryItem in category.playlists.items"
        :key="categoryItem.name"
        :id="categoryItem.id"
        :image="categoryItem.images[0].url"
        :tittle="categoryItem.name"
        :description="categoryItem.description"
      />
    </CategoryItem>

  </div>
</template>


<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import CardItem from '@/components/CardItem.vue';
import CategoryItem from '@/components/CategoryItem.vue'

const store = useStore();


onMounted(async() => {
  await store.dispatch('user/fetchToken');
  store.dispatch('home/fetchCategoryDatas');
  store.dispatch('home/fetchPlaylistDatas');
})

const categories = computed(() => store.state.home.categories);


// const accessToken = ref([]);

// async function fetchToken() {

//   accessToken.value = await fetch('https://api.spotify.com/v1/me/tracks?market=ES&limit=10&offset=5')
//     .then((response) =>  response.json())
//     .then((response) =>  response.results);
// }

// function setAccessToken(id) {
//     router.push({ name: 'Spotify',  params: { id }});
// }


// fetchToken();

</script>
