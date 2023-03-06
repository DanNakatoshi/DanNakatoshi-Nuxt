<template>
  <div class="w-full">
    <UiCard>
      <div class="flex flex-wrap justify-content-around p-2">
        <a
          href="https://www.youtube.com/channel/UCiVt4Mcnog4KBEOALesuu1g"
          target="_blank"
          class="social-img-container"
        >
          <img
            class="pt-2 m-2 social-img"
            src="/img/icon/youtube.svg"
            alt="YouTube"
          />
        </a>
        <a
          href="https://twitter.com/asameshicode"
          target="_blank"
          class="social-img-container"
        >
          <img
            class="pt-2 m-2 social-img"
            src="/img/icon/twitter.svg"
            alt="Twitter"
          />
        </a>
        <a
          href="https://github.com/TraitOtaku?tab=repositories"
          target="_blank"
          class="social-img-container"
        >
          <img
            class="pt-2 m-2 social-img"
            src="/img/icon/github.svg"
            alt="GitHub"
          />
        </a>
      </div>
    </UiCard>
  </div>
</template>

<style lang="scss">
@import "/assets/css/global.scss";

.social-img-container {
  padding: 0 5px;
  border-radius: 5px;
  background-color: $Background;

  &:hover {
    background-color: $Red;
  }
  .social-img {
    height: 34px;
    width: 34px;
  }
}
</style>
