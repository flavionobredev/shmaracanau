<script setup lang="ts">
useHead({
  title: "Apaixonados por Deus e pela evangelização!",
});
const buttons = [
  {
    text: "🌟 Inscrições Renascer (Participantes)",
    to: "https://docs.google.com/forms/d/e/1FAIpQLSfsUhuuwULS2qTilNYAgoIUV_C39NaGkpdMgfjvxvAtTn1yUQ/viewform",
    target: "_blank",
  },
  {
    text: "👕 Encomende sua blusa do Renascer",
    to: "https://forms.gle/SznS7rHYNp6Aq6WW6",
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
  <section class="mx-auto md:w-1/2 xl:w-1/4 flex flex-col gap-4">
    <div class="my-8">
      <header class="flex flex-col items-center">
        <img
          src="./../assets/images/logos/logo-home.svg"
          alt="Logo da Comunidade Católica Shalom"
          class="mx-auto w-[78px] md:w-[96px] mb-4"
        />
        <h1 class="text-center text-xl md:text-3xl font-extrabold text-white">
          Shalom Maracanaú
        </h1>
        <h2 class="text-center md:text-lg text-white">
          Apaixonados por Deus e pela evangelização!
        </h2>
        <a
          href="https://instagram.com/shalommaracanau"
          target="_blank"
          class="click mt-3 text-[#e84411] font-bold text-xs md:text-sm bg-[#f9c997] rounded py-1 px-2"
          >@shalommaracanau</a
        >
      </header>
    </div>
    <div>
      <ul class="grid grid-flow-row gap-3">
        <NuxtLink
          v-for="btn in buttons"
          class="click text-center bg-white rounded text-[#e84411] py-3 px-6 font-extrabold w-full"
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
