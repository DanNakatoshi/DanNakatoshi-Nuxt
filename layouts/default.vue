<template>
  <div id="app-container">
    <div class="grid lg:m-3 md:m-2 m-1">
      <div class="col-12 flex lg:mt-3">
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
          <div class="my-3">
            <BaseSocial />
          </div>
        </div>
      </div>
      <div class="col-12 lg:col-8 flex" id="main-col">
        <BaseArticle :article="article" />

        <!-- <slot></slot> -->
      </div>
      <div class="col-12 flex"><BaseFooter /></div>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";

// const route = useRoute()

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
