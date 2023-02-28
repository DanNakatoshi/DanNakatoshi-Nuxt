import PrimeVue from "primevue/config";
import Button from "primevue/button";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';



export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {ripple: true});
  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.component('DataTable', DataTable);
  nuxtApp.vueApp.component('Column', Column);
  nuxtApp.vueApp.component('InputText', InputText);
  nuxtApp.vueApp.component('Sidebar', Sidebar);
});