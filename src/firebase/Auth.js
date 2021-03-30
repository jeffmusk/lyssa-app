import { myFirebase } from "../firebase";
import firebase from "firebase/app";

myFirebase.auth().languageCode = "es";

export const singOut = async () => {
  try {
    await myFirebase.auth().signOut();
    console.log("cerro sesión");
  } catch (e) {
    console.log("ocurrio un error");
    console.log(e);
  }
};

export const singInWithEmail = async (email, password) => {
  try {
    const user = await myFirebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(user);
    console.log("Inicio sesión");
  } catch (e) {
    console.log("ocurrio un error");
    console.log(e.message);
  }
};

export const singUpWithEmail = async (email, password) => {
  try {
    const user = await myFirebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(user);
    console.log("Se creo la cuenta correctamente");
  } catch (e) {
    console.log("ocurrio un error");
    console.log(e.message);
  }
};

export const singInWithGoogle = async () => {
  console.log("iniciando con google");
  try {
    var provider = new firebase.auth.GoogleAuthProvider();
    const user = await myFirebase.auth().signInWithRedirect(provider);
    console.log(user);
    console.log("Se creo la cuenta correctamente");
  } catch (e) {
    console.log("ocurrio un error");
    console.log(e.message);
  }
};
