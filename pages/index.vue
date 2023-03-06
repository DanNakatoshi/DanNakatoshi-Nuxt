<template>
  <div class="w-full">
    <UiCard>
      <div class="flex flex-column p-3">
        <h1
          class="article-title neon-text xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl m-2"
        >
          Web Development in English and Japanese
        </h1>
        <div>Check out my open source projects</div>
        <div class="flex flex-wrap">
          <UiGithubCard
            title="JS Hiroba"
            description="Interactivee JavaScript terminal. You can see the result of console.log() from the browser"
            githubURL="https://github.com/TraitOtaku/JS-Hiroba"
            appURL="https://js-hiroba.com/"
          />

          <UiGithubCard
            title="Ticket Management App"
            description="Organize&Manage tickets with this customer support app! "
            githubURL="https://github.com/TraitOtaku/TicketApp-VueFrontend"
            appURL="http://172.104.81.40:82/login"
          />
        </div>
      </div>
    </UiCard>
  </div>
</template>

<script setup></script>

<style lang="scss"></style>
