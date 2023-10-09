<script setup lang="ts">

// components
import { TheHeader, TheFooter } from './components';
</script>


<template>
  <VApp>
    <VMain>
      <VContainer class="pa-6">
        <TheHeader />
      </VContainer>
        <RouterView v-slot="{ Component}">
          <transition name="router-animation" mode="out-in" enter-active-class="animated fadeIn fast"
            leave-active-class="animated fadeOut faster">
            <component :is="Component" />
          </transition>
          </RouterView>
    </VMain>
    <TheFooter />
  </VApp>
</template>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
</style>

