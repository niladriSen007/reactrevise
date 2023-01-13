import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({ employees, handleCardClick, selectedTeam }) => {
  return (
    employees.map((emp) => (
      <TeamMemberCard emp={emp} handleCardClick={handleCardClick} selectedTeam={selectedTeam} />
    ))
  )
}
export default TeamMembers;