import React, { useState } from "react";
import { Link } from "react-router-dom";

import InputForm from "../components/InputForm/InputForm";
import InputPassword from "../components/InputForm/InputPassword";

import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";

import { singInWithEmail, singInWithGoogle } from "../firebase/Auth";
import { validateEmail, validatePassword, isEmpty } from "../utils/validations";
import { errorCodes } from "../firebase/ErrorCode";

const initialState = {
  email: "",
  password: "",
};

const initialErrors = {
  email: null,
  password: null,
  errorSignIn: null,
};
const lyssa = process.env.PUBLIC_URL + "/assets/lyssa.png";
const google = process.env.PUBLIC_URL + "/assets/google.png";
const figure1 = process.env.PUBLIC_URL + "/assets/figure1.png";

export default function Login() {
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

      default:
        break;
    }
  }

  const onchange = async (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    validateErrors(name, value);
    errorMessage.errorSignIn &&
      setErrorMessage(() => ({
        ...errorMessage,
        errorSignIn: null,
      }));
    setFormState(() => ({ ...formState, [name]: value }));
  };

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
  }

  const submit = async (e) => {
    e.persist();
    await validateSubmit();

    if (errorMessage.email === null && errorMessage.password === null) {
      const result = await singInWithEmail(formState.email, formState.password);
      console.log(result);
      if (result.code) {
        setErrorMessage(() => ({
          ...errorMessage,
          errorSignIn: errorCodes[result.code],
        }));
      }
      result.code && console.log(result.message);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="imageHeader relative">
        <div className="figure1 -m-2 relative">
          <img src={figure1} alt="image" />
          <h1 className="absolute  top-5 left-4 z-0 font-bold text-white text-3xl ">
            Organiza tu <br /> día con <br /> Lyssa
          </h1>
        </div>
        <div className="flex relative justify-center z-10 -mt-48 w-full px-16  ">
          <img src={lyssa} alt="Lyssa" />
        </div>
      </div>

      <h1 className="w-full flex justify-center font-bold text-lg text-gray-500 mt-8 mb-2">
        Ingresar
      </h1>
      <div className="px-8">
        {errorMessage.errorSignIn && (
          <p className="flex bg-red-500 rounded text-white font-semibold px-2 py-1 justify-center my-2 ">
            {errorMessage.errorSignIn}
          </p>
        )}
      </div>

      <div className=" w-full px-12 ">
        <InputForm
          label={"Email"}
          name={"email"}
          onchange={onchange}
          formState={formState}
          errorMessage={errorMessage.email}
        />
        <InputPassword
          label={"Contraseña"}
          name={"password"}
          onchange={onchange}
          formState={formState}
          errorMessage={errorMessage.password}
        />
        <div className="flex justify-end">
          <Link
            className="text-gray-400 font-normal text-sm siz -mt-2 mb-2"
            to="/resetpassword"
          >
            Olvide mi contraseña
          </Link>
        </div>
      </div>
      <div className="w-full ">
        <div className="px-20 mt-7 flex flex-col gap-3">
          <ButtonPrimary text="Iniciar Sesíon" onClick={submit} />
          <ButtonSecondary
            text="Seguir con Google"
            icon={google}
            onClick={singInWithGoogle}
          />
        </div>
        <div className="flex justify-center mt-14">
          <span className="text-gray-500 mr-1">Aun no tengo cuenta</span>
          <Link className="text-teal font-medium" to="/singup">
            Registrarme
          </Link>
        </div>
      </div>
    </div>
  );
}
