<template>
  <main class="min-h-screen relative">
    <Header></Header>
    <RouterView v-slot="{ Component, route }">
      <Transition name="zoom" mode="out-in">
        <div :key="route">
          <component :is="Component"></component>
        </div>
      </Transition>
    </RouterView>
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/common/Header.vue";
</script>

<style>
.zoom-enter-from {
  transform: scale(1.4);
}
.zoom-leave-to {
  transform: scale(1.4);
}
.zoom-enter-active {
  transition: all 1s ease-in;
}
</style>
