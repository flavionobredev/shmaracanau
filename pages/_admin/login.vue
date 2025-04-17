<script setup lang="ts">
definePageMeta({
  name: "adm-login",
});
const { signIn, logout, loginLoading, user } = useFirebaseAuth();
const { push } = useRouter();
const handleLogin = async () => {
  signIn().then(() => {
    push({
      name: "adm-home",
    });
  });
};
</script>
<template>
  <pre>
    {{ user }}
  </pre>
  <UButton
    @click="handleLogin"
    size="lg"
    label="Fazer login com Google"
    variant="solid"
    color="warning"
    class="mt-4"
    :loading="loginLoading"
  >
    <UIcon name="mdi:google" />
    Entrar com o Google
  </UButton>

  <UButton
    @click="logout"
    size="lg"
    label="Sair"
    variant="solid"
    color="error"
    class="mt-4"
    :loading="loginLoading"
  >
    <UIcon name="mdi:logout" />
    Sair
  </UButton>
</template>
