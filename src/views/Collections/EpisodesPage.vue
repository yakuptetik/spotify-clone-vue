

   <script setup>
    import IconBase from '@/components/icons/IconBase.vue';
    import TracksIcons from '@/components/icons/TracksIcons.vue';
    import ApproveIcon from '@/components/icons/ApproveIcon.vue';
    import MyPartsIcon from '@/components/icons/MyPartsIcon.vue';
    import PlayIcon from '@/components/PlayIcon.vue'
    import EpisodesSendIcon from '../../components/icons/EpisodesSendIcon.vue'

    </script>

   <template >


    <div class=" overflow-y-auto ">


   <div  class="h-[276px]  py-4 pl-4 flex items-end w-full bg-[#1f4e40]">
      <div class=" h-[232px] shadow-[0px_35px_60px_15px_rgba(0,0,0,0.3)] bg-[#296551]  flex justify-center items-center  w-[232px]">
           <IconBase class="ml-7 mt-7 text-[#64d762]" viewBox="0 0 24 24" width="84" height="84" >
          <MyPartsIcon/>
        </IconBase>
      </div>
      <div class=" pl-4 text-white ">
          <h4 class="text-sm pt-5">ÇALMA LİSTESİ</h4>
          <h1 class="font-bold text-[6rem]">Bölümlerin</h1>
        <div class="flex pb-1">
          <a class="hover:underline" href="/user/31">holigan</a>
          <p class="px-1">•</p>
          <p>6 bölüm</p>
        </div>
      </div>
   </div>
        <div class=" h-full w-full bg-gradient-to-t from-[#121212] to-[#0D2821]">
              <div class="pl-7 pt-7">
                   <PlayIcon class=" hover:scale-110  group-hover:opacity-100 ease-in duration-300 mb-6  bottom-1 right-1 "  largeSize greenColor />
               </div>
               <div v-for="index in 10" :key="index.id" class="group cursor-pointer h-[196px] hover:bg-[#eee0e014] border-t  border-t-[#ffffff51] ml-4 w-[935px]">
                  <div class="flex " >
                      <div class="p-4 h-full max-w-[180px]">
                        <img class="h-[120px] w-[140px] rounded-xl" src="	https://i.scdn.co/image/ab6765630000ba8ab1621d106067d44adfce26e5" alt="">
                      </div>
                      <div  class="text-white pl-3 pt-4 w-full">
                        <a class="text-center   hover:underline" href="">Son Firavun:Kleopatra</a> <br>
                        <a class="text-center text-sm hover:underline" href="">Ortamlarda Satılacak Bilgi</a>
                        <p class="line-clamp-2 text-sm opacity-50 pt-3 pr-9 w-full">
                              Bölüm sponsoru  hakkında detaylı bilgi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sed dolor
                              velit temporibus illo officia non dignissimos aspernatur animi, itaque commodi explica boe3er 2k4j3ko4tjtnok2 reo3kk3435rte d
                        </p>
                      </div>
                  </div>
                  <div class="flex justify-between">
                    <div class="flex justify-center items-center gap-2 pl-[160px]  ">
                      <PlayIcon class="" whiteColor smallSize  />
                      <div class="text-[#ffffff6a] text-sm">
                        <span v-text="'10 Agu •'"/>
                          <span class="" v-text="'36 dk.35 sn'"/>
                      </div>
                    </div>
                    <div class="flex   gap-4 pr-9">
                       <IconBase class="opacity-0 text-[#ffffff6a] group-hover:opacity-100" viewBox="0 0 24 24" heigh="26" width="24">
                            <EpisodesSendIcon />
                          </IconBase>
                          <IconBase class=" text-[#68e066] group-hover:opacity-100" viewBox="0 0 24 24" heigh="24" width="24">
                           <ApproveIcon />
                       </IconBase>
                      <IconBase class="opacity-0 text-[#ffffff6a]  group-hover:opacity-100" viewBox="0 0 16 16" heigh="26" width="26">
                           <TracksIcons />
                       </IconBase>
                    </div>
                  </div>
             </div>

          </div>
        </div>
</template>

