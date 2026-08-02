import { useState } from "react"
import SkillBar from "./SkillBar";
import { Rate } from "antd"
const Hero_3 = () => {
    const [myFocus,setMyFocus] = useState([
        'UI/UX Design','Responsive','Web Design','Mobile App Design'
    ]);
    const [skills,setSkills] = useState([
        {name:'HTML',level:90},
        {name:'CSS',level:90},
        {name:'JavaScript',level:80},
        {name:'React',level:80},
        {name:'Photoshop',level:90},
        {name:'Adobe XD',level:70},
        {name:'Node.js',level:90},
        {name:'WordPress',level:50},
    ])
  return (
    <div id="hero-3" className="hero hero-3 text-light d-flex flex-column justify-content-center align-items-center">
        <div className="heading w-75">
            <h1>Skills</h1>
            <p>Lorem ipsum dolor
                , sit amet consectetur
                 adipisicing elit. Odi
                 o quidem laudantium 
                 reprehenderit sed ex
                 plicabo, quisquam ipsa
                  aliquid eaque deserunt
                  . Ea, explicabo.
                   Voluptatum asperiores
                    delectus
                 neque quam amet
                  voluptatem vel
                   aspernatur.
            </p>
        </div>
        <div className="skills-content mt-5 w-100 d-flex flex-column flex-lg-row justify-content-evenly gap-5 align-items-center">
            <div className="my-focus fs-2 d-flex flex-column ">
                 <span className="list-header text-uppercase">my focus</span>
                <ul className="my-focus-list list-unstyled text-center text-lg-start">
                    {myFocus.map((aspect)=>{
                        return (
                            <li key={aspect}>{aspect}</li>
                        );
                    })}
                </ul>
            </div>
            <div className="skill-levels d-flex flex-column gap-3">
                {
                skills.map((skill)=>{
                    return(
                        <SkillBar skillName={skill.name} level={skill.level} />
                    );
                })
                }
            </div>
        </div>
        <span className="text-white mt-5 fw-bold d-flex flex-column gap-2 justify-content-center align-items-center">
                <span >Rate my Skills</span> 
                <span className="border border-white bg-white rounded p-3"><Rate starBg="gold" size="large" /></span>
            </span>
    </div>
  )
}

export default Hero_3