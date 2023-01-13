import React from 'react'
import Menu from './menuApi'
import Button from './Button'
const Navbar = ({filterItem,setMenuData}) => {
    const uniqueCtaegory =  [ ...new Set(Menu.map(elem=>elem.category))]
  return (
    <>
            <nav className="navbar">
      <div className="btn-group">
        {/* <button className="btn-group__item" onClick={()=>filterItem("breakfast")}> BreakFast </button> */}
        {
          uniqueCtaegory.map((item)=>{
            return(
              <Button category = {item} filterItem={filterItem}/>
            )
          })
        }
        
        {/* <button className="btn-group__item" onClick={()=>filterItem("lunch")} > Lunch </button>
        <button className="btn-group__item" onClick={()=>filterItem("evening")} > Evening </button>
      <button className="btn-group__item" onClick={()=>filterItem("dinner")} > Dinner </button> */}
        <button className="btn-group__item" onClick={()=>filterItem("All")}> All </button> 
      </div>
    </nav>
    </>
  )
}

export default Navbar