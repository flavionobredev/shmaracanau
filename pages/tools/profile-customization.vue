<!-- // https://codesandbox.io/p/sandbox/vue-advanced-cropper-composition-api-5z0ww0?file=%2Fsrc%2FApp.vue%3A1%2C1-17%2C12 -->
<script setup lang="ts">
useHead({
  title: "Personalize sua foto"
})
import AvatarCustomizationTool from "~/components/molecules/avatar-customization-tool.vue";
</script>
<template>
  <header class="text-center py-5 text-white mb-3 md:mb-6 mx-auto w-[80%] md:w-auto">
    <img src="../../assets/images/logos/renascer-2024.svg" class="mx-auto w-[100px] md:w-[150px]" />
    <p class="text-xs text-white italic mb-4">2 a 4/mar - Liceu de Maracanaú</p>
    <h1 class="font-extrabold text-lg md:text-2xl">Renascer... Eu vou!</h1>
    <h2 class="text-sm md:text-base">
      Personalize sua foto de perfil com a imagem do Renascer 2025!
    </h2>
  </header>
  <AvatarCustomizationTool />
</template>
<style scoped></style>
