import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
  if (!config) {
    throw new Error("Firebase config is not defined");
  }
  const firebaseApp = initializeApp(config);
  const auth = getAuth(firebaseApp);
  await auth.authStateReady();

  nuxtApp.provide("firebaseApp", firebaseApp);
  nuxtApp.vueApp.provide("firebaseApp", firebaseApp);
});
