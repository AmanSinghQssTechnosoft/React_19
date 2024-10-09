
import { useState } from 'react'
import './ToggleSwitch.css'
const ToggleSwitch = () => {
    const[isOn,setIson]=useState(false);
    const setHandleChange=()=>{
        setIson(!isOn);
    }
  return (
    <div
  style={{ backgroundColor: isOn ? '#ff0000' : '#0000ff' }}
  className="parent"
  onClick={setHandleChange}
>
     <div className={`child ${isOn?"off":"on"}`}>
       <span className={`round`}>{isOn?'ON':'OFF'}</span>
     </div>
    </div>
  )
}

export default ToggleSwitch