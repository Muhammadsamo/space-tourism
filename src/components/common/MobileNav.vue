<template>
  <nav
    class="h-screen w-[254px] bg-[#FFFFFF0A] text-[#FFFFFF] flex flex-col fixed top-0 right-0 z-[999] backdrop-blur-[40.7742px] px-10 pt-36 gap-8 uppercase font-barlowCondensed"
  >
    <RouterLink
      class="leading-[19.2px] tracking-[2.7px] text-base font-normal"
      to="/"
      ><strong>01</strong> <span>Home</span></RouterLink
    >
    <RouterLink
      class="leading-[19.2px] tracking-[2.7px] text-base font-normal"
      to="/destination"
      ><strong>02</strong> <span>Destination</span></RouterLink
    >
    <RouterLink
      class="leading-[19.2px] tracking-[2.7px] text-base font-normal"
      to="/Crew"
      ><strong>03</strong> <span>Crew</span></RouterLink
    >
    <RouterLink
      class="leading-[19.2px] tracking-[2.7px] text-base font-normal"
      to="/Technology"
      ><strong>04</strong> <span>Technology</span></RouterLink
    >
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
