<template>
  <UiCard>
    <DataTable
      :value="articleData"
      :paginator="true"
      :rows="10"
      dataKey="id"
      responsiveLayout="scroll"
      v-model:filters="filters"
      :globalFilterFields="['title']"
    >
      <template #header>
        <div class="header-bg flex justify-content-between">
          <div>
            <span class="p-input-icon-left pr-3">
              <i class="pi pi-search" />
              <InputText
                v-model="filters['global'].value"
                placeholder="Keyword Search"
              />
            </span>
            <Button
              type="button"
              icon="pi pi-filter-slash"
              label="Clear"
              class="p-button-outlined"
              @click="clearFilter()"
            />
          </div>
        </div>
      </template>

      <Column field="title">
        <template #body="slotProps">
          <div class="dt-title mt-2">
            <img src="/img/parts/list/title-top.png" class="list-title-top" />
            <div class="dt-title__index">
              {{
                slotProps.index < 9
                  ? "0" + (slotProps.index + 1)
                  : slotProps.index + 1
              }}
            </div>
            <div class="dt-title__text">
              {{ slotProps.data.title }}
            </div>
            <div class="flex flex-wrap align-items-center">
              <img class="pt-2 m-2" src="/img/icon/js.svg" />
              <img class="pt-2 m-2" src="/img/icon/py.svg" />
            </div>
            <div class="dificculty-wrapper">
              <div class="dificculty-wrapper__text">初心者向け</div>
            </div>
          </div>
        </template>
      </Column>
    </DataTable>
  </UiCard>
</template>

<script setup>
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { useArticleStore } from "~/stores/articleStore";

const articlePinia = useArticleStore();
const { articleData } = articlePinia


const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});
const clearFilter = () => {
  initFilters();
};
const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  };
};
</script>

<style lang="scss">
.p-datatable .p-datatable-thead > tr > th {
  border: 0;
  background: transparent;
}
.p-datatable .p-datatable-tbody > tr {
  color: white;
  background: transparent;
  margin: 5px 0 5px 0;
}
.p-datatable .p-datatable-tbody > tr > td {
  border: 0;
  padding: 10px;
  margin: 10px;
}
.p-paginator {
  background: transparent;
  border: 0;
}
.dt-title {
  background-color: #011627;
  padding: 12px 10px 10px 10px;
  margin: 3px;
  position: relative;
  .list-title-top {
    position: absolute;
    top: -10px;
    left: 0px;
    z-index: -1;
  }
  .dt-title__index {
    position: absolute;
    font-size: 10px;
    top: -8px;
    left: 10px;
    z-index: 1;
  }
  .dt-title__text {
    font-family: "Noto Sans Japanese", Fallback, Roboto;
    font-weight: 700;
  }
  .dificculty-wrapper {
    position: absolute;
    right: 0;
    bottom: 10px;
    background-color: #7e57c2;
    padding: 10px;
    opacity: 0.8;
  }
}
.p-datatable .p-datatable-header {
  background-color: transparent;
  border-width: 0;
  border: 0;
}
.p-inputtext {
  background-color: white;
  opacity: 1;
}
</style>
