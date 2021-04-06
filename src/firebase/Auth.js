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
    return user;
  } catch (e) {
    console.log("ocurrio un error");
    console.log(e.message);
    return e;
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
    return e;
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
    return "Email enviado";
  } catch (e) {
    console.log("ocurrio un error");
    console.log(e.message);
    return e;
  }
};

export const updateDisplayName = (displayName) => {
  let user = auth.currentUser;

  user
    .updateProfile({
      displayName: displayName,
    })
    .then((res) => {
      alert("El usuario fue actualizado");
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const updatePassword = (password) => {
  let user = auth.currentUser;
  user
    .updatePassword(password)
    .then((res) => {
      alert("Contraseña actualizada");
      return res;
    })
    .catch((error) => {
      alert("Por favor vuelva a ingresar para cambiar la contraseña");
      singOut();
      return error;
    });
};
