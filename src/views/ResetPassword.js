import React, { useState } from "react";
import { Link } from "react-router-dom";

import InputForm from "../components/InputForm/InputForm";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import { resetPassword } from "../firebase/Auth";
import { validateEmail, isEmpty } from "../utils/validations";
import { errorCodes } from "../firebase/ErrorCode";

const figure2 = process.env.PUBLIC_URL + "/assets/figure3.png";
const person = process.env.PUBLIC_URL + "/assets/person2.png";

function checkIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

const initialState = {
  email: "",
};

export default function ResetPassword() {
  const [formState, setFormState] = useState(initialState);

  const [errorMessage, setErrorMessage] = useState(null);
  const [resetError, setResetError] = useState(null);
  const [succesMessage, setSuccesMessage] = useState(null);

  const onchange = async (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    resetError && setResetError(null);

    !validateEmail(value)
      ? isEmpty(value)
        ? setErrorMessage("El campo email no puede estar vacio")
        : setErrorMessage("No es un email valido")
      : setErrorMessage(null);
    setFormState(() => ({ ...formState, [name]: value }));
  };

  const submit = async () => {
    if (errorMessage) {
      console.log("Hay errores");
    } else {
      const result = await resetPassword(formState.email);

      if (result.code) {
        setResetError(errorCodes[result.code]);
      } else {
        setSuccesMessage(result);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen items-center bg-gray-100 max-w-sm">
      <div className="flex items-center flex-col">
        <img className="" src={figure2} alt="figure2" />
        <img className="-mt-20 w-72" src={person} alt="person2" />
      </div>

      {succesMessage && (
        <div className="flex bg-teal justify-center items-center font-semibold rounded mx-2 text-white  px-4 py-1  my-2">
          <div className="w-6 h-6 mr-2">{checkIcon()}</div>
          <p>{succesMessage}</p>
        </div>
      )}
      {resetError && (
        <p className="flex bg-red-500 rounded mx-4 text-white font-semibold px-2 py-1 justify-center my-2 ">
          {resetError}
        </p>
      )}
      <div className="flex flex-col px-10 py-6 bg-white shadow-lg mt-10 mx-5 rounded-md">
        <p className=" pb-4  text-gray-400">
          Te enviaremos un email con lo pasos para recuperar tu contraseña.
        </p>
        <InputForm
          label="Email de recuperación"
          name="email"
          onchange={onchange}
          formState={formState}
          errorMessage={errorMessage}
        />
        {!errorMessage && (
          <div className="px-8 mt-2 flex flex-col ">
            <ButtonPrimary text="Recuperar contraseña" onClick={submit} />
          </div>
        )}
      </div>
      <div className="flex justify-center mt-32">
        <Link className="text-teal font-medium" to="/login">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
}
