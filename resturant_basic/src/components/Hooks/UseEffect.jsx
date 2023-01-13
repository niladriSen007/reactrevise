import React,{useState,useEffect} from 'react'
import "./style.css"
const UseEffect = () => {

    const [number,setNumber] = useState(0);

    const increment = () => {
        return(
            setNumber(prevNumber=> prevNumber+1)
        )
    }

    useEffect(()=>{
        document.title =` Chat (${number})`
    },[number])
    

  return (
    <>
    <div className="center_div">
        <p>{number}</p>
        <div className="button2" onClick={increment}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment
        </div>
    </div>
    </>
  )
}

export default UseEffect