<template>
  <img
    src="/destination/background-destination-mobile.jpg"
    alt="background-destination-mobile"
    class="absolute z-[-1] w-full xxs:min-h-screen min-h-[730px]"
  />
  <Header></Header>

  <h1
    class="font-barlowCondesed text-[#FFFFFF] text-center tracking-[2.7px] leading-[19.2px] uppercase"
  >
    <strong class="opacity-25 mix-blend-normal mr-4">01</strong>Pick your
    destination
  </h1>
  <div
    class="destination-img mx-auto w-[170px] h-[170px] mt-8"
    v-show="isActive('moon')"
  >
    <img src="/destination/image-moon.png" alt="moon" />
  </div>
  <div
    class="destination-img mx-auto w-[170px] h-[170px] mt-8"
    v-show="isActive('mars')"
  >
    <img src="/destination/image-mars.png" alt="mars" />
  </div>
  <div
    class="destination-img mx-auto w-[170px] h-[170px] mt-8"
    v-show="isActive('europa')"
  >
    <img src="/destination/image-europa.png" alt="europa" />
  </div>
  <div
    class="destination-img mx-auto w-[170px] h-[170px] mt-8"
    v-show="isActive('titan')"
  >
    <img src="/destination/image-titan.png" alt="titan" />
  </div>
  <div
    class="uppercase text-[#FFFFFF] flex justify-between w-[300px] mx-auto mt-8"
  >
    <span
      class="hover:border-b-[3px] text-[#D0D6F9] border-[#D0D6F9] pb-2 cursor-pointer"
      :class="{ 'border-b-[3px] text-white border-white': isActive('moon') }"
      @click="setActiveTab('moon')"
      >Moon</span
    >
    <span
      class="hover:border-b-[3px] text-[#D0D6F9] border-[#D0D6F9] pb-2 cursor-pointer"
      :class="{ 'border-b-[3px] text-white border-white': isActive('mars') }"
      @click="setActiveTab('mars')"
      >Mars</span
    >
    <span
      class="hover:border-b-[3px] text-[#D0D6F9] border-[#D0D6F9] pb-2 cursor-pointer"
      :class="{ 'border-b-[3px] text-white border-white': isActive('europa') }"
      @click="setActiveTab('europa')"
      >Europe</span
    >
    <span
      class="hover:border-b-[3px] text-[#D0D6F9] border-[#D0D6F9] pb-2 cursor-pointer"
      :class="{ 'border-b-[3px] text-white border-white': isActive('titan') }"
      @click="setActiveTab('titan')"
      >Titan</span
    >
  </div>
  <div v-show="isActive('moon')">
    <Moon> </Moon>
  </div>
  <div v-show="isActive('mars')">
    <Mars> </Mars>
  </div>
  <div v-show="isActive('europa')">
    <Europa> </Europa>
  </div>
  <div v-show="isActive('titan')">
    <Titan></Titan>
  </div>
</template>

<script setup>
import Header from "../components/common/Header.vue";
import Moon from "../components/destination/Moon.vue";
import Mars from "../components/destination/Mars.vue";
import Europa from "../components/destination/Europa.vue";
import Titan from "../components/destination/Titan.vue";

import { ref } from "vue";

const activeTab = ref("moon");

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
const isActive = (tab) => {
  return activeTab.value === tab;
};
</script>
