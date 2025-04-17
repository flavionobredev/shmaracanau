import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID,
  };
  if (!config) {
    throw new Error("Firebase config is not defined");
  }
  const firebaseApp = initializeApp(config);
  const auth = getAuth(firebaseApp);
  await auth.authStateReady();

  nuxtApp.provide("firebaseApp", firebaseApp);
  nuxtApp.vueApp.provide("firebaseApp", firebaseApp);
});
