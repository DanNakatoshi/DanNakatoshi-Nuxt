<template>
  <div class="w-full">
    <UiCard v-if="props.article">
      <div class="p-2">
        <h1
          class="article-title neon-text xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl m-2"
        >
          {{ props.article.title }}
        </h1>
      </div>

      <div class="article-content p-2">
        <div class="flex felx-wrap">
          <Badge
            v-if="props.article.date"
            :value="props.article.date"
            class="m-2"
          ></Badge>
          <Badge
            v-if="props.article.difficulty"
            :value="props.article.difficulty"
            class="m-2"
          ></Badge>
          <Button
            v-if="props.article.github_url"
            class="discord p-0"
            aria-label="GitHub"
          >
            <a
              :href="props.article.github_url"
              target="_blank"
              class="link-btn"
            >
              <i class="pi pi-github px-2"></i>
              <span class="px-3">GitHub</span>
            </a>
          </Button>
        </div>

        <div
          v-if="props.article.meta_description"
          id="article-description-wrapper"
          class="m-2"
        >
          <h2 class="pb-3 text-stroke h2-title">概要</h2>
          <span
            v-html="props.article.meta_description"
            class="meta-text"
          ></span>
        </div>

        <div
          v-if="props.article.dependency"
          id="article-dependency-wrapper"
          class="m-2"
        >
          <h2 class="pb-3 text-stroke h2-title">環境</h2>
          <span v-html="props.article.dependency"></span>
        </div>
        <div class="m-2">
          <span v-html="props.article.content"></span>
        </div>

        <div v-if="props.article.reference_url">
          <Button>{{ props.article.reference_url }}</Button>
        </div>
      </div>
    </UiCard>
  </div>
</template>

<script setup>
const props = defineProps(["article"]);
</script>

<style lang="scss">
/* Article*/
.article-title {
  font-family: "Noto Sans Japanese";
  font-weight: 700;
  line-height: 120%;

}

.neon-text {
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 82px #0fa, 0 0 102px #0fa;
}

/* article-description */
#article-description-wrapper {
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  padding: 1.5rem;
  border-radius: 3px;
}

#article-dependency-wrapper {
  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );

  padding: 1.5rem;
  border-radius: 3px;
}

.h2-title {
  color: black;
  font-size: 1.5rem;
  font-family: "Noto Sans Japanese";
  font-weight: 700;
  line-height: 120%;

}

.link-btn {
  list-style: none;
}
</style>
