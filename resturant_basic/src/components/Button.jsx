import React from 'react'

const Button = ({filterItem,category}) => {
  return (
  <>
     <button className="btn-group__item" onClick={()=>filterItem(category)}> {category} </button>
  </>
  )
}

export default Button