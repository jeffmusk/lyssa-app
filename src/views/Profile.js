import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { AiFillCheckCircle } from "react-icons/ai";
import { useCurrentUser } from "../context/AuthContext";
import { updateDisplayName } from "../firebase/Auth";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ModalUpdatePassword from "../components/ModalUpdatePassword/ModalUpdatePassword";

const profile = process.env.PUBLIC_URL + "/assets/profile.png";
const avatar = process.env.PUBLIC_URL + "/assets/avatar.jpg";

export default function Profile() {
  const { currentUser } = useCurrentUser();
  const [isEdit, setIsEdit] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);

  const initialState = {
    email: currentUser.email,
    displayName: currentUser.displayName,
  };
  const [formState, setFormState] = useState(initialState);

  const onChangeEdit = () => {
    setIsEdit(!isEdit);
  };
  const onChange = async (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setFormState(() => ({ ...formState, [name]: value }));
  };

  const updateNameUser = () => {
    updateDisplayName(formState.displayName);
    setIsEdit(false);
  };

  return (
    <div className="flex flex-col h-screen items-center bg-gray-100 ">
      <img src={profile} alt="profile" className="-mt-1 " />
      <div className="avatar ml-5 -mt-28 self-start flex ">
        <img
          src={currentUser.photoURL ? currentUser.photoURL : avatar}
          alt="avatar"
          className="image h-28 w-28  bg-gray-50 border-white border-4 rounded-full  shadow-md"
        />
        <button className="w-8 h-8 -ml-8 bg-gray-300 border-4  text-teal  border-white shadow-md rounded-full self-end  flex justify-center items-center">
          <FiCamera className="cursor-pointer " />
        </button>
      </div>
      <div className="card w-10/12 py-4 px-2 shadow-md rounded-md  mx-8 bg-white mt-20 flex flex-col gap-1">
        <div
          className="text-teal self-end mr-2 w-8 h-8 shadow-lg rounded-full flex justify-center items-center "
          onClick={() => onChangeEdit()}
        >
          <FaRegEdit className="cursor-pointer text-lg" />
        </div>

        {currentUser.displayName ? (
          isEdit ? (
            <input
              type="text"
              value={formState.displayName}
              name="displayName"
              onChange={onChange}
              className="font-semibold text-gray-700 text-lg border-b-2 border-l-2 px-1"
            />
          ) : (
            <h1 className="font-semibold text-gray-700 text-lg -mt-4">
              {currentUser.displayName}
            </h1>
          )
        ) : (
          <br />
        )}

        <h2 className="text-gray-500 text-sm ">
          {currentUser.email}

          {currentUser.emailVerified && (
            <AiFillCheckCircle className="inline ml-2 text-lg text-teal -mt-1" />
          )}
        </h2>

        <p className="text-gray-500 text-sm mb-1">
          Ultima ingreso:{" "}
          <span className="text-teal text-xs ml-1">
            {currentUser.metadata.lastSignInTime}
          </span>
        </p>

        <span
          className="text-teal text-sm mt-2 underline cursor-pointer"
          onClick={() => {
            setUpdatePassword(true);
          }}
        >
          Cambiar contraseña
        </span>
      </div>
      <div className="w-full mt-10 flex justify-center">
        {isEdit && <ButtonPrimary text="Actualizar" onClick={updateNameUser} />}
      </div>
      {updatePassword && (
        <ModalUpdatePassword setUpdatePassword={setUpdatePassword} />
      )}
    </div>
  );
}

/*  */
