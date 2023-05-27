<template>
  <div
    class="text-[#FFFFFF] max-w-[327px] md:max-w-[460px] mx-auto text-center"
  >
    <p
      class="uppercase text-center font-bellefair text-base leading-[18px] md:leading-[19.2px] text-[#FFFFFF] opacity-50"
    >
      THE TERMINOLOGY…
    </p>
    <h2
      class="font-bellefair text-2xl md:text-[40px] md:leading-[46px] leading-7 uppercase text-center mb-4 mt-2"
    >
      {{ title }}
    </h2>
    <p
      class="font-barlow text-[15px] md:text-base md:leading-7 leading-[25px] text-[#D0D6F9] pb-8"
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
