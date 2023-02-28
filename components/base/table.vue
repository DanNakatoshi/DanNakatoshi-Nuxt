<template>
  <UiCard>
    <DataTable
      :value="data"
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

// p-datatable-tbody
const data = [
  {
    id: "1000",
    title: "JavaScriptでスクレイピングをしよう",
    lang: "js",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1001",
    title: "DjangoのREST APIを試してみる",
    lang: "Black Watch",
    description: "Product Description",
    image: "black-watch.jpg",
    price: 72,
    category: "Accessories",
    quantity: 61,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1002",
    title: "zz21cz3c1",
    lang: "js",
    description: "Product Description",
    image: "blue-band.jpg",
    price: 79,
    category: "Fitness",
    quantity: 2,
    inventoryStatus: "LOWSTOCK",
    rating: 3,
  },
  {
    id: "1003",
    title: "244wgerg2",
    lang: "Blue T-Shirt",
    description: "Product Description",
    image: "blue-t-shirt.jpg",
    price: 29,
    category: "Clothing",
    quantity: 25,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1004",
    title: "h456wer53",
    lang: "Bracelet",
    description: "Product Description",
    image: "bracelet.jpg",
    price: 15,
    category: "Accessories",
    quantity: 73,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1005",
    title: "av2231fwg",
    lang: "Brown Purse",
    description: "Product Description",
    image: "brown-purse.jpg",
    price: 120,
    category: "Accessories",
    quantity: 0,
    inventoryStatus: "OUTOFSTOCK",
    rating: 4,
  },
  {
    id: "1006",
    title: "bib36pfvm",
    lang: "Chakra Bracelet",
    description: "Product Description",
    image: "chakra-bracelet.jpg",
    price: 32,
    category: "Accessories",
    quantity: 5,
    inventoryStatus: "LOWSTOCK",
    rating: 3,
  },
  {
    id: "1007",
    title: "mbvjkgip5",
    lang: "Galaxy Earrings",
    description: "Product Description",
    image: "galaxy-earrings.jpg",
    price: 34,
    category: "Accessories",
    quantity: 23,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1008",
    title: "vbb124btr",
    lang: "Game Controller",
    description: "Product Description",
    image: "game-controller.jpg",
    price: 99,
    category: "Electronics",
    quantity: 2,
    inventoryStatus: "LOWSTOCK",
    rating: 4,
  },
  {
    id: "1009",
    title: "cm230f032",
    lang: "Gaming Set",
    description: "Product Description",
    image: "gaming-set.jpg",
    price: 299,
    category: "Electronics",
    quantity: 63,
    inventoryStatus: "INSTOCK",
    rating: 3,
  },
  {
    id: "1011",
    title: "cm230f032",
    lang: "Gaming Set",
    description: "Product Description",
    image: "gaming-set.jpg",
    price: 299,
    category: "Electronics",
    quantity: 63,
    inventoryStatus: "INSTOCK",
    rating: 3,
  },
];
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
