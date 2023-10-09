<template>
  <div class="d-flex justify-center align-center pt-6 px-16">
    <VueCompareImage keyboard :leftImage="img1" :rightImage="img2" hover :slider-line-width="0" :handle-size="0"
      handle="<div />" />
  </div>
</template>

<script lang="ts" setup>
// assets
import img2 from "@/assets/elding-light-2.jpeg";
import img1 from "@/assets/elding-light.jpg";

</script>
