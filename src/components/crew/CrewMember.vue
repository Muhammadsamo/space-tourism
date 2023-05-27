<template>
  <div
    class="text-[#FFFFFF] max-w-[327px] md:max-w-[600px] lg:max-w-[750px] mx-auto text-center lg:pl-[100px] lg:text-left"
  >
    <p
      class="uppercase font-bellefair text-base md:text-2xl lg:text-[32px] md:leading-7 lg:leading-[37px] leading-[18px] text-[#FFFFFF] opacity-50"
    >
      {{ title }}
    </p>
    <h2
      class="font-bellefair text-2xl md:text-[40px] lg:text-[56px] lg:leading-[64px] md:leading-[46px] leading-7 uppercase mb-4 mt-2"
    >
      {{ name }}
    </h2>
    <p
      class="font-barlow text-[15px] md:text-base lg:text-lg lg:leading-8 md:leading-7 leading-[25px] text-[#D0D6F9] pb-8"
    >
      {{ intro }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  name: String,
  intro: String,
});
</script>
