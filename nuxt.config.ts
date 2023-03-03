export default defineNuxtConfig({
  css: [
    "/assets/css/reset.css",
    "/assets/css/global.scss",
    "primevue/resources/themes/saga-blue/theme.css", //テーマカラーは色々あります。
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
    "/node_modules/primeflex/primeflex.css", //Flexをインストールした場合
  ],

  modules: ["@pinia/nuxt"],
  build: {
    transpile: ["primevue"],
  },

});
