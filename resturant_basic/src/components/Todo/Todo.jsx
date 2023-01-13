import React,{useState,useEffect} from 'react'
import "./style1.css"

    const getLocalData = () =>{
        const list =  localStorage.getItem(("mytodolist"));
        if (list)
            return JSON.parse(list)
        else
            return []
    }

const Todo = () => {

    const [inputData,setInputData] = useState({
        todo:"",
    })


    const[itemList,setItemList] = useState(getLocalData())

    const [editItem,setEditItem] = useState("");

    const [toggleBtn,setToggleBtn]= useState(false)

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setInputData(prevData=>{
            return{
                ...prevData,
                [name]:value,
            }
        })
    }

    const addTodo = () =>{
        if(!inputData.todo)
            alert("Please add a todo item")
        else if(inputData.todo && toggleBtn)
        {
                setItemList(itemList.map((item)=>{
                    if(item.id === editItem)
                    {
                        return {...item,name:inputData.todo}
                    }
                    return item;
                }))
                setInputData(prevInpData=>({todo:""}))
                setEditItem(null)
                setToggleBtn(false)
        }
        else    
            {
                const newObj = {
                    id:new Date().getTime().toString(),
                    name:inputData.todo,
                }
                setItemList([...itemList,newObj]);
                setInputData(prevInputData=>({todo:""}))
            }
    }

    const deleteTodo = (id) =>{
        const newTodoList = itemList.filter(item=>item.id!==id)
        setItemList(newTodoList)
    }

    const removeAll = () =>{
        setItemList([])
    }

    const editTodo = (id) =>{
        const item_todo = itemList.find((currElem)=>currElem.id === id)
        console.log(item_todo)

        setEditItem(id)

        setInputData(prevData=>({todo:item_todo.name}))

        setToggleBtn(true)

    }


    useEffect(()=>{
        localStorage.setItem("mytodolist",JSON.stringify(itemList))
     },[itemList])


  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="https://raw.githubusercontent.com/thapatechnical/reactjsByThapaTechnical/fdfcb12eac37b74d060e344e977df5749a939200/public/images/todo.svg"  alt="todoLogo" />
                    <figcaption>Add your list here 😎</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" name="todo" id="todo" placeholder='✍ Add your item' className='form-control' value={inputData.todo} onChange={(e)=>handleChange(e)}/>
                   { toggleBtn?  <i className="far fa-edit add-btn" onClick={addTodo}></i> :<i className=" fa fa-solid fa-plus add-btn" onClick={addTodo}></i>}
                  
                </div>
                <div className="showItems" >
               {
                itemList.map((item,index)=>{
                    return(                      
                        <div className="eachItem" key={index}>
                            <h3>{item.name}</h3>
                            <div className="todo-btn">
                            <i className="far fa-edit add-btn" onClick={()=>editTodo(item.id)}></i>
                            <i className="far fa-trash-alt add-btn" onClick={()=>deleteTodo(item.id)}></i>
                            </div>
                        </div>                
                    )                  
                })
               }
               </div>
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                           <span> CHECK LIST</span>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo