// import React, { Component } from 'react';

// export class User extends Component {
//   render() {

//     // Destructing

//     const {name,department,salary,surName} = this.props;
//     return <div>
//         <ul>
//             <li>Name: {name}</li>
//             <li>SurName:{surName}</li>
//             <li>Salary:{salary}</li>
//             <li>Depart:{surName}</li>
//         </ul>
//     </div>;
//   }
// }

// export default User;

const User = ({todo,task})=>{
  return (
    <div>
      {todo}{task}
    </div>
  )
}
export default User;