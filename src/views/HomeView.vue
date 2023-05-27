<template>
  <div class="pt-[136px] absolute top-0 left-0 w-screen">
    <img
      src="/home/background-home-mobile.jpg"
      alt="background-home-mobile"
      class="absolute top-0 left-0 z-[-1] w-full h-full md:hidden"
    />
    <img
      src="/home/background-home-tablet.jpg"
      alt="background-destination-tablet"
      class="absolute top-0 left-0 z-[-2] w-full h-full hidden lg:hidden md:block"
    />
    <img
      src="/home/background-home-desktop.jpg"
      alt="background-destination-desktop"
      class="absolute top-0 left-0 z-[-2] w-full h-full hidden lg:block"
    />
    <!-- <Header></Header> -->

    <div
      class="pt-28 pb-10 flex flex-col justify-center lg:flex-row lg:items-end lg:justify-between lg:min-h-[calc(100vh-96px)] lg:px-[165px] lg:pb-[131px]"
    >
      <div class="text-center lg:text-left">
        <h1
          class="uppercase font-barlowCondesed tex-base md:text-[20px] lg:text-[28px] lg:leading-[34px] leading-[19.2px] tracking-[2.7px] text-[#D0D6F9]"
        >
          SO, YOU WANT TO TRAVEL TO
        </h1>
        <h2
          class="uppercase font-bellefair text-[80px] md:text-[150px] lg:leading-[172px] leading-[100px] text-[#FFFFFF]"
        >
          SPACE
        </h2>
        <p
          class="text-[15px] lg:text-lg lg:leading-[32px] leading-[25px] text-[#D0D6F9] max-w-[327px] md:max-w-[444px] mx-auto mt-4"
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div
        class="bg-[#FFFFFF] w-[150px] md:w-[242px] h-[150px] md:h-[242px] mx-auto lg:mx-0 rounded-full flex items-center text-center justify-center font-bellefair text-[20px] md:text-[32px] leading-[22.92px] text-[#0B0D17] mt-[81px] transition-all hover:outline hover:outline-[50px] hover:outline-[#FFFFFF1A] cursor-pointer"
      >
        <router-link :to="{ name: 'destination' }"> EXPLORE</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/common/Header.vue";
</script>
