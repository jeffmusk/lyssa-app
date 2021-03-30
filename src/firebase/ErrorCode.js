export const errorCodes = {
  "auth/email-already-in-use":
    "La dirección de correo electrónico ya está siendo utilizada por otra cuenta.",
  "auth/credential-already-in-use":
    "Las credenciales ya estan vinculadas con otra cuenta",
  "auth/account-exists-with-different-credential":
    "La cuenta ya existe con diferentes credendiales",
  "auth/internal-error":
    "El servidor de autenticación encontró un error inesperado cuando se intentaba procesar la solicitud, intentelo nuevamente en unos minutos ",
  "auth/wrong-password":
    "La contraseña no es válida o el usuario no tiene contraseña.",
  "auth/user-not-found":
    "No hay ningún registro de usuario que corresponda a este identificador. Es posible que se haya eliminado al usuario.",
  "auth/too-many-requests":
    "El acceso a esta cuenta se ha desactivado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede restaurarlo inmediatamente restableciendo su contraseña o puede intentarlo de nuevo más tarde.",
};
