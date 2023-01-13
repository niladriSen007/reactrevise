import Teams from "./Teams"
import TeamMembers from "./TeamMembers"
const Employees = ({selectedTeam,changeTeam,handleCardClick,employees}) => {



  return (
    <main className="container">

        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-md-8">
               <Teams selectedTeam={selectedTeam} changeTeam={changeTeam}/>
            </div>
        </div>
      
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8 ">
       <div className="card-collection">
       {
                    <TeamMembers  employees={employees}  handleCardClick={handleCardClick}  selectedTeam={selectedTeam}  />
      }
       </div>
        </div>
      </div>
    </main>
  )
}

export default Employees;