import React, { useState } from "react";
import InputForm from "../components/InputForm/InputForm";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import { Link } from "react-router-dom";

const figure2 = process.env.PUBLIC_URL + "/assets/figure3.png";
const person = process.env.PUBLIC_URL + "/assets/person2.png";

const initialState = {
  name: "",
  email: "",
  password: "",
  checkbox: false,
};

export default function ResetPassword() {
  const [formState, setFormState] = useState(initialState);

  const onchange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormState(() => ({ ...formState, [e.target.name]: value }));
    console.log(target, value, name);
  };

  return (
    <div className="flex flex-col h-screen items-center bg-gray-100">
      <div className="flex items-center flex-col">
        <img className="" src={figure2} alt="figure2" />
        <img className="-mt-20 w-72" src={person} alt="person2" />
      </div>
      <div className="flex flex-col px-10 py-6 bg-white shadow-lg mt-10 mx-5 rounded-md">
        <p className=" pb-4  text-gray-400">
          Te enviaremos un email con lo pasos para recuperar tu contraseña.
        </p>
        <InputForm
          label="Email de recuperación"
          name="email"
          onchange={onchange}
          formState={formState}
        />
        <div className="px-8 mt-2 flex flex-col ">
          <ButtonPrimary text="Recuperar contraseña" />
        </div>
      </div>

      <div className="flex justify-center mt-32">
        <span className="text-gray-500 mr-1">Ir a </span>
        <Link className="text-teal font-medium" to="/login">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
}
