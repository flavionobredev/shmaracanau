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

  // Validate Firebase configuration
  const missingKeys = Object.entries(config).filter(([key, value]) => !value).map(([key]) => key);
  if (missingKeys.length > 0) {
    throw new Error(`Firebase config is missing the following keys: ${missingKeys.join(", ")}`);
  }

  const firebaseApp = initializeApp(config);
  const auth = getAuth(firebaseApp);
  await auth.authStateReady();

  nuxtApp.provide("firebaseApp", firebaseApp);
  nuxtApp.vueApp.provide("firebaseApp", firebaseApp);
});
