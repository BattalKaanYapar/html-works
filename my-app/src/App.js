import './App.css';
import User from './components/User';
import React,{useState,useEffect} from 'react';
import TodoList from './components/TodoList';

const App=()=> {
  // const [name,setName] = useState() // useState tanımlaması bu şekilde yapılmaktadır.
  // const [surName,setSurName] = React.useState() //
  const [todoList,setTodoList] = useState(["Kaan","Hasan","Okan","Oğuz"])
  const [task,setTask] = useState("")
  const sayi = 5;

  const handleClick = () =>{
    setTodoList([...todoList,task]) // array'e pushlamış olacak değerimizi.
    setTask("")
  }
  console.log('DOM')
  useEffect(()=>{
    console.log('companent render edildi.')
  },[] )
  useEffect(()=>{
    console.log('task eklendi.')
  },[todoList] )
  return (
    <div  className='container'>
      {/* <input onChange={event => setName(event.target.value)}/>
      <input onChange={event => setSurName(event.target.value)}/>
      <User
        name = {name}
        surName = {surName}
      /> */}
      {
          sayi != 5 && (<div>Sayi beş'e eşittir.</div>) // if else kullanımı
          
      }
      <input 
        onChange={event => setTask(event.target.value)} value={task}
      />
      <button onClick={handleClick}>Add Todo</button>
      <TodoList
        todoList={todoList}
        task = {task}
      />
    </div>
  );
}

export default App;

