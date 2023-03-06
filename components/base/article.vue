<template>
  <div class="w-full">
    <UiCard v-if="props.article">
      <!-- TITLE -->
      <div class="p-2">
        <h1
          class="article-title neon-text xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl m-2"
        >
          {{ props.article.title }}
        </h1>
      </div>

      <!-- BADGE -->
      <div class="flex felx-wrap px-2">
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
      </div>

      <!-- CONTENT -->
      <div class="article-content p-2">
        <div v-if="props.article.meta_description" class="meta-wrapper m-2">
          <h2 class="title-summary pb-3 text-stroke h2-title"># Introduction</h2>
          <span
            v-html="props.article.meta_description"
            class="meta-text"
          ></span>
        </div>

        <div v-if="props.article.dependency" class="m-2 meta-wrapper">
          <h2 class="title-dependency pb-3 text-stroke h2-title"># Prerequisites</h2>
          <span v-html="props.article.dependency"></span>
        </div>
        <div class="m-2">
          <span v-html="props.article.content"></span>
        </div>
      </div>

      <!-- FOOTER -->
      <div class="flex felx-wrapper p-2">
        <span class="m-2">
          <Button v-if="props.article.github_url" aria-label="GitHub">
            <a
              :href="props.article.github_url"
              target="_blank"
              class="link-btn"
            >
              <i class="pi pi-github"></i>
              <span class="px-1">GitHub</span>
            </a>
          </Button>
        </span>

        <span class="m-2">
          <Button v-if="props.article.reference_url">
            <a
              :href="props.article.reference_url"
              target="_blank"
              class="link-btn"
            >
              <span class=""
                >参考:{{ props.article.reference_url }}</span
              >
            </a>
          </Button>
        </span>
      </div>
    </UiCard>
  </div>
</template>

<script setup>
// import hljs from 'highlight.js';
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";

const props = defineProps(["article"]);

onNuxtReady(async () => {
  hljs.registerLanguage("python", python);
  hljs.registerLanguage("javascript", javascript);
  hljs.highlightAll();
});

// Highlight.js
</script>

<style lang="scss">
@import "/assets/css/global.scss";

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

.article-content {
  u {
    text-decoration-style: solid;
    text-decoration-thickness: 0.15rem;
  }

  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
  a {
    color: $Red;
    background-color: $Background;
    color: $Yellow;
    padding: 1px 5px;
    border-radius: 2px;
    &:hover {
      background-color: $Selection;
    }
  }

  .meta-wrapper {
    background-color: $Background;
    border-style: solid;
    border-color: $LineNumber;
    border-width: 2px;
    color: $White;
    padding: 1.5rem;
    border-radius: 5px;
    .title-summary {
      color: $Red;
    }
    .title-dependency {
      color: $Blue;
    }
  }
}

.h2-title {
  color: black;
  font-size: 1.5rem;
  font-family: "Noto Sans Japanese";
  font-weight: 700;
  line-height: 120%;
}

.link-btn {
  text-decoration: none;
}
</style>
