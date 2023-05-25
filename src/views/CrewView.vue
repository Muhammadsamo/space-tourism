<template>
  <img
    src="/crew/background-crew-mobile.jpg"
    alt="background-crew-mobile"
    class="absolute z-[-1] w-full min-h-screen"
  />
  <Header></Header>
  <h1
    class="font-barlowCondesed text-[#FFFFFF] text-center tracking-[2.7px] leading-[19.2px] uppercase"
  >
    <strong class="opacity-25 mix-blend-normal mr-4">01</strong>Meet your crew
  </h1>
  <div class="border-b border-[#383B4B] h-[250px] w-4/5 mx-auto mt-8">
    <div class="h-[250px] mt-auto" v-show="isActive('commander')">
      <img
        class="h-full mx-auto w-auto pb-[1px]"
        src="/crew/image-douglas-hurley.png"
        alt="douglas-hurley"
      />
    </div>
    <div class="h-[250px]" v-show="isActive('missionSpecialist')">
      <img
        class="h-full mx-auto w-auto pb-[1px]"
        src="/crew/image-mark-shuttleworth.png"
        alt="mark-shuttleworth"
      />
    </div>
    <div class="h-[250px]" v-show="isActive('pilot')">
      <img
        class="h-full mx-auto w-auto pb-[1px]"
        src="/crew/image-victor-glover.png"
        alt="victor-glover"
      />
    </div>
    <div class="h-[250px]" v-show="isActive('flightEngineer')">
      <img
        class="h-full mx-auto w-auto pb-[1px]"
        src="/crew/image-anousheh-ansari.png"
        alt="anousheh-ansari"
      />
    </div>
  </div>

  <div
    class="uppercase text-[#FFFFFF] flex justify-between w-[100px] mx-auto mt-8"
  >
    <span
      class="h-[10px] w-[10px] bg-[#FFFFFF] opacity-[0.17] hover:opacity-60 transition-all rounded-full cursor-pointer"
      :class="{ 'opacity-100': isActive('commander') }"
      @click="setActiveTab('commander')"
    ></span>
    <span
      class="h-[10px] w-[10px] bg-[#FFFFFF] opacity-[0.17] hover:opacity-60 transition-all rounded-full cursor-pointer"
      :class="{ 'opacity-100': isActive('missionSpecialist') }"
      @click="setActiveTab('missionSpecialist')"
    ></span>
    <span
      class="h-[10px] w-[10px] bg-[#FFFFFF] opacity-[0.17] hover:opacity-60 transition-all rounded-full cursor-pointer"
      :class="{ 'opacity-100': isActive('pilot') }"
      @click="setActiveTab('pilot')"
    ></span>
    <span
      class="h-[10px] w-[10px] bg-[#FFFFFF] opacity-[0.17] hover:opacity-60 transition-all rounded-full cursor-pointer"
      :class="{ 'opacity-100': isActive('flightEngineer') }"
      @click="setActiveTab('flightEngineer')"
    ></span>
  </div>

  <div class="mt-8">
    <Commander v-show="isActive('commander')"></Commander>
    <MissionSpecialist
      v-show="isActive('missionSpecialist')"
    ></MissionSpecialist>
    <Pilot v-show="isActive('pilot')"></Pilot>
    <FlightEngineer v-show="isActive('flightEngineer')"></FlightEngineer>
  </div>
</template>

<script setup>
import Header from "../components/common/Header.vue";
import Commander from "../components/crew/Commander.vue";
import MissionSpecialist from "../components/crew/MissionSpecialist.vue";
import Pilot from "../components/crew/Pilot.vue";
import FlightEngineer from "../components/crew/FlightEngineer.vue";

import { onMounted, ref } from "vue";

const activeTab = ref("commander");

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
const isActive = (tab) => {
  return activeTab.value === tab;
};

const tabSlider = () => {
  setTimeout(() => {
    activeTab.value = "missionSpecialist";
  }, 3000);

  setTimeout(() => {
    activeTab.value = "pilot";
  }, 6000);

  setTimeout(() => {
    activeTab.value = "flightEngineer";
  }, 9000);
  setTimeout(() => {
    activeTab.value = "commander";
    tabSlider();
  }, 12000);
};

onMounted(() => {
  tabSlider();
});
</script>
