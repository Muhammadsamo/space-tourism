<template>
  <div class="min-h-150px bg-[transparent] min-w-full">
    <Navbar v-show="navShow"></Navbar>
    <div class="flex items-center justify-between px-6 py-8">
      <div>
        <a href="/"><img src="/shared/logo.svg" alt="logo" /></a>
      </div>
      <div @click="toggleNav" class="z-[1000] text-[#D0D6F9] cursor-pointer">
        <img
          v-if="!navShow"
          src="/shared/icon-hamburger.svg"
          alt="hamburger-icon"
        />
        <img
          v-else
          src="/shared/icon-close.svg"
          alt="close-icon"
          class="fixed right-6 top-12"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import { ref } from "vue";

const navShow = ref(false);

const toggleNav = () => {
  navShow.value = !navShow.value;
};
</script>
