<template>
    <div class="relative p-2">
      <img
        src="/img/parts/corner.svg"
        class="corner corner--left-top opacity-70 hide-mobile"
      />
      <img
        src="/img/parts/corner.svg"
        class="corner corner--right-top opacity-70 hide-mobile"
      />
      <img
        src="/img/parts/corner.svg"
        class="corner corner--left-bottom opacity-70 hide-mobile"
      />
      <img
        src="/img/parts/corner.svg"
        class="corner corner--right-bottom opacity-70 hide-mobile"
      />

      <div class="glass-effect">
        <slot></slot>
      </div>
    </div>
</template>

<style></style>
