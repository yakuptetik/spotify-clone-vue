
<template>
  <div class="px-4 h-[90px] w-full bg-[#181818]">
    <div class=" mt-4 mb-2 flex justify-center items-center" >
      <div class=" flex justify-items-center text-[#5e5e5e] mb-4 mt-4">
          <IconBase viewBox="0 0 16 16" :width="16" :height="16">
            <FirstIcon/>
          </IconBase>
        </div>

        <div class=" px-6  flex justify-items-center text-[#5e5e5e] mb-4 mt-4">
          <IconBase viewBox="0 0 16 16" :width="16" :height="16">
            <SecondIcon/>
          </IconBase>
        </div>

        <PlayIcon class="" whiteColor smallSize  />


          <div class=" px-6 flex justify-items-center text-[#5e5e5e] mt-4 mb-4">
            <IconBase viewBox="0 0 16 16" :width="16" :height="16">
              <ThirdIcon/>
            </IconBase>
          </div>

          <div class=" flex justify-items-center text-[#5e5e5e] mt-4 mb-4 ">
            <IconBase viewBox="0 0 16 16" :width="16" :height="16">
              <FourthIcon/>
            </IconBase>
         </div>
    </div>

      <div class=" flex justify-center items-center mt-[-8px] ml-[440px] ">
            <div>
              <p class="flex justify-center items-center text-[#5e5e5e] text-[0.6875rem]">00.00</p>
            </div>

              <!-- <hr class=" mx-2  w-[490px] h-[4px] border bg-[#5e5e5e]  border-[#5e5e5e]" > -->
              <input class=" mx-2  w-[490px] h-[4px] bg-[#5e5e5e]  border-[#5e5e5e]" />


            <div>
              <p class="flex justify-center items-center text-[#5e5e5e] text-[0.6875rem]">00.00</p>
            </div>
          <div >


          <div class=" flex items-center  justify-center mt-[-30px] ml-[270px]">
            <div class="hover:text-white  text-[#5e5e5e] ">
                <IconBase viewBox="0 0 16 16" :width="16" :height="16">
              <BarIcons/>
                </IconBase>
            </div>
            <div class="hover:text-white mx-3  text-[#5e5e5e] ">
                <IconBase viewBox="0 0 16 16" :width="16" :height="16">
              <BarIconsTwo/>
                </IconBase>
            </div>

            <div class="hover:text-white mr-2  text-[#5e5e5e] ">
                <IconBase viewBox="0 0 16 16" :width="16" :height="16">
              <BarIconsThree/>
                </IconBase>
            </div>
            <div class="flex justify-center items-center" >
              <input  type="range" value="10" min="0" max="100" />
            </div>
          </div>


         </div>
      </div>
  </div>



</template>

<script setup>
import IconBase from "./icons/IconBase.vue";
import FirstIcon from "./icons/FirstIcon.vue";
import SecondIcon from "./icons/SecondIcon.vue";
import ThirdIcon from "./icons/ThirdIcon.vue";
import FourthIcon from "./icons/FourthIcon.vue"
import BarIcons from "./icons/BarIcons.vue"
import BarIconsTwo from "./icons/BarIconsTwo.vue"
import BarIconsThree from "./icons/BarIconsThree.vue"
import PlayIcon from './PlayIcon.vue';


</script>

<style>
  input[type="range"] {
  -webkit-appearance: none;
  width: 93px;
  height: 5px;
  position: relative;
  overflow: hidden;
  background: #b2b2b2;
  border-radius: 5px;
  background-image: linear-gradient(#b2b2b2, #b2b2b2);
  background-size: 70% 100%;
  background-repeat: no-repeat;
}
input[type="range"]::-webkit-slider-thumb:hover {
  -webkit-appearance: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: #b2b2b2;
  cursor: ew-resize;
  box-shadow: -200px 0 0 200px greenyellow;
}

input[type="range"]:hover {
    margin: auto;
    -webkit-appearance: none;
    position: relative;
    overflow: hidden;
    height: 5px;
    width: 93px;
    cursor: pointer;
border-radius:25px;
}
::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    background: #fff;
    box-shadow: -200px 0 0 200px white;
}
</style>
