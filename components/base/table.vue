<template>
  <UiCard>
    <div>
      <DataTable
        :value="props.articleList"
        :paginator="true"
        :rows="10"
        dataKey="id"
        responsiveLayout="scroll"
        v-model:filters="filters"
        :globalFilterFields="['title']"
      >
        <template #header>
          <div class="header-bg flex justify-content-between">
            <div class="w-full">
              <span class="p-input-icon-left m-2">
                <i class="pi pi-search" />
                <InputText
                  v-model="filters['global'].value"
                  placeholder="Keyword Search"
                />
              </span>

              <Button @click="openAdvancedFilter" class="m-2"
                >Advanced Filter</Button
              >

              <Sidebar v-model:visible="isAdvancedFilterOpen">
                <div class="flex flex-column justify-content-start">
                  <div class="m-2 flex flex-column">
                    <span class="text-sm m-1">難易度:</span>
                    <Dropdown
                      v-model="selectedDiff"
                      :options="diffOption"
                      optionLabel="name"
                      placeholder="Difficulty"
                      @change="applyDiffFilter"
                    />
                  </div>
                  <div class="m-2 flex flex-column">
                    <span class="text-sm m-1">言語:</span>

                    <Dropdown
                      v-model="selectedLang"
                      :options="langOption"
                      optionLabel="name"
                      placeholder="Language"
                      @change="applyLangFilter"
                    />
                  </div>
                </div>
              </Sidebar>

              <Button
                type="button"
                icon="pi pi-filter-slash"
                label="Clear"
                class="m-2"
                @click="clearFilter()"
              />
            </div>
          </div>
        </template>

        <Column field="title">
          <template #body="slotProps">
            <NuxtLink :to="slotProps.data.slug">
              <div
                class="dt-title mt-2 non-active-table"
                @click="$emit('articleClicked', slotProps.data.id, slotProps.data.slug)"
              >
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
                  <div v-for="tech in slotProps.data.technology" key="tech.id">
                    <img
                      v-if="tech.name == 'JavaScript'"
                      class="pt-2 m-2"
                      src="/img/icon/js.svg"
                      :alt="tech.name"
                    />
                    <img
                      v-if="tech.name == 'Python'"
                      class="pt-2 m-2"
                      src="/img/icon/py.svg"
                      :alt="tech.name"
                    />
                  </div>
                </div>
                <div class="difficulty-wrapper">
                  <span
                    class="difficulty-wrapper__text anyone-banner"
                    v-if="slotProps.data.difficulty == 'Anyone'"
                    >{{ slotProps.data.difficulty }}</span
                  >
                  <span
                    class="difficulty-wrapper__text beginner-banner"
                    v-if="slotProps.data.difficulty == 'Beginner'"
                    >{{ slotProps.data.difficulty }}</span
                  >
                  <span
                    class="difficulty-wrapper__text intermediate-banner"
                    v-if="slotProps.data.difficulty == 'Intermediate'"
                    >{{ slotProps.data.difficulty }}</span
                  >
                  <span
                    class="difficulty-wrapper__text advanced-banner"
                    v-if="slotProps.data.difficulty == 'Advanced'"
                    >{{ slotProps.data.difficulty }}</span
                  >
                </div>
              </div>
            </NuxtLink>
          </template>
        </Column>
      </DataTable>
    </div>
  </UiCard>
</template>

<script setup>
import { FilterMatchMode, FilterOperator } from "primevue/api";
// import { useArticleStore } from "~/stores/articleStore";
// import { defineProps } from "vue";

const props = defineProps(["articleList", "currentArticleId"]);

// const articlePinia = useArticleStore();
// const { articleData } = articlePinia;

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  difficulty: { value: null, matchMode: FilterMatchMode.EQUALS },
  is_english: { value: null, matchMode: FilterMatchMode.EQUALS },
});
const clearFilter = () => {
  selectedDiff.value = null;
  initFilters();
};
const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    difficulty: { value: null, matchMode: FilterMatchMode.EQUALS },
    is_english: { value: null, matchMode: FilterMatchMode.EQUALS },
  };
};

// Advanced Filter Option
const isAdvancedFilterOpen = ref(false);
function openAdvancedFilter() {
  isAdvancedFilterOpen.value = !isAdvancedFilterOpen.value;
}

// Difficulty Filter
const selectedDiff = ref(null);
const diffOption = [
  { name: "Anyone", code: "anyone" },
  { name: "Beginner", code: "beginner" },
  { name: "Intermediate", code: "intermediate" },
  { name: "Advanced", code: "advanced" },
];
function applyDiffFilter(e) {
  filters.value.difficulty.value = e.value.code;
}
// Difficulty Filter
const selectedLang = ref(null);
const langOption = [
  { name: "Japanese", code: "false" },
  { name: "English", code: "true" },
];
function applyLangFilter(e) {
  filters.value.is_english.value = e.value.code;
}

// function activateTable(id) {
//   console.log(id);
// }
// ROUTE
</script>

<style lang="scss">
@import "/assets/css/global.scss";

.p-datatable .p-datatable-thead > tr > th {
  border: 0;
  // background: transparent;
}
.p-datatable .p-datatable-tbody > tr {
  color: $White;
  background: transparent;
  margin: 5px 0 5px 0;
  &:hover {
    background-color: $Cyan;
  }
}
.p-datatable .p-datatable-tbody > tr > td {
  border: 0;
  padding: 10px;
  // margin: 10px;
}
.p-paginator {
  background: transparent;
  border: 0;
}
// .active-table {
//   background-color: $Foreground;
//   color: $Background;
// }

.non-active-table {
  background-color: $Background;
}

.dt-title {
  clip-path: polygon(
    0 0,
    36% 0,
    41% 15%,
    80% 15%,
    84% 0,
    96% 0,
    100% 22%,
    100% 100%,
    2% 100%,
    0% 85%
  );

  /*
  mask-image: linear-gradient(
    45deg,
    #000 25%,
    rgba(0, 0, 0, 0.2) 50%,
    #000 75%
  );

  mask-size: 800%;
  mask-position: 0;
  */

  padding: 10px 10px 10px 10px;
  margin: 3px;

  position: relative;
  &:hover {
    transition: mask-position 1.5s ease;
    mask-position: 120%;
    opacity: 1;
    background-color: $Selection;
    color: $White;
    // transform: scale(1.03);
  }
  .dt-title__index {
    font-size: 13px;
    padding-bottom: 7px;
    font-family: "DotGothic16", Fallback, Roboto;
  }
  .dt-title__text {
    font-family: "Noto Sans Japanese", Fallback, Roboto;
    font-weight: 700;
    line-height: 130%;
  }

  .difficulty-wrapper {
    .difficulty-wrapper__text {
      font-family: "DotGothic16", Fallback, Roboto;
      color: $CurrentLine;
      position: absolute;
      right: 0;
      bottom: 0px;
      padding: 10px 10px 10px 15px;
      clip-path: polygon(0 31%, 10% 1%, 100% 0, 100% 100%, 0 100%);
    }
    .anyone-banner {
      background-color: $Green;
    }
    .beginner-banner {
      background-color: $Magenta;
    }
    .intermediate-banner {
      background-color: $Yellow;
    }
    .advanced-banner {
      background-color: $Red;
    }
  }
}

#side-col > div > div > div > div > div > div > div.p-datatable-wrapper > table > tbody > tr > td > a {
  text-decoration: none;
}

.p-datatable .p-datatable-header {
  background-color: transparent;
  border-width: 0;
  border: 0;
}

.p-datatable .p-datatable-thead > tr > th {
  padding: 0px;
}
.p-inputtext {
  background-color: $White;
  opacity: 1;
}

/* Pagenation */
.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
  background: $Orange;
  border-color: $Orange;
  border-width: 2px;
  color: $Background;
  box-shadow: 0px 0px 30px 3px rgba(197, 228, 120, 0.4);
}

// .p-paginator-page{
//   &:hover {
//     background-color: $Blue;
//   }
// }
</style>
