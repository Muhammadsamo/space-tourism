<template>
  <div
    class="text-[#FFFFFF] max-w-[327px] md:max-w-[573px] mx-auto text-center lg:text-left"
  >
    <h2
      class="font-bellefair text-[56px] md:text-[80px] lg:text-[100px] leading-[64.18px] md:leading-[91.68px] lg:leading-[115px] uppercase mt-8"
    >
      {{ title }}
    </h2>
    <p
      class="font-barlow text-[15px] md:text-base lg:text-lg leading-[25px] md:leading-7 lg:leading-8 md:max-w-[573px] md:mx-auto text-[#D0D6F9] border-b pb-8 border-[#383B4B]"
    >
      {{ desc }}
    </p>
  </div>

  <div
    class="flex flex-col md:flex-row max-w-[327px] md:max-w-[573px] mx-auto justify-around lg:justify-start lg:gap-[80px] text-center lg:text-left"
  >
    <div class="uppercase text-[#FFFFFF] mt-10">
      <p
        class="font-barlowCondensed text-[14px] leading-[16.86px] tracking-[2.36px] text-[#D0D6F9] mb-4"
      >
        AVG. DISTANCE
      </p>
      <p class="font-bellefair text-[28px] leading-[32.09px]">{{ distance }}</p>
    </div>

    <div class="uppercase text-[#FFFFFF] mt-10">
      <p
        class="font-barlowCondensed text-[14px] leading-[16.86px] tracking-[2.36px] text-[#D0D6F9] mb-4"
      >
        Est. travel time
      </p>
      <p class="font-bellefair text-[28px] leading-[32.09px]">{{ time }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  desc: String,
  distance: String,
  time: String,
});
</script>
