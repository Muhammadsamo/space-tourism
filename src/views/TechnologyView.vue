<template>
  <img
    src="/technology/background-technology-mobile.jpg"
    alt="background-technology-mobile"
    class="absolute z-[-1] w-full min-h-full md:hidden"
  />
  <img
    src="/technology/background-technology-tablet.jpg"
    alt="background-technology-tablet"
    class="absolute z-[-1] w-full min-h-full hidden md:block lg:hidden"
  />
  <img
    src="/technology/background-technology-desktop.jpg"
    alt="background-technology-desktop"
    class="absolute z-[-1] w-full min-h-full hidden lg:block"
  />
  <Header></Header>
  <PageHeading page-num="03" page-heading="SPACE LAUNCH 101"></PageHeading>
  <div class="mt-8">
    <div class="h-[170px] md:h-[310px] w-full" v-show="isActive('vehicle')">
      <img
        class="h-full w-full"
        src="/technology/image-launch-vehicle-landscape.jpg"
        alt="launch-vehicle"
      />
    </div>
    <div class="h-[170px] md:h-[310px] w-full" v-show="isActive('spaceport')">
      <img
        class="h-full w-full"
        src="/technology/image-spaceport-landscape.jpg"
        alt="launch-vehicle"
      />
    </div>
    <div
      class="h-[170px] md:h-[310px] w-full"
      v-show="isActive('spaceCapsule')"
    >
      <img
        class="h-full w-full"
        src="/technology/image-space-capsule-landscape.jpg"
        alt="launch-vehicle"
      />
    </div>
  </div>

  <div
    class="uppercase text-[#FFFFFF] font-bellefair text-base flex justify-between w-[150px] md:w-[220px] mx-auto mt-8"
  >
    <span
      class="flex md:text-2xl md:leading-7 items-center justify-center h-[40px] w-[40px] md:h-[60px] md:w-[60px] border border-[#FFFFFF40] hover:border-[#FFFFFFFF] transition-all rounded-full cursor-pointer"
      :class="{ 'bg-[#FFFFFFFF] text-[#000]': isActive('vehicle') }"
      @click="setActiveTab('vehicle')"
      >1</span
    >
    <span
      class="flex md:text-2xl md:leading-7 items-center justify-center h-[40px] w-[40px] md:h-[60px] md:w-[60px] border border-[#FFFFFF40] hover:border-[#FFFFFFFF] transition-all rounded-full cursor-pointer"
      :class="{
        'bg-[#FFFFFFFF] text-[#000] opacity-100': isActive('spaceport'),
      }"
      @click="setActiveTab('spaceport')"
      >2</span
    >
    <span
      class="flex md:text-2xl md:leading-7 items-center justify-center h-[40px] w-[40px] md:h-[60px] md:w-[60px] border border-[#FFFFFF40] hover:border-[#FFFFFFFF] transition-all rounded-full cursor-pointer"
      :class="{
        'bg-[#FFFFFFFF] text-[#000] opacity-100': isActive('spaceCapsule'),
      }"
      @click="setActiveTab('spaceCapsule')"
      >3</span
    >
  </div>
  <div class="mt-8 md:w-[460px] mx-auto">
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
