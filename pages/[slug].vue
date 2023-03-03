<template>
  <BaseArticle :article="article" />
</template>

<script setup>
import { inject } from "vue";

const article = inject("article");
</script>
