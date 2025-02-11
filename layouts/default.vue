<script setup lang="ts"></script>
<template>
  <main class="main-default">
    <slot />
  </main>
</template>
<style scoped>
.main-default {
  @apply min-h-svh pb-20 w-[80svw] md:w-auto mx-auto md:mx-0;
}
</style>
