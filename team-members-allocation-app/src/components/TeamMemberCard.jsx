import React from 'react'
import femaleProfile from "../images/femaleProfile.jpg"
import maleProfile from "../images/maleProfile.jpg"
const TeamMemberCard = ({emp,selectedTeam,handleCardClick}) => {
    return(
        <div key={`id-${emp.id}`} className={emp.teamName === selectedTeam ? "card m-2 standout" : "card m-2"} id={emp.id} style={{cursor:"pointer"}} onClick={handleCardClick}>
            <img src={emp.gender === "male" ? maleProfile : femaleProfile} alt="profile" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title"> Full Name : {emp.fullName}</h5>
                <p className="card-text"> Designation : {emp.designation}</p>
            </div>
        </div>
    )
}

export default TeamMemberCard