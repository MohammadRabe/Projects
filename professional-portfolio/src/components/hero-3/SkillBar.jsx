
const SkillBar = ({skillName,level}) => {
  return (
    <div className="skill">
        <span className="skill-name fs-6 px-2 d-flex justify-content-center align-items-center">
            {skillName}
        </span>
        <span className="skill-bar">
            <span 
            className="skill-level"
            style={{ width: `${level <= 100 ? level : 100}%` }}>
            </span>
        </span>
        
    </div>
  )
}

export default SkillBar