<script setup lang="ts"></script>
<template>
  <main class="main-default">
    <slot />
  </main>
</template>
<style scoped>
.main-default {
  @apply min-h-svh bg-[#e84411] pb-20;
}
</style>
