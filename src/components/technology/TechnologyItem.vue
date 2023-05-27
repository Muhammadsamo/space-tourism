<template>
  <div
    class="text-[#FFFFFF] max-w-[327px] md:max-w-[460px] lg:max-w-[470px] mx-auto text-center lg:text-left"
  >
    <p
      class="uppercase font-bellefair text-base leading-[18px] md:leading-[19.2px] text-[#FFFFFF] opacity-50"
    >
      THE TERMINOLOGY…
    </p>
    <h2
      class="font-bellefair text-2xl md:text-[40px] lg:text-[56px] leading-7 md:leading-[46px] lg:leading-[64px] uppercase mb-4 mt-2"
    >
      {{ title }}
    </h2>
    <p
      class="font-barlow text-[15px] md:text-base lg:text-lg leading-[25px] md:leading-7 lg:leading-8 text-[#D0D6F9] pb-8"
    >
      {{ desc }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  desc: String,
});
</script>
