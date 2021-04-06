import React, { useState, useEffect } from "react";
import { GiCancel } from "react-icons/gi";
import InputPassword from "../InputForm/InputPassword";
import { updatePassword } from "../../firebase/Auth";

const initialState = {
  password1: "",
  password2: "",
};

export default function ModalUpdatePassword(props) {
  const { setUpdatePassword } = props;
  const [formState, setFormState] = useState(initialState);
  const [error, setError] = useState(null);

  useEffect(() => {
    validateNewPassword();
  }, [formState]);

  const validateNewPassword = async () => {
    if (formState.password1 !== formState.password2) {
      setError("Los campos no son iguales");
    } else {
      setError(null);
      if (formState.password1.length < 6 || formState.password1.length > 10) {
        setError("La contraseña debe tener entre 6 y 10 caracteres");
      } else {
        setError(null);
      }
    }
  };

  const onChange = async (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setFormState(() => ({ ...formState, [name]: value }));
  };

  const newPassword = async () => {
    if (!error) {
      const response = await updatePassword(formState.password1);
      console.log(response);
    } else {
      alert("Solucione los errores antes de actualizar la contraseña");
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900 bg-opacity-70 absolute">
      <GiCancel
        className="absolute text-white text-3xl top-4 right-4"
        onClick={() => {
          setUpdatePassword(false);
        }}
      />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-white px-5 py-5 rounded flex flex-col justify-center ">
          <p className="pb-3 text-gray-500 text-center">
            Agregue su nueva contraseña
          </p>
          <InputPassword
            label="Nueva contraseña"
            name="password1"
            formState={formState}
            onchange={onChange}
            errorMessage={null}
          />
          <InputPassword
            label="Repita la contraseña"
            name="password2"
            formState={formState}
            onchange={onChange}
            errorMessage={error}
          />
          {!error && (
            <button
              className="border-2 border-teal rounded-lg px-5 py-2 text-teal"
              onClick={() => {
                newPassword();
              }}
            >
              Actualizar Contraseña
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
