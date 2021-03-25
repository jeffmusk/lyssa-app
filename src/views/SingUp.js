import React, { useState } from "react";
import InputForm from "../components/InputForm/InputForm";
const figure2 = process.env.PUBLIC_URL + "/assets/figure2.png";
const person = process.env.PUBLIC_URL + "/assets/person1.png";

const initialState = {
  name: "",
  email: "",
  password: "",
  checkbox: false,
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
      <div className="flex  -mt-5 -mr-2 justify-end">
        <img src={figure2} alt="" className="w-2/3" />
      </div>
      <div className="flex -mt-40  mr-2">
        <img src={person} alt="" />
      </div>

      <div className="formSignUp flex items-center flex-col ">
        <h1 className="font-semibold mt-2 text-gray-500 text-lg">
          Registrate ahora
        </h1>
        <div className="flex flex-col gap-2 pt-5 mt-2">
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
        </div>
      </div>
    </div>
  );
}
