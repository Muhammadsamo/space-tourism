<template>
  <div
    class="min-h-150px md:min-h-[96px] bg-[transparent] min-w-full lg:pt-[40px]"
  >
    <Transition name="slide">
      <MobileNav v-show="navShow"></MobileNav>
    </Transition>
    <div
      class="flex items-center justify-between px-6 py-8 md:pl-6 md:pr-0 md:py-0"
    >
      <div>
        <a href="/"><img src="/shared/logo.svg" alt="logo" /></a>
      </div>
      <MainNav class="hidden md:flex"></MainNav>
      <div
        @click="toggleNav"
        class="z-[1000] text-[#D0D6F9] cursor-pointer md:hidden"
      >
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
import MobileNav from "./MobileNav.vue";
import MainNav from "./MainNav.vue";
import { ref } from "vue";

const navShow = ref(false);

const toggleNav = () => {
  navShow.value = !navShow.value;
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transform: translateX(-0%);
  transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
