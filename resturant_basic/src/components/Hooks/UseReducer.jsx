import React,{useReducer} from 'react'
import "./style.css"

const initialState = 0;

const reducer = (state,action) =>{
    switch(action.type)
    {
        case "INCREMENT":
            return state+1
        case "DECREMENT":
             return state>0 ?  state-1 : state 
        default:
            return state
    }
}

const UseReducer = () => {

    const [state,dispatch] = useReducer(reducer,initialState);



  return (
    <>
    <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={()=>dispatch({type:"INCREMENT"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment
        </div>

        <div className="button2" onClick={()=>dispatch({type:"DECREMENT"})}>
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

export default UseReducer