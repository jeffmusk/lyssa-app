import React, { useState } from "react";
import { Link } from "react-router-dom";

import InputForm from "../components/InputForm/InputForm";
import InputPassword from "../components/InputForm/InputPassword";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
import {
  validateEmail,
  validatePassword,
  isEmpty,
  comparePasswords,
} from "../utils/validations";
import { singUpWithEmail, singInWithGoogle } from "../firebase/Auth";
import { errorCodes } from "../firebase/ErrorCode";

const figure2 = process.env.PUBLIC_URL + "/assets/figure2.png";
const person = process.env.PUBLIC_URL + "/assets/person1.png";
const google = process.env.PUBLIC_URL + "/assets/google.png";

const initialState = {
  email: "",
  password: "",
  repeatPassword: "",
  checkbox: true,
};

const initialErrors = {
  email: null,
  password: null,
  repeatPassword: null,
  errorSignUp: null,
};

export default function SingUp() {
  const [formState, setFormState] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState(initialErrors);

  function validateErrors(name, value) {
    switch (name) {
      case "email":
        if (validateEmail(value)) {
          setErrorMessage(() => ({ ...errorMessage, [name]: null }));
        } else {
          if (isEmpty(value)) {
            setErrorMessage(() => ({
              ...errorMessage,
              [name]: "El campo email es obligatorio",
            }));
          } else {
            setErrorMessage(() => ({
              ...errorMessage,
              [name]: "No es un email valido",
            }));
          }
        }
        break;
      case "password":
        if (validatePassword(value)) {
          setErrorMessage(() => ({ ...errorMessage, [name]: null }));
        } else {
          if (isEmpty(value)) {
            setErrorMessage(() => ({
              ...errorMessage,
              [name]: "El campo contraseña es obligatorio",
            }));
          } else {
            setErrorMessage(() => ({
              ...errorMessage,
              [name]: "debe tener entre 6 y 10 caracteres",
            }));
          }
        }
        break;
      case "repeatPassword":
        if (comparePasswords(value, formState.password)) {
          setErrorMessage(() => ({ ...errorMessage, [name]: null }));
        } else {
          setErrorMessage(() => ({
            ...errorMessage,
            [name]: "Las contraseñas no coinciden",
          }));
        }
        break;
      default:
        break;
    }
  }

  function validateSubmit() {
    !validateEmail(formState.email) &&
      setErrorMessage(() => ({
        ...errorMessage,
        email: "Correo invalido",
      }));

    !validatePassword(formState.password) &&
      setErrorMessage(() => ({
        ...errorMessage,
        password: "Contraseña invalida",
      }));

    !comparePasswords(formState.password, formState.repeatPassword) &&
      setErrorMessage(() => ({
        ...errorMessage,
        repeatPassword: "Las contraseñas  no coinciden",
      }));
  }

  const onchange = async (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    validateErrors(name, value);
    errorMessage.errorSignUp &&
      setErrorMessage(() => ({
        ...errorMessage,
        errorSignUp: null,
      }));
    setFormState(() => ({ ...formState, [name]: value }));
  };

  const submit = async (e) => {
    e.persist();
    await validateSubmit();

    if (
      errorMessage.email === null &&
      errorMessage.password === null &&
      errorMessage.repeatPassword === null
    ) {
      const result = await singUpWithEmail(formState.email, formState.password);
      console.log(result);
      if (result.code) {
        setErrorMessage(() => ({
          ...errorMessage,
          errorSignUp: errorCodes[result.code],
        }));
      }
      result.code && console.log(result.message);
      //TODO validar que pasa si firebase devuelve un error que no este en los codigos
    }
  };

  return (
    <div className="max-w-sm">
      <div className="flex -mt-5 -mr-4 justify-end z-20">
        <img src={figure2} alt="firgure" className="w-2/3" />
      </div>
      <div className="flex -mt-48  mr-2 z-10 ">
        <img src={person} alt="person" />
      </div>

      <div className="formSignUp flex items-center flex-col ">
        <h1 className="font-semibold my-4 text-gray-500 text-lg">
          ¡Registrate ahora!
        </h1>
        <div className="px-8">
          {errorMessage.errorSignUp && (
            <p className="flex bg-red-500 rounded text-white font-semibold px-2 py-1 justify-center mt-2 ">
              {errorMessage.errorSignUp}
            </p>
          )}
        </div>
        <div className="w-full px-10">
          <InputForm
            label="Email"
            name="email"
            onchange={onchange}
            formState={formState}
            errorMessage={errorMessage.email}
          />
          <InputPassword
            label="Contraseña"
            name="password"
            onchange={onchange}
            formState={formState}
            errorMessage={errorMessage.password}
          />
          <InputPassword
            label="Repita la Contraseña"
            name="repeatPassword"
            onchange={onchange}
            formState={formState}
            errorMessage={errorMessage.repeatPassword}
          />
          <div className="flex items-center gap-1 cursor-pointer ">
            <input
              type="checkbox"
              name="checkbox"
              checked={formState.checkbox}
              onChange={onchange}
              className="form-checkbox h-6 w-6 text-teal"
            />
            <span>Recordarme</span>
          </div>
        </div>
        <div className="w-full ">
          <div className="px-20 mt-6 flex flex-col gap-3">
            <ButtonPrimary text="Registrarme" onClick={submit} />
            <ButtonSecondary
              text="iniciar con Google"
              icon={google}
              onClick={singInWithGoogle}
            />
          </div>
        </div>
        <div className="flex justify-center mt-11">
          <span className="text-gray-500 mr-1">Aun no tengo cuenta</span>
          <Link className="text-teal font-medium" to="/login">
            Iniciar Sessión
          </Link>
        </div>
      </div>
    </div>
  );
}
