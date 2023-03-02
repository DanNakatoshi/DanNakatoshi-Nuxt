<template>
  <div id="app-container">
    <NuxtLayout name="main">
      <template #header>
        <BaseHeader />
      </template>

      <template #table>
        <BaseTable
        />
      </template>
      <template #social>
        <BaseSocial />
      </template>

      <template #article>
        <BaseAbout />
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
