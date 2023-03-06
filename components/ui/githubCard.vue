<template>
  <div class="github-card-container m-2">
    <div class="flex flex-column p-2">
      <div class="mb-3">
        
        <span class="mr-2">
          <Button :aria-label="props.title">
            <a :href="props.appURL" target="_blank" class="link-btn">
              <span class="text-md">{{ props.title }}</span>
            </a>
          </Button>
        </span>

        <Button aria-label="GitHub">
          <a :href="props.githubURL" target="_blank" class="link-btn">
            <i class="pi pi-github mr-2"></i>
            <span class="text-md">GitHub</span>
          </a>
        </Button>


      </div>
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title", "description", "githubURL", "appURL"]);
</script>

<style lang="scss">
@import "/assets/css/global.scss";

.github-card-container {
  border-style: solid;
  border-width: 3px;
  border-color: $Orange;
  padding: 3px;
  border-radius: 5px;
}
</style>
