import React from "react";
import style from "./ToDoItem.module.css";
import Check from "./Check";
import Remove from "./Remove";

const ToDoItem = ({ todo, changeToDo, removeToDo }) => {
  return (
    <div className={style.wrapper}>
      <Check isCompleted={todo.isCompleted} onClick={()=> changeToDo(todo.id)} />
      <div className={todo.isCompleted ? style.active : style.title}>
        {todo.title}
      </div>
      <div className={style.remove} onClick={()=> removeToDo(todo.id)}>
        <Remove />
      </div>
    </div>
  );
};

export default ToDoItem;
