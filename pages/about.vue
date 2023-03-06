<template>
  <div class="w-full">
    <UiCard>
      <div class="p-3">
        <div>
          <p>
            Hi coders! I am Dan Nakatoshi. <br/>I came to the U.S. in 2015. since
            then, I've tried to find my carrier by trying many jobs in Japan and
            America. I would like to share my experience of how I started the coding
            journey in the timeline below. <br/>I also wanted to prove that if you don't
            give up, you can learn a new language like how I learned English,
            and you can write codes like how I write codes today!
          </p>
        </div>
        <div class="m-2 p-2 pb-4 timeline-container">
          <h5>Timeline</h5>
          <Timeline :value="events">
            <template #opposite="slotProps">
              <small class="">{{ slotProps.item.date }}</small>
            </template>
            <template #content="slotProps">
              {{ slotProps.item.event }}
            </template>
          </Timeline>
        </div>


      </div>
    </UiCard>
  </div>
</template>

<script setup>
const events = ref([
  {
    event: "Started learning Python",
    date: "March 2020",
  },
  {
    event: "Started learning Django(Python)",
    date: "August 2020",
  },
  {
    event: "Started learning JavaScript",
    date: "January 2021",
  },
  {
    event: "Started learning Linux(Ubuntu) Server",
    date: "June 2021",
  },
  {
    event: "Deployed Django app from Ubuntu Server",
    date: "March 2022",
  },
  {
    event: "Started Learning Vue(JapaScript)",
    date: "May 2022",
  },
  {
    event: "Deployed WordPress Coding Blog in Japanese",
    date: "June 2022",
  },

]);
</script>

<style lang="scss">
@import "/assets/css/global.scss";

.timeline-container {
  background-color: $Background;
}
</style>
