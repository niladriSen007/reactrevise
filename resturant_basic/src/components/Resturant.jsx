import React,{useState} from 'react'
import "./style.css"
import Menu from './menuApi'
import Card from './Card'
import Button from './Button'
import Navbar from './Navbar'
const Resturant = () => {

  // const uniqueCtaegory =  [ ...new Set(Menu.map(elem=>elem.category))]
  // console.log(uniqueCtaegory)

    const [menuData, setMenuData] = useState(Menu)

  const filterItem = (category) =>{
    if(category === "All")
    {
      setMenuData(Menu);
    }
    else
    {
      const updatedList = Menu.filter(item=>{
        return item.category === category
      })
      setMenuData(updatedList);
    }
  }

  return (
    <>
    {/* <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group__item" onClick={()=>filterItem("breakfast")}> BreakFast </button>
        {
          uniqueCtaegory.map((item)=>{
            return(
              <Button category = {item} filterItem={filterItem}/>
            )
          })
        }
        
        <button className="btn-group__item" onClick={()=>filterItem("lunch")} > Lunch </button>
        <button className="btn-group__item" onClick={()=>filterItem("evening")} > Evening </button>
      <button className="btn-group__item" onClick={()=>filterItem("dinner")} > Dinner </button>
        <button className="btn-group__item" onClick={()=>setMenuData(Menu)}> All </button> 
      </div>
    </nav> */}
        <Navbar filterItem={filterItem} setMenuData={setMenuData}/>
        <Card menuData={menuData}/>
    </>
  )
}

export default Resturant