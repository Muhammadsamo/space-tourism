<template>
  <img
    src="/technology/background-technology-mobile.jpg"
    alt="background-technology-mobile"
    class="absolute z-[-1] w-full xxs:min-h-screen min-h-[730px]"
  />
  <Header></Header>
  <h1
    class="font-barlowCondesed text-[#FFFFFF] text-base text-center tracking-[2.7px] leading-[19.2px] uppercase"
  >
    <strong class="opacity-25 mix-blend-normal mr-4">03</strong>SPACE LAUNCH 101
  </h1>
  <div class="mt-8">
    <div class="h-[170px] w-screen" v-show="isActive('vehicle')">
      <img
        class="h-full w-screen"
        src="/technology/image-launch-vehicle-landscape.jpg"
        alt="launch-vehicle"
      />
    </div>
    <div class="h-[170px] w-screen" v-show="isActive('spaceport')">
      <img
        class="h-full w-screen"
        src="/technology/image-spaceport-landscape.jpg"
        alt="launch-vehicle"
      />
    </div>
    <div class="h-[170px] w-screen" v-show="isActive('spaceCapsule')">
      <img
        class="h-full w-screen"
        src="/technology/image-space-capsule-landscape.jpg"
        alt="launch-vehicle"
      />
    </div>
  </div>

  <div
    class="uppercase text-[#FFFFFF] font-bellefair text-base flex justify-between w-[150px] mx-auto mt-8"
  >
    <span
      class="flex items-center justify-center h-[40px] w-[40px] bg-transparent border border-[#FFFFFF] opacity-25 hover:opacity-100 transition-all rounded-full cursor-pointer"
      :class="{ 'bg-white text-[#000] opacity-100': isActive('vehicle') }"
      @click="setActiveTab('vehicle')"
      >1</span
    >
    <span
      class="flex items-center justify-center h-[40px] w-[40px] bg-transparent border border-[#FFFFFF] opacity-25 hover:opacity-100 transition-all rounded-full cursor-pointer"
      :class="{
        'bg-white text-[#000] opacity-100': isActive('spaceport'),
      }"
      @click="setActiveTab('spaceport')"
      >2</span
    >
    <span
      class="flex items-center justify-center h-[40px] w-[40px] bg-transparent border border-[#FFFFFF] opacity-25 hover:opacity-100 transition-all rounded-full cursor-pointer"
      :class="{
        'bg-white text-[#000] opacity-100': isActive('spaceCapsule'),
      }"
      @click="setActiveTab('spaceCapsule')"
      >3</span
    >
  </div>
  <div class="mt-8">
    <LaunchVehicle v-show="isActive('vehicle')"></LaunchVehicle>
    <SpacePort v-show="isActive('spaceport')"></SpacePort>
    <SpaceCapsule v-show="isActive('spaceCapsule')"></SpaceCapsule>
  </div>
</template>

<script setup>
import Header from "../components/common/Header.vue";
import LaunchVehicle from "../components/technology/LaunchVehicle.vue";
import SpaceCapsule from "../components/technology/SpaceCapsule.vue";
import SpacePort from "../components/technology/Spaceport.vue";

import { onMounted, ref } from "vue";

const activeTab = ref("vehicle");

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
const isActive = (tab) => {
  return activeTab.value === tab;
};

const tabSlider = () => {
  setInterval(() => {
    if (activeTab.value === "vehicle") {
      activeTab.value = "spaceport";
    } else if (activeTab.value === "spaceport") {
      activeTab.value = "spaceCapsule";
    } else if (activeTab.value === "spaceCapsule") {
      activeTab.value = "vehicle";
    }
  }, 3000);
};

onMounted(() => {
  tabSlider();
});
</script>
