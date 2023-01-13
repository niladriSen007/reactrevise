import React,{useState} from 'react'
import "./style.css"
const UseState = () => {

    const [number,setNumber] = useState(0);

    const increment = () => {
        return(
            setNumber(prevNumber=> prevNumber+1)
        )
    }

    const decrement = () => {
        return(
            setNumber(prevNumber=> {
                return prevNumber>0 ?  prevNumber-1:  prevNumber
            })
        )
    }

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

        <div className="button2" onClick={decrement}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Decrement
        </div>


    </div>
    </>
  )
}

export default UseState