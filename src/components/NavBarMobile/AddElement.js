import React from "react";
import { withRouter } from "react-router-dom";
import { AiOutlinePlus, AiOutlineSave } from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";

function AddElement(props) {
  const location = props.location.pathname;
  function add() {
    switch (location) {
      case "/home":
        props.history.push("/newtask");
        break;
      case "/lists":
        props.history.push("/newlist");
        break;
      case "/bills":
        console.log("Bills");
        break;

      default:
        props.history.goBack();
        break;
    }
  }

  return (
    <div className="w-full flex justify-center">
      <button
        className="w-16 h-16 rounded-full fixed bottom-6 border-white border-4 bg-teal  flex justify-center items-center  shadow-lg inset-auto focus:outline-none "
        onClick={() => add()}
      >
        {(location === "/home" ||
          location === "/lists" ||
          location === "/bills") && (
          <AiOutlinePlus className="text-white text-2xl" />
        )}
        {(location === "/newtask" ||
          location === "/newlist" ||
          location === "/newbill") && (
          <MdKeyboardArrowLeft className="text-white text-2xl" />
        )}
      </button>

      {/*  <div className="newTask fixed w-screen h-screen bg-gray-500">
        <h1>GGGG</h1>
      </div> */}
    </div>
  );
}

export default withRouter(AddElement);
