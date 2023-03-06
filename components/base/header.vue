<template>
  <div class="relative w-full">
    <div
      class="w-full p-2 flex justify-content-center flex-wrap align-items-center"
    >
      <div class="hide-desktop">
        <Button
          icon="pi pi-bars"
          class="p-button-rounded p-button-secondary mr-1 mb-2"
          @click="openMobileNav"
          v-show="!isMobileNavOpen"
        />
      </div>

      <NuxtLink to="/">
        <img
          id="app-logo"
          class="p-1"
          src="/img/logo.svg"
          alt="Dan Nakatoshi"
        />
      </NuxtLink>

      <div class="pr-2 hide-mobile">
        <div class="flex ml-4">
          <BaseHeaderNav />
        </div>
      </div>
    </div>

  </div>

  <Sidebar v-model:visible="isMobileNavOpen">
    <div class="flex flex-column justify-content-start">
      <BaseHeaderNav />
    </div>
  </Sidebar>
</template>

<script setup>
const isMobileNavOpen = ref(false);

function openMobileNav() {
  isMobileNavOpen.value = !isMobileNavOpen.value;
}
</script>

<style>
/* #icon-bars {
  position: absolute;
  top: 5px;
  left: 5px;
} */
</style>
