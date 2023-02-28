<template>
  <div class="grid lg:m-3 md:m-2 sm:m-2">
    <div class="col-12 flex lg:mt-3">
      <slot name="header" />
    </div>
    <div class="col-12 lg:col-4 flex">
      <div class="flex flex-column">
        <slot name="table"></slot>
        <slot name="sidebar" />
      </div>
    </div>
    <div class="col-12 lg:col-8 flex">
      <slot name="article"></slot>
    </div>
    <div class="col-12 flex"><slot name="footer" /></div>
  </div>
</template>
