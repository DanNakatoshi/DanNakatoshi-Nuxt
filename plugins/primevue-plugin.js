import PrimeVue from "primevue/config";
import Button from "primevue/button";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';
import Badge from 'primevue/badge';
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';



export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {ripple: true});
  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.component('DataTable', DataTable);
  nuxtApp.vueApp.component('Column', Column);
  nuxtApp.vueApp.component('InputText', InputText);
  nuxtApp.vueApp.component('Sidebar', Sidebar);
  nuxtApp.vueApp.component('Badge', Badge);
  nuxtApp.vueApp.component('Dropdown', Dropdown);
  nuxtApp.vueApp.component('MultiSelect', MultiSelect);
});