<template>
  <div class="grid lg:m-3 md:m-2 m-1">
    <div class="col-12 flex lg:mt-3">
      <slot name="header" />
    </div>
    <div class="col-12 lg:col-4 flex" id="side-col">
      <div class="flex flex-column">
        <div>
          <slot name="table" />
        </div>
        <div class="my-3">
          <slot name="social" />
        </div>
        <div>
          <slot name="sidebar" />
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-8 flex" id="main-col">
      <slot name="article"></slot>
    </div>
    <div class="col-12 flex"><slot name="footer" /></div>
  </div>
</template>

<style>

</style>
