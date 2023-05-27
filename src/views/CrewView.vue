<template>
  <img
    src="/crew/background-crew-mobile.jpg"
    alt="background-crew-mobile"
    class="absolute z-[-1] w-full min-h-full md:hidden"
  />
  <img
    src="/crew/background-crew-tablet.jpg"
    alt="background-crew-tablet"
    class="absolute z-[-1] w-full min-h-full hidden md:block lg:hidden"
  />
  <img
    src="/crew/background-crew-desktop.jpg"
    alt="background-crew-desktop"
    class="absolute z-[-1] w-full min-h-full hidden lg:block"
  />
  <Header></Header>

  <PageHeading page-num="02" page-heading="Meet your crew"></PageHeading>

  <div
    class="uppercase text-[#FFFFFF] flex justify-between w-[100px] absolute left-2/4 -translate-x-2/4 top-[445px] md:top-[420px] lg:top-[620px] xl:top-[670px] lg:left-[150px]"
  >
    <span
      class="h-[10px] w-[10px] bg-[#FFFFFF33] hover:bg-[#FFFFFFFF] transition-all rounded-full cursor-pointer"
      :class="{ 'bg-[#FFFFFFFF]': isActive('commander') }"
      @click="setActiveTab('commander')"
    ></span>
    <span
      class="h-[10px] w-[10px] bg-[#FFFFFF33] hover:bg-[#FFFFFFFF] transition-all rounded-full cursor-pointer"
      :class="{ 'bg-[#FFFFFFFF]': isActive('missionSpecialist') }"
      @click="setActiveTab('missionSpecialist')"
    ></span>
    <span
      class="h-[10px] w-[10px] bg-[#FFFFFF33] hover:bg-[#FFFFFFFF] transition-all rounded-full cursor-pointer"
      :class="{ 'bg-[#FFFFFFFF]': isActive('pilot') }"
      @click="setActiveTab('pilot')"
    ></span>
    <span
      class="h-[10px] w-[10px] bg-[#FFFFFF33] hover:bg-[#FFFFFFFF] transition-all rounded-full cursor-pointer"
      :class="{ 'bg-[#FFFFFFFF]': isActive('flightEngineer') }"
      @click="setActiveTab('flightEngineer')"
    ></span>
  </div>

  <div
    class="flex flex-col md:flex-col-reverse lg:flex-row-reverse justify-center md:items-center lg:justify-end lg:items-center gap-[40px] lg:h-[calc(100vh-136px)] xl:h-[calc(100vh-290px)]"
  >
    <div
      class="border-b border-[#383B4B] md:border-none md:absolute lg:static md:bottom-0 md:left-2/4 md:-translate-x-2/4 lg:translate-x-0 h-[250px] md:h-[572px] w-4/5 lg:w-2/4 mx-auto lg:mx-0 mt-8"
    >
      <div class="h-[250px] md:h-[572px]" v-show="isActive('commander')">
        <img
          class="h-full mx-auto lg:mx-0 w-auto pb-[1px]"
          src="/crew/image-douglas-hurley.png"
          alt="douglas-hurley"
        />
      </div>
      <div
        class="h-[250px] md:h-[572px]"
        v-show="isActive('missionSpecialist')"
      >
        <img
          class="h-full mx-auto lg:mx-0 w-auto pb-[1px]"
          src="/crew/image-mark-shuttleworth.png"
          alt="mark-shuttleworth"
        />
      </div>
      <div class="h-[250px] md:h-[572px]" v-show="isActive('pilot')">
        <img
          class="h-full mx-auto lg:mx-0 w-auto pb-[1px]"
          src="/crew/image-victor-glover.png"
          alt="victor-glover"
        />
      </div>
      <div class="h-[250px] md:h-[572px]" v-show="isActive('flightEngineer')">
        <img
          class="h-full mx-auto lg:mx-0 w-auto pb-[1px]"
          src="/crew/image-anousheh-ansari.png"
          alt="anousheh-ansari"
        />
      </div>
    </div>

    <div class="mt-8 md:w-[600px] lg:w-[750px]">
      <CrewMember
        :title="crewMembers.commander.title"
        :name="crewMembers.commander.name"
        :intro="crewMembers.commander.intro"
        v-show="isActive('commander')"
      ></CrewMember>
      <CrewMember
        :title="crewMembers.missionSpecialist.title"
        :name="crewMembers.missionSpecialist.name"
        :intro="crewMembers.missionSpecialist.intro"
        v-show="isActive('missionSpecialist')"
      ></CrewMember>
      <CrewMember
        :title="crewMembers.pilot.title"
        :name="crewMembers.pilot.name"
        :intro="crewMembers.pilot.intro"
        v-show="isActive('pilot')"
      ></CrewMember>
      <CrewMember
        :title="crewMembers.flightEngineer.title"
        :name="crewMembers.flightEngineer.name"
        :intro="crewMembers.flightEngineer.intro"
        v-show="isActive('flightEngineer')"
      ></CrewMember>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/common/Header.vue";

import { onMounted, ref } from "vue";
import PageHeading from "../components/common/PageHeading.vue";
import CrewMember from "../components/crew/CrewMember.vue";

const activeTab = ref("commander");

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
const isActive = (tab) => {
  return activeTab.value === tab;
};

const crewMembers = {
  commander: {
    title: "commander",
    name: "Douglas Hurley",
    intro:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  missionSpecialist: {
    title: "Mission Specialist",
    name: "MARK SHUTTLEWORTH",
    intro:
      " Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  pilot: {
    title: "PILOT",
    name: "Victor Glover",
    intro:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  flightEngineer: {
    title: "Flight Engineer",
    name: "Anousheh Ansari",
    intro:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
};

const tabSlider = () => {
  setInterval(() => {
    if (activeTab.value === "commander") {
      activeTab.value = "missionSpecialist";
    } else if (activeTab.value === "missionSpecialist") {
      activeTab.value = "pilot";
    } else if (activeTab.value === "pilot") {
      activeTab.value = "flightEngineer";
    } else if (activeTab.value === "flightEngineer") {
      activeTab.value = "commander";
    }
  }, 3000);
};

onMounted(() => {
  tabSlider();
});
</script>

<style></style>
