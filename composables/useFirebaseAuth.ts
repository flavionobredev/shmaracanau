import type { FirebaseApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  type User,
} from "firebase/auth";

export default function () {
  const firebaseApp = useNuxtApp().$firebaseApp as FirebaseApp;

  const auth = getAuth(firebaseApp);
  const loginLoading = useState<boolean>("fb_login_loading", () => false);

  const user = useState<User | null>("fb_user", () => null);

  if (auth.currentUser) {
    user.value = auth.currentUser;
  }

  const signIn = async () => {
    try {
      loginLoading.value = true;
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      user.value = result.user;
      console.log("User signed in: ", user.value);
    } catch (error) {
      auth.signOut();
      console.error("Error signing in: ", error);
      throw new Error("Error signing in");
    } finally {
      loginLoading.value = false;
    }
  };

  const logout = async () => {
    try {
      loginLoading.value = true;
      await auth.signOut();
      user.value = null;
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out: ", error);
      throw new Error("Error signing out");
    } finally {
      loginLoading.value = false;
    }
  };

  return {
    loginLoading,
    user,
    signIn,
    logout,
  };
}
