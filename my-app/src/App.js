import './App.css';
import List from './components/List';
import User from './components/User';
import React,{useState} from 'react';
const App=()=> {
  const [task,setTask] = useState() // useState tanımlaması bu şekilde yapılmaktadır.
  const [todo,setTodo] = React.useState() //
  return (
    <div  className='container'>
      <User
        task = {task}
        todo = {todo}
      />
      <input onChange={event => setTask(event.target.value)}/>
      
      <button onChange={event => setTodo(event.target.value)}>Add Todo</button>
      <List></List>
    </div>
  );
}

export default App;

