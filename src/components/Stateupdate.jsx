import { useState } from "react"

const Stateupdate = () => {
    const[state,newState]=useState(0);
    const handleChange=()=>{
        newState(prevState=>prevState+1);
    }
  return (
    <>
    <h1>{state}</h1>
    <button onClick={handleChange}>INCREMENT</button>
    </>
  )
}

export default Stateupdate