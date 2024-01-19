<script setup lang="ts">
const buttons = [
  {
    text: "🌟 Inscrições Renascer (Participantes)",
    to: "https://docs.google.com/forms/d/e/1FAIpQLSfsUhuuwULS2qTilNYAgoIUV_C39NaGkpdMgfjvxvAtTn1yUQ/viewform",
    target: "_blank",
  },
  {
    text: "Personalizar foto do Perfil",
    to: "/tools/profile-customization",
    target: "",
  },
  {
    text: "Conheça nosso CEV",
    to: "https://maps.app.goo.gl/EHbuBNbgBJwBXvuX6?g_st=ic",
    target: "_blank",
  },
];
</script>
<template>
  <section class="mx-auto md:w-1/2 xl:w-1/4">
    <div></div>
    <div>
      <ul class="grid grid-flow-row gap-3">
        <NuxtLink
          v-for="btn in buttons"
          class="text-center bg-white rounded text-[#e84411] py-3 px-6 font-extrabold w-full"
          :to="btn.to"
          :target="btn.target"
          >{{ btn.text }}
        </NuxtLink>
      </ul>
    </div>
  </section>
</template>
<style scoped>
.btn-home {
  @apply text-center bg-white rounded;
}
</style>
