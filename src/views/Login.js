import React, { useState } from "react";

import InputForm from "../components/InputForm/InputForm";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";

const initialState = {
  email: "",
  password: "",
};

const lyssa = process.env.PUBLIC_URL + "/assets/lyssa.png";
const google = process.env.PUBLIC_URL + "/assets/google.png";
const figure1 = process.env.PUBLIC_URL + "/assets/figure1.png";

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
          <img src={lyssa} alt="Lyssa" />
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
      <div className="w-full ">
        <div className="px-20 mt-5 flex flex-col gap-3">
          <ButtonPrimary text="Iniciar Sesíon" />
          <ButtonSecondary text="Seguir con Google" icon={google} />
        </div>
        <div className="flex justify-center mt-14">
          <span className="text-gray-500 mr-1">Aun no tengo cuenta</span>
          <a href="#" className="text-teal font-medium">
            Registrarme
          </a>
        </div>
      </div>
    </div>
  );
}
