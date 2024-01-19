<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Shalom Maracanaú` : "Shalom Maracanaú";
  },
});
</script>
<template>
  <div>
    <NuxtLayout>
      <RouterView />
    </NuxtLayout>
  </div>
</template>
