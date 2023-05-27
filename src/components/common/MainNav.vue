<template>
  <nav
    class="min-h-[96px] w-[450px] lg:w-[830px] lg:backdrop-blur-[40.7742px] bg-[#FFFFFF0A] text-[#FFFFFF] flex items-center justify-around z-[999] uppercase font-barlowCondensed"
  >
    <RouterLink
      class="leading-[19.2px] tracking-[2.36px] text-[14px] lg:text-[16px] font-normal min-h-[90px] flex items-center hover:border-b-[3px] border-opacity-50 active:border-opacity-100 active:border-b-[3px]"
      :to="{ name: 'home' }"
      ><strong class="mr-2">00</strong><span>Home</span></RouterLink
    >
    <RouterLink
      class="leading-[16.8px] tracking-[2.36px] text-[14px] lg:text-[16px] font-normal min-h-[90px] flex items-center hover:border-b-[3px] border-opacity-50 active:border-opacity-100 active:border-b-[3px]"
      :to="{ name: 'destination' }"
      ><strong class="mr-2">01</strong><span>Destination</span></RouterLink
    >
    <RouterLink
      class="leading-[19.2px] tracking-[2.36px] text-[14px] lg:text-[16px] font-normal min-h-[90px] flex items-center hover:border-b-[3px] border-opacity-50 active:border-opacity-100 active:border-b-[3px]"
      :to="{ name: 'crew' }"
    >
      <strong class="mr-2">02</strong><span>Crew</span></RouterLink
    >
    <RouterLink
      class="leading-[19.2px] tracking-[2.36px] text-[14px] lg:text-[16px] font-normal min-h-[90px] flex items-center hover:border-b-[3px] border-opacity-50 active:border-opacity-100 active:border-b-[3px]"
      :to="{ name: 'technology' }"
    >
      <strong class="mr-2">03</strong><span>Technology</span></RouterLink
    >
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();

onMounted(() => {
  console.log(route.params.name);
});
</script>
