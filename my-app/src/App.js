import './App.css';
import User from './components/User';
import React,{useState} from 'react';
const App=()=> {
  const [name,setName] = useState() // useState tanımlaması bu şekilde yapılmaktadır.
  const [surName,setSurName] = React.useState() //
  return (
    <div  className='container'>
      <input onChange={event => setName(event.target.value)}/>
      <input onChange={event => setSurName(event.target.value)}/>
      <User
        name = {name}
        surName = {surName}
      />
    </div>
  );
}

export default App;

