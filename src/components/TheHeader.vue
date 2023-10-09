<script setup lang="ts">
// utilities
import { ref } from 'vue';

const drawer = ref<boolean | null>(null);

const emit = defineEmits<{
  (e: "toggleTheme"): void
}>();
</script>

<template>
  <div>
    <VNavigationDrawer v-model="drawer" absolute temporary width="150" height="340">
      <VList class="pt-4">
        <VListItem active-class="text-green" title="HOME" />
        <VListItem active-class="text-green" title="RESUME" />
        <VListItem active-class="text-green" title="SERVICES" />
        <VListItem active-class="text-green" title="PORTFOLIO" />
        <VListItem active-class="text-green" title="BLOG" />
        <VListItem active-class="text-green" title="CONTACT" />
      </VList>
    </VNavigationDrawer>
    <VToolbar density="compact" flat color="transparent" class="px-7">
      <VAppBarNavIcon class="d-flex d-md-none" />
      <VToolbarTitle class="logo ml-6">
        <span class="font-weight-light">Eldin</span>
        <span class="text-green font-weight-medium">Zaimovic</span>
      </VToolbarTitle>
      <VSpacer></VSpacer>
      <VBtn class="d-flex d-md-none" icon="mdi-weather-night" size="24px" flat />
      <VToolbarItems class="d-sm-none d-md-flex">
        <VBtn flat variant="text" text="Home" class="nav_link" />
        <VBtn flat text="Resume" />
        <VBtn flat text="Services" />
        <VBtn flat text="Portfolio" />
        <VBtn flat text="blog" />
        <VBtn flat text="Contact" />
        <VBtn icon="mdi-weather-night" rounded style="margin: 0 6px;" />
      </VToolbarItems>
    </VToolbar>
  </div>
</template>

<style lang="scss">
.logo {
  font-size: 24px !important;
  line-height: 32px !important;
}

.v-btn .v-btn--active {
  color: green;
  font-size: 24px !important;
  line-height: 32px !important;
}

.nav_link {
  font-size: 14px;

  & .v-btn__content {
    font-size: 14px !important;
  }

  & .v-btn__underlay {
    display: none;
  }
}
</style>
