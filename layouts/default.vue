<template>
  <div id="app-container">
    <div class="grid lg:m-3 md:m-2 m-1">
      <div class="col-12 flex ">
        <BaseHeader />
      </div>
      <div class="col-12 lg:col-4 flex" id="side-col">
        <div class="flex flex-column">
          <div>
            <BaseTable
              :articleList="articleList"
              @articleClicked="updateArticle"
              :currentArticleId="currentArticleId"
            />
          </div>
          <div class="mt-3">
            <BaseSocial />
          </div>
        </div>
      </div>
      <div class="col-12 lg:col-8 flex" id="main-col">
        <slot></slot>
      </div>
      <div class="col-12 flex"><BaseFooter /></div>
    </div>
  </div>
  f
</template>

<script setup>
import { watch, provide, watchEffect } from "vue";

const route = useRoute();
// const urlSlug = ref(route.params.slug);

const BACKEND_URL = "http://127.0.0.1:8000/api/blog/";
const { data: articleList } = await useFetch(BACKEND_URL);
// const currentArticleId = ref(toRaw(articleList.value[0].id));
const currentArticleId = ref(null);

const {
  data: article,
  pending,
  refresh,
  error,
} = await useFetch(() => `${currentArticleId.value}/`, {
  baseURL: BACKEND_URL,
});

function updateArticle(id, slug) {
  currentArticleId.value = id;
  // console.log(slug)
}

// Page Refresh & New Access to the Article URL

const accessedURL = ref(route.params.slug);
watchEffect(() => {
  if (accessedURL.value && currentArticleId.value === null) {
    articleList.value.map((data) => {
      data.slug == accessedURL.value ? (currentArticleId.value = data.id) : "";
    });
  }
});


provide("article", article);
</script>
