import { myFirebase } from "../firebase";
import firebase from "firebase/app";

const auth = myFirebase.auth();
auth.languageCode = "es";

export const singOut = async () => {
  try {
    await auth.signOut();
    console.log("cerro sesión");
  } catch (e) {
    console.log("ocurrio un error");
    console.log(e);
  }
};

export const singInWithEmail = async (email, password) => {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    console.log(user);
    console.log("Inicio sesión");
  } catch (e) {
    console.log("ocurrio un error");
    console.log(e.message);
  }
};

export const singUpWithEmail = async (email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    console.log(res);
    const user = auth.currentUser;

    user
      .sendEmailVerification()
      .then(function () {
        console.log("Email enviado");
      })
      .catch(function (e) {
        console.log("ocurrio un error", e);
      });
    console.log(
      "Se creo la cuenta correctamente y se envio el email para validar el email"
    );
    return user;
  } catch (e) {
    console.log("ocurrio un error");
    console.log(e.message);
  }
};

export const singInWithGoogle = async () => {
  try {
    var provider = new firebase.auth.GoogleAuthProvider();
    const user = await auth.signInWithRedirect(provider);

    console.log(user);
    console.log("Se creo la cuenta correctamente");
  } catch (e) {
    console.log("ocurrio un error");
    console.log(e.message);
  }
};

export const resetPassword = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
  } catch (e) {
    console.log("ocurrio un error");
    console.log(e.message);
  }
};
