import React, { useState } from "react";
import InputForm from "../components/InputForm/InputForm";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";
import { Link } from "react-router-dom";

const figure2 = process.env.PUBLIC_URL + "/assets/figure2.png";
const person = process.env.PUBLIC_URL + "/assets/person1.png";
const google = process.env.PUBLIC_URL + "/assets/google.png";

const initialState = {
  name: "",
  email: "",
  password: "",
  checkbox: true,
};

export default function SingUp() {
  const [formState, setFormState] = useState(initialState);

  const onchange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormState(() => ({ ...formState, [e.target.name]: value }));
    console.log(target, value, name);
  };
  return (
    <div className="container ">
      <div className="flex  -mt-5 -mr-2 justify-end z-20">
        <img src={figure2} alt="firgure" className="w-2/3" />
      </div>
      <div className="flex -mt-48  mr-2 z-10 ">
        <img src={person} alt="person" />
      </div>

      <div className="formSignUp flex items-center flex-col ">
        <h1 className="font-semibold mt-2 text-gray-500 text-lg">
          ¡Registrate ahora!
        </h1>
        <div className="flex flex-col gap-1 pt-5 mt-1">
          <InputForm
            label="Nombre"
            name="name"
            onchange={onchange}
            formState={formState}
          />
          <InputForm
            label="Email"
            name="email"
            onchange={onchange}
            formState={formState}
          />
          <InputForm
            label="Contraseña"
            name="password"
            onchange={onchange}
            formState={formState}
          />
          <div className="flex items-center gap-1 cursor-pointer -mt-4">
            <input
              type="checkbox"
              name="checkbox"
              checked={formState.checkbox}
              onChange={onchange}
            />
            <span>Recordarme</span>
          </div>
          <div className="w-full ">
            <div className="px-20 mt-6 flex flex-col gap-3">
              <ButtonPrimary text="Registrarme" />
              <ButtonSecondary text="iniciar con Google" icon={google} />
            </div>
            <div className="flex justify-center mt-11">
              <span className="text-gray-500 mr-1">Aun no tengo cuenta</span>
              <Link className="text-teal font-medium" to="/login">
                Iniciar Sessión
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
