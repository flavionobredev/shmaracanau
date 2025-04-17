export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server) return;
  if (!to.name || !to.name.toString().includes("adm-")) return;

  const { user } = useFirebaseAuth();
  const userLogged = user.value;

  if (to.name === "adm-login") {
    if (userLogged) {
      return await navigateTo({ name: "adm-home" });
    }
    return;
  }

  if (!userLogged) {
    return await navigateTo({ name: "adm-login" });
  }
});
