<template>
  <div id="app-container">
    <NuxtLayout name="main">
      <template #header>
        <BaseHeader />
      </template>

      <template #table>
        <BaseTable />
      </template>

      <template #article>
        <BaseArticle />
      </template>

      <template #sidebar>
        <BaseSidebar />
      </template>

      <template #footer>
        <BaseFooter />
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup></script>
