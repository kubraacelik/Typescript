import React, { ChangeEvent, FC} from 'react';
import { useState } from 'react';
import {todoType} from "./apptypes"
import './App.css';

const App : FC = () => {
  const [task, setTask] = useState<string>('')
  const [workDay, setWorkDay] = useState<number>(0)
  const [todoList, setTodoList] = useState<todoType[]>([])

  console.log(todoList);

  //inputlar her değiştiğinde
  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'task'){
      setTask(event.target.value);
    }
    else{
      setWorkDay(Number(event.target.value));
    }
  };

  //butona basınca
  const addNewTask = () => {
    const newTask = {
      taskName:task,
      workDay:workDay
    }
    setTodoList([...todoList, newTask]);
    setTask('');
    setWorkDay(0);
  }

  return (
    <div className="App">
      <div>
        <input type="text" value={task} name='task' placeholder='Taskınızı giriniz' onChange={handleChange} />
        <input type="number" value={workDay} name='workDay' placeholder='Kaç günde tamamladınız?' onChange={handleChange} />
        <button onClick={addNewTask}>Yeni Task Ekle</button>
      </div>
    </div>
  );
}

export default App;
