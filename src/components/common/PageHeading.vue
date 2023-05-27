<template>
  <div>
    <h1
      class="font-barlowCondesed text-[#FFFFFF] text-center md:text-left md:ml-8 md:mt-8 lg:ml-[100px] md:text-[20px] lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] leading-[19.2px] md:leading-6 lg:leading-[34px] uppercase"
    >
      <strong class="opacity-25 mix-blend-normal mr-4">{{ pageNum }}</strong
      >{{ pageHeading }}
    </h1>
  </div>
</template>

<script setup>
const props = defineProps({
  pageNum: String,
  pageHeading: String,
});
</script>
