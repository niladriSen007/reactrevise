import { useState,useEffect } from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import Header from "./components/Header" 
import Footer from "./components/Footer"
import Employees from "./components/Employees"
import NotFound from "./components/NotFound";
import GroupedTeamMembers from "./components/GroupedTeamMembers";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
export default function App() {

  const [selectedTeam,setSelectedTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB")

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employeesList")) ||  [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }])


  useEffect(()=>{
    localStorage.setItem("employeesList",JSON.stringify(employees));
  },[employees])

  useEffect(()=>{
    localStorage.setItem("selectedTeam",JSON.stringify(selectedTeam));
  },[selectedTeam])



  const changeTeam = (e)=>{
    setSelectedTeam(e.target.value);
  }

  const handleCardClick = (e) =>{
    const transformEmployees = employees.map(employee=> employee.id === parseInt(e.currentTarget.id)?(employee.teamName === selectedTeam )?{...employee,teamName:""}:{...employee,teamName:selectedTeam}:employee);
    setEmployees(transformEmployees)
  }


  return (
    <BrowserRouter>
    <Navbar />
      <Header selectedTeam={selectedTeam} teamMemberCount ={employees.filter(employee=>employee.teamName === selectedTeam).length}/>
      <Routes>
              <Route exact path="/" element={ <Employees selectedTeam={selectedTeam} handleCardClick={handleCardClick} employees={employees} changeTeam={changeTeam}/>}></Route>
              <Route exact path="/GroupedTeamMembers" element={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />}></Route>
              <Route exact path="*" element={<NotFound />}></Route>
      </Routes>
     
      <Footer />
    </BrowserRouter>
  )
}
