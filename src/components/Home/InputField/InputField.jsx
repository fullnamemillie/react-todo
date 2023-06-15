import React from "react";
import style from "./InputField.module.css";

const InputField = ({ addToDo }) => {
  const [title, setTitle] = React.useState("");

  return (
    <div className={style.wrapper}>
      <input
        onChange={(event) => setTitle(event.target.value)}
        className={style.input}
        type="text"
      />
      <button onClick={() => addToDo(title)} className={style.button}>
        Add
      </button>
    </div>
  );
};

export default InputField;
