<template>
  <div class="w-full p-2 flex justify-content-between flex-wrap align-items-center">
    <img id="app-logo" class="p-2" src="/img/logo.svg" alt="Dan Nakatoshi" />

    <div class="pr-2 hide-mobile">
      <div class="flex">
        <BaseHeaderNav />
      </div>
    </div>
  </div>

  <div id="icon-bars" class="hide-desktop p-2">
    <Button
      icon="pi pi-bars"
      class="p-button-rounded p-button-secondary "
      @click="openMobileNav"
      v-show="!isMobileNavOpen"
    />
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
