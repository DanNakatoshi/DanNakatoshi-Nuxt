<template>
  <div id="app-container">
    <NuxtLayout name="main">
      <template #header>
        <BaseHeader />
      </template>

      <template #table>
        <BaseTable
          :articleList="articleList"
          @articleClicked="updateArticle"
          :currentArticleId="currentArticleId"
        />
      </template>
      <template #social>
        <BaseSocial />
      </template>

      <template #article>
        <BaseArticle :article="article" />
      </template>

      <template #sidebar>
        <!-- <BaseSidebar /> -->
      </template>

      <template #footer>
        <BaseFooter />
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { watch } from "vue";

const BACKEND_URL = "http://127.0.0.1:8000/api/blog/";
const { data: articleList } = await useFetch(BACKEND_URL);
const currentArticleId = ref(toRaw(articleList.value[0].id));

const {
  data: article,
  pending,
  refresh,
  error,
} = await useFetch(() => `${currentArticleId.value}/`, {
  baseURL: BACKEND_URL,
});

function updateArticle(id) {
  currentArticleId.value = id;
}

watch(currentArticleId, async (newId) => {
  currentArticleId.value = newId;
});
</script>
