<template>
  <img
    src="/home/background-home-mobile.jpg"
    alt="background-home-mobile"
    class="absolute z-[-1] w-full xxs:min-h-screen min-h-[730px]"
  />
  <Header></Header>

  <div class="pt-28">
    <h1
      class="uppercase font-barlowCondesed tex-base leading-[19.2px] tracking-[2.7px] text-[#D0D6F9] text-center"
    >
      SO, YOU WANT TO TRAVEL TO
    </h1>
    <h2
      class="uppercase font-bellefair text-[80px] leading[100px] text-center text-[#FFFFFF]"
    >
      SPACE
    </h2>
    <p
      class="text-[15px] leading-[25px] text-[#D0D6F9] text-center max-w-[327px] mx-auto mt-4"
    >
      Let’s face it; if you want to go to space, you might as well genuinely go
      to outer space and not hover kind of on the edge of it. Well sit back, and
      relax because we’ll give you a truly out of this world experience!
    </p>

    <div
      class="bg-[#FFFFFF] w-[150px] h-[150px] mx-auto rounded-full flex items-center text-center justify-center font-bellefair text-[20px] leading-[22.92px] text-[#0B0D17] mt-[81px] hover:shadow-lg cursor-pointer"
    >
      EXPLORE
    </div>
  </div>
</template>

<script setup>
import Header from "../components/common/Header.vue";
</script>
