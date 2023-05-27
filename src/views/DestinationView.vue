<template>
  <!-- <div
    class="blur-circle w-[513px] h-[513px] absolute bg-[#0B0D17] rounded-full blur-[150.957px] top-[37%] left-[40%] z-[-1]"
  ></div> -->
  <img
    src="/destination/background-destination-mobile.jpg"
    alt="background-destination-mobile"
    class="absolute z-[-2] w-full h-full md:hidden"
  />
  <img
    src="/destination/background-destination-tablet.jpg"
    alt="background-destination-tablet"
    class="absolute z-[-2] w-full h-full hidden lg:hidden md:block"
  />
  <img
    src="/destination/background-destination-desktop.jpg"
    alt="background-destination-desktop"
    class="absolute z-[-2] w-full h-full hidden lg:block"
  />
  <Header></Header>

  <PageHeading page-num="01" page-heading="Pick your destination"></PageHeading>

  <div
    class="flex flex-col lg:flex-row lg:h-[calc(100vh-136px)] lg:justify-around lg:items-center"
  >
    <div>
      <div
        class="destination-img mx-auto w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] mt-10"
        v-show="isActive('moon')"
      >
        <img src="/destination/image-moon.png" alt="moon" />
      </div>
      <div
        class="destination-img mx-auto w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] mt-10"
        v-show="isActive('mars')"
      >
        <img src="/destination/image-mars.png" alt="mars" />
      </div>
      <div
        class="destination-img mx-auto w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] mt-10"
        v-show="isActive('europa')"
      >
        <img src="/destination/image-europa.png" alt="europa" />
      </div>
      <div
        class="destination-img mx-auto w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] mt-10"
        v-show="isActive('titan')"
      >
        <img src="/destination/image-titan.png" alt="titan" />
      </div>
    </div>

    <div>
      <div
        class="uppercase text-[#FFFFFF] flex justify-between w-[300px] mx-auto lg:mx-0 lg:text-left mt-8"
      >
        <span
          class="hover:border-b-[3px] text-[#D0D6F9] border-[#D0D6F9] pb-2 cursor-pointer"
          :class="{
            'border-b-[3px] text-white border-white': isActive('moon'),
          }"
          @click="setActiveTab('moon')"
          >Moon</span
        >
        <span
          class="hover:border-b-[3px] text-[#D0D6F9] border-[#D0D6F9] pb-2 cursor-pointer"
          :class="{
            'border-b-[3px] text-white border-white': isActive('mars'),
          }"
          @click="setActiveTab('mars')"
          >Mars</span
        >
        <span
          class="hover:border-b-[3px] text-[#D0D6F9] border-[#D0D6F9] pb-2 cursor-pointer"
          :class="{
            'border-b-[3px] text-white border-white': isActive('europa'),
          }"
          @click="setActiveTab('europa')"
          >Europe</span
        >
        <span
          class="hover:border-b-[3px] text-[#D0D6F9] border-[#D0D6F9] pb-2 cursor-pointer"
          :class="{
            'border-b-[3px] text-white border-white': isActive('titan'),
          }"
          @click="setActiveTab('titan')"
          >Titan</span
        >
      </div>

      <div v-show="isActive('moon')">
        <DestinationItem
          :title="destinations.moon.title"
          :desc="destinations.moon.desc"
          :distance="destinations.moon.distance"
          :time="destinations.moon.time"
        >
        </DestinationItem>
      </div>
      <div v-show="isActive('mars')">
        <DestinationItem
          :title="destinations.mars.title"
          :desc="destinations.mars.desc"
          :distance="destinations.mars.distance"
          :time="destinations.mars.time"
        >
        </DestinationItem>
      </div>
      <div v-show="isActive('europa')">
        <DestinationItem
          :title="destinations.europa.title"
          :desc="destinations.europa.desc"
          :distance="destinations.europa.distance"
          :time="destinations.europa.time"
        >
        </DestinationItem>
      </div>
      <div v-show="isActive('titan')">
        <DestinationItem
          :title="destinations.titan.title"
          :desc="destinations.titan.desc"
          :distance="destinations.titan.distance"
          :time="destinations.titan.time"
        >
        </DestinationItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/common/Header.vue";
import PageHeading from "../components/common/PageHeading.vue";
import DestinationItem from "../components/destination/DestinationItem.vue";
import { ref } from "vue";

const activeTab = ref("moon");

const destinations = {
  moon: {
    title: "Moon",
    desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    time: "3 days",
  },
  mars: {
    title: "Mars",
    desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time: "9 months",
  },
  europa: {
    title: "Europa",
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time: "3 years",
  },
  titan: {
    title: "Titan",
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    time: "7 years",
  },
};

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
const isActive = (tab) => {
  return activeTab.value === tab;
};
</script>
