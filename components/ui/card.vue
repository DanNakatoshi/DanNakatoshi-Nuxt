<template>
    <div class="relative">
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

      <div class="glass-effect p-2">
        <slot></slot>
      </div>
    </div>
</template>

<style>

/* UI CARD */
.glass-effect {
  background: rgba(121, 215, 206, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
}

/* Corner-Border Icon */

.corner {
  position: absolute;
  z-index: 10;
  user-select: none;

}

.corner--left-top {
  left: 0px;
  top: 0px;
}

.corner--right-top {
  right: 0px;
  top: 0px;
  transform: rotate(90deg);
}

.corner--left-bottom {
  left: 0px;
  bottom: 0px;
  transform: rotate(-90deg);
}

.corner--right-bottom {
  right: 0px;
  bottom: 0px;
  transform: rotate(180deg);
}

/* END Corner-Border Icon */
</style>


