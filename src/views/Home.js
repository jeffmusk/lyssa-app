import React, { useEffect, useState } from "react";
import { singOut } from "../firebase/Auth";
import data from "../utils/data.json";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [task, setTask] = useState(data.task);

  useEffect(() => {
    setTask(data.task);
  }, []);

  const filerTask = () => {
    let busqueda = task.filter((item) => {
      if (item.title.includes(inputText)) {
        console.log("filtrando");
        console.log(item);
        return item;
      }
    });

    if (inputText.length === 0) {
      setTask(data.task);
    } else {
      setTask(busqueda);
    }
  };

  const onChange = async (e) => {
    e.persist();
    let value = e.target.value;
    console.log(value);
    await setInputText(value);

    filerTask(value);
  };
  return (
    <div>
      <div className="flex justify-center py-5">
        <button
          className="rounded bg-red-500 text-white font-semibold px-8 py-3 shadow-md"
          onClick={singOut}
        >
          Cerrar sesión
        </button>
      </div>
      <div className="flex gap-2 justify-center py-5  bg-gray-100 ">
        <h1>Buscador</h1>
        <input
          type="text"
          className="rounded-md p-2"
          onChange={onChange}
          value={inputText}
        />
      </div>
      <ul className="">
        {task.map((item, index) => (
          <li
            key={index}
            className={"w-full px-4 py-3 my-3 bg-gray-100 shadow-md"}
          >
            {item.title + " " + item.description + " " + item.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
