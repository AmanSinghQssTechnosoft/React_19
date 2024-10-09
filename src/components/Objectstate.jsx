import { useState } from "react";

const Objectstate = () => {
  const[users,Setusers]=useState(
       [
        { name: "aman", age: 12 },
        { name: "ramu", age: 24 },
        { name: "shyam", age: 36 },
      ] 
  ) 
  Setusers();
  return (
    <>
        <ul>
         {users.map((user,index)=>(
          <li key={index}>
            <i>{user.name}</i>
            <i>{user.age}</i>
          </li>
          ))}
        </ul>
    </>
  );
};

export default Objectstate;
