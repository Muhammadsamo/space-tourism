<template>
  <div class="pt-[136px] absolute top-0 left-0 w-screen">
    <img
      src="/technology/background-technology-mobile.jpg"
      alt="background-technology-mobile"
      class="absolute top-0 left-0 z-[-1] w-full min-h-full md:hidden"
    />
    <img
      src="/technology/background-technology-tablet.jpg"
      alt="background-technology-tablet"
      class="absolute top-0 left-0 z-[-1] w-full min-h-full hidden md:block lg:hidden"
    />
    <img
      src="/technology/background-technology-desktop.jpg"
      alt="background-technology-desktop"
      class="absolute top-0 left-0 z-[-1] w-full min-h-full hidden lg:block"
    />
    <!-- <Header></Header> -->
    <PageHeading page-num="03" page-heading="SPACE LAUNCH 101"></PageHeading>

    <div
      class="grid grid-cols-1 grid-rows-[1fr_100px_1fr] md:grid-rows-[1fr_160px_1fr] lg:grid-cols-[400px_1fr_1fr] lg:grid-rows-1 lg:justify-items-end items-center lg:h-[calc(100vh-136px)]"
    >
      <div class="mt-8 lg:w-[515px] lg:h-[527px] lg:col-start-3 lg:col-end-3">
        <div class="h-[170px] md:h-[310px] w-full" v-show="isActive('vehicle')">
          <img
            class="h-full w-full lg:hidden"
            src="/technology/image-launch-vehicle-landscape.jpg"
            alt="launch-vehicle"
          />
          <img
            class="h-full w-[515px] hidden lg:my-auto lg:h-[527px] lg:block"
            src="/technology/image-launch-vehicle-portrait.jpg"
            alt="launch-vehicle"
          />
        </div>
        <div
          class="h-[170px] md:h-[310px] w-full"
          v-show="isActive('spaceport')"
        >
          <img
            class="h-full w-full lg:hidden"
            src="/technology/image-spaceport-landscape.jpg"
            alt="launch-vehicle"
          />
          <img
            class="h-full w-[515px] hidden lg:h-[527px] lg:block"
            src="/technology/image-spaceport-portrait.jpg"
            alt="launch-vehicle"
          />
        </div>
        <div
          class="h-[170px] md:h-[310px] w-full"
          v-show="isActive('spaceCapsule')"
        >
          <img
            class="h-full w-full lg:hidden"
            src="/technology/image-space-capsule-landscape.jpg"
            alt="launch-vehicle"
          />
          <img
            class="h-full w-[515px] hidden lg:h-[527px] lg:block"
            src="/technology/image-space-capsule-portrait.jpg"
            alt="launch-vehicle"
          />
        </div>
      </div>

      <div
        class="uppercase text-[#FFFFFF] font-bellefair text-base flex justify-between lg:flex-col lg:h-[300px] lg:w-[100px] w-[150px] md:w-[220px] mx-auto lg: lg:col-span-1 lg:col-start-1 lg:col-end-1 lg:row-start-1"
      >
        <span
          class="flex md:text-2xl md:leading-7 items-center justify-center h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:w-[80px] lg:h-[80px] border border-[#FFFFFF40] hover:border-[#FFFFFFFF] transition-all rounded-full cursor-pointer"
          :class="{ 'bg-[#FFFFFFFF] text-[#000]': isActive('vehicle') }"
          @click="setActiveTab('vehicle')"
          >1</span
        >
        <span
          class="flex md:text-2xl md:leading-7 items-center justify-center h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:w-[80px] lg:h-[80px] border border-[#FFFFFF40] hover:border-[#FFFFFFFF] transition-all rounded-full cursor-pointer"
          :class="{
            'bg-[#FFFFFFFF] text-[#000] opacity-100': isActive('spaceport'),
          }"
          @click="setActiveTab('spaceport')"
          >2</span
        >
        <span
          class="flex md:text-2xl md:leading-7 items-center justify-center h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:w-[80px] lg:h-[80px] border border-[#FFFFFF40] hover:border-[#FFFFFFFF] transition-all rounded-full cursor-pointer"
          :class="{
            'bg-[#FFFFFFFF] text-[#000] opacity-100': isActive('spaceCapsule'),
          }"
          @click="setActiveTab('spaceCapsule')"
          >3</span
        >
      </div>

      <div
        class="mt-8 md:w-[460px] mx-auto lg:mx-0 lg:justify-self-start lg:w-auto lg:col-start-2 lg:col-end-2 lg:row-start-1"
      >
        <TechnologyItem
          :title="techItems.launchVehicle.title"
          :desc="techItems.launchVehicle.desc"
          v-show="isActive('vehicle')"
        ></TechnologyItem>
        <TechnologyItem
          :title="techItems.spaceport.title"
          :desc="techItems.spaceport.desc"
          v-show="isActive('spaceport')"
        ></TechnologyItem>
        <TechnologyItem
          :title="techItems.spaceCapsule.title"
          :desc="techItems.spaceCapsule.desc"
          v-show="isActive('spaceCapsule')"
        ></TechnologyItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/common/Header.vue";
import PageHeading from "../components/common/PageHeading.vue";
import TechnologyItem from "../components/technology/TechnologyItem.vue";

import { onMounted, ref } from "vue";

const activeTab = ref("vehicle");

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
const isActive = (tab) => {
  return activeTab.value === tab;
};

const techItems = {
  launchVehicle: {
    title: "Launch Vehicle",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  spaceport: {
    title: "spaceport",
    desc: " A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  spaceCapsule: {
    title: "Space Capsule",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
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
