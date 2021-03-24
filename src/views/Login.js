import React, { useState } from "react";
import figure1 from "../assets/figure1.png";
import lyssa from "../assets/lyssa.png";

import InputForm from "../components/InputForm/InputForm";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
const initialState = {
  email: "",
  password: "",
};
export default function Login() {
  const [formState, setFormState] = useState(initialState);

  const onchange = (e) => {
    setFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
    console.log(formState);
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
        <div className="flex relative justify-center z-10 -mt-44 w-full px-16  ">
          <img src={lyssa} alt="" />
        </div>
      </div>

      <h1 className="w-full flex justify-center font-bold text-lg text-gray-500 my-5">
        Ingresar
      </h1>

      <div className=" w-full px-12 ">
        <InputForm
          label={"Email"}
          name={"email"}
          onchange={onchange}
          formState={formState}
        />
        <InputForm
          label={"Contraseña"}
          name={"password"}
          onchange={onchange}
          formState={formState}
        />
      </div>
      <div className="w-full flex justify-center ">
        <ButtonPrimary text="Iniciar Sesíon" />
      </div>
    </div>
  );
}
