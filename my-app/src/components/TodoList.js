import React from 'react';
const TodoList = ({todoList,task}) => {
  const filterTodoList = todoList.filter((value) => value.toLowerCase().includes(task.toLowerCase()))
  console.log(filterTodoList)
  return 
  <div>
    <ul>
      {filterTodoList.map((item,index)=>(
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>;
}
export default TodoList;