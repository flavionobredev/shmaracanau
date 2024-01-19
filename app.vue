<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    console.log("titleChunk", titleChunk);
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
