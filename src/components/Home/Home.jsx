import React from 'react';
import ToDoItem from './Items/ToDoItem';
import style from './Home.module.css';
import InputField from './InputField/InputField';

const array = [
  {id: 1,
    title: 'finish',
    isCompleted: false,

  },
  {id: 2,
    title: 'read',
    isCompleted: false,

  },
  {id: 3,
    title: 'send',
    isCompleted: false,

  }
]

const Home = () => {
const [todos, setToDos] = React.useState(array);

const changeToDo = (id) => {
  const copy = [...todos];
  const current = copy.find(arr => arr.id === id);
  current.isCompleted = !current.isCompleted;
  setToDos(copy);
}

const removeToDo = id => {
  setToDos([...todos].filter(arr => arr.id !== id))
}

const addToDo = (title) => {
  setToDos([...todos, {
    id: new Date(),
    title,
    isCompleted: false,
  },] )
}

window.addToDo = addToDo;

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>ToDo List</h1>
      <InputField addToDo={addToDo}/>
      {todos.map((arr) => <ToDoItem key={arr.id} todo={arr} changeToDo={changeToDo} removeToDo={removeToDo} />)}
    </div>
    
  )
}

export default Home;